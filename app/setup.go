package app

import (
	"backend/config"
	"backend/models"
	"backend/router"
	"backend/storage"
	"fmt"
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
)


func SetupAndRunApp() error {
	// Load .env
	err := config.LoadENV()
	if err != nil {
		return err
	}

	// Database
	config := &storage.Config{
		Host: os.Getenv("DB_HOST"),
		Port: os.Getenv("DB_PORT"),
		User: os.Getenv("DB_USER"),
		Password: os.Getenv("DB_PASS"),
		DBName: os.Getenv("DB_DBNAME"),
		SSLMode: os.Getenv("DB_SSLMODE"),
		
	}

	db, err := storage.NewConnection(config)

	if err != nil {
		log.Fatal("could not the database")
	}

	err = models.MigrateUser(db)
	if err != nil {
		fmt.Println("Error migrating the database:", err)
		log.Fatal("could not migrate db")
	}

	r := &router.Repository {
		DB: db,
	}

	// Server menggunakan fiber karena mirip dengan express js dan 10x lebih cepat.
	app := fiber.New(fiber.Config{
		Prefork: true,
		ServerHeader: "Fiber",
	})
	r.SetupRoutes(app)
	app.Listen(":8081")
	log.Println("Server started on :8081")

	return nil
}