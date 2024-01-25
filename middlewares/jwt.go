package middlewares

import (
	"backend/config"
	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v4"
	"net/http"
)

// JWTMiddleware is a Fiber middleware to check JWT tokens
func JWTMiddleware(c *fiber.Ctx) error {
	tokenCookie := c.Cookies("token")
	if tokenCookie == "" {
		response := fiber.Map{"message": "Unauthorized"}
		return c.Status(http.StatusUnauthorized).JSON(response)
	}

	// Mengambil token value
	tokenString := tokenCookie

	claims := &config.JWTClaim{}
	// Parsing token jwt
	token, err := jwt.ParseWithClaims(tokenString, claims, func(t *jwt.Token) (interface{}, error) {
		return config.JWT_KEY, nil
	})

	if err != nil {
		v, _ := err.(*jwt.ValidationError)
		switch v.Errors {
		case jwt.ValidationErrorSignatureInvalid:
			// Token invalid
			response := fiber.Map{"message": "Unauthorized"}
			return c.Status(http.StatusUnauthorized).JSON(response)
		case jwt.ValidationErrorExpired:
			// Token expired
			response := fiber.Map{"message": "Unauthorized, Token expired!"}
			return c.Status(http.StatusUnauthorized).JSON(response)
		default:
			response := fiber.Map{"message": "Unauthorized"}
			return c.Status(http.StatusUnauthorized).JSON(response)
		}
	}

	if !token.Valid {
		response := fiber.Map{"message": "Unauthorized"}
		return c.Status(http.StatusUnauthorized).JSON(response)
	}

	return c.Next()
}
