package config

import (
	"log"

	"github.com/joho/godotenv"
)

func LoadENV() error {
	// Load .env
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}
	return nil
}