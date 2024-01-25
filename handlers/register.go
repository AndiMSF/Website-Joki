package handlers

import (
	"backend/models"
	"net/http"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
	"gorm.io/gorm"
)

type User struct {
	NamaLengkap  	string `json:"namaLengkap"`
	Email        	string `json:"email"`
	Password  		string `json:"password"`
	ConfPassword 	string `json:"confPassword"`
	NoHp         	string `json:"noHp"`
}

type Repository struct {
	DB *gorm.DB
}

// Register
func (r *Repository) Register(context *fiber.Ctx) error {
	userRequest := User{}

	// Ambil data dari http request
	err := context.BodyParser(&userRequest)

	if err != nil {
		context.Status(http.StatusUnprocessableEntity).JSON(
			&fiber.Map{"message": "request failed"})
		return err
	}

	// Periksa apakah plain password dan confPassword sama
	if userRequest.Password != userRequest.ConfPassword {
		context.Status(http.StatusUnprocessableEntity).JSON(
			&fiber.Map{"message": "password and confirm password do not match"})
		return nil
	}

	// Hash password menggunakan bcrypt sebelum menyimpan ke database
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(userRequest.Password), bcrypt.DefaultCost)
	if err != nil {
		context.Status(http.StatusInternalServerError).JSON(
			&fiber.Map{"message": "internal server error"})
		return err
	}
	hashedPasswordStr := string(hashedPassword)

	// Simpan password yang telah di-hash ke dalam kolom Password
	user := models.User{
		NamaLengkap:  &userRequest.NamaLengkap,
		Email:        &userRequest.Email,
		Password:     &hashedPasswordStr,
		NoHp:         &userRequest.NoHp,
	}

	// Simpan user ke dalam database
	err = r.DB.Create(&user).Error
	if err != nil {
		context.Status(http.StatusUnprocessableEntity).JSON(
			&fiber.Map{"message": "register failed"})
		return err
	}

	context.Status(http.StatusOK).JSON(
		&fiber.Map{"message": "register success"})

	return nil
}