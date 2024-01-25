package router

import (
	"backend/handlers"
	"backend/middlewares"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type Repository struct {
	DB *gorm.DB
}

// Api
func(r *Repository) SetupRoutes(app *fiber.App){
	h := &handlers.Repository{DB: r.DB}

	// Middleware for JWT protection
	jwtMiddleware := middlewares.JWTMiddleware

	// Routes without protection
	app.Post("/api/register", h.Register)
	app.Post("/api/login", h.Login)

	// Routes with protection
	api := app.Group("/api")
	api.Use(jwtMiddleware) // Applied to all routes in the group
	{
		api.Get("/", func(c *fiber.Ctx) error {
			// Replace this with your actual logic
			return c.JSON(fiber.Map{"message": "Welcome to the protected home route!"})
		})
	}
}
// End of Api