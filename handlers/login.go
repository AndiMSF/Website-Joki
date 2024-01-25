package handlers

import (
	"backend/config"
	"backend/models"
	"net/http"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

// Login
func (r *Repository) Login(context *fiber.Ctx) error {
	userRequest := User{}

	// Ambil data dari http request
	err := context.BodyParser(&userRequest)

	if err != nil {
		context.Status(http.StatusUnprocessableEntity).JSON(
			&fiber.Map{"message": "request failed"})
		return err
	}

	// Cari user di database berdasarkan email
	var userFromDB models.User
	result := r.DB.Where("email = ?", userRequest.Email).First(&userFromDB)

	if result.Error == gorm.ErrRecordNotFound {
		// User tidak ditemukan di database
		context.Status(http.StatusUnauthorized).JSON(
			&fiber.Map{"message": "email not registered"})
		return nil
	} else if result.Error != nil {
		// Terjadi kesalahan lain saat mencari user
		context.Status(http.StatusInternalServerError).JSON(
			&fiber.Map{"message": "internal server error"})
		return result.Error
	}

	// Mengambil nilai password dari pointer string (*string) ke string
	hashedPassword := ""
	if userFromDB.Password != nil {
		hashedPassword = *userFromDB.Password
	}

	// Bandingkan password yang dimasukkan dengan password di database
	err = bcrypt.CompareHashAndPassword([]byte(hashedPassword), []byte(userRequest.Password))
	if err != nil {
		// Password tidak sesuai
		context.Status(http.StatusUnauthorized).JSON(
			&fiber.Map{"message": "invalid password"})
		return nil
	}

	// proses pembuatan token jwt
	expTime := time.Now().Add(time.Hour * 24)
	claims := &config.JWTClaim{
		Username: *userFromDB.NamaLengkap,
		RegisteredClaims: jwt.RegisteredClaims{
			Issuer:    "go-jwt-mux",
			ExpiresAt: jwt.NewNumericDate(expTime),
		},
	}

	// medeklarasikan algoritma yang akan digunakan untuk signing
	tokenAlgo := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	// signed token
	token, err := tokenAlgo.SignedString(config.JWT_KEY)
	if err != nil {
		context.Status(http.StatusInternalServerError).JSON(
			&fiber.Map{"message": "internal server error"})
		return err
	}

	// set token as a cookie
	context.Cookie(&fiber.Cookie{
		Name:     "token",
		Value:    token,
		Expires:  expTime,
		HTTPOnly: true,
		Secure:   true, // Set to true if using HTTPS
	})


	// Return login successful message
    context.Status(http.StatusOK).JSON(
        &fiber.Map{"message": "login successful"})

    return nil
}