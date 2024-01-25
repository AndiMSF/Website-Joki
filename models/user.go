package models

import "gorm.io/gorm"

type User struct {
	UserId			uint		`gorm:"primary key;autoIncrement" json:"userId"`
	NamaLengkap 	*string		`json:"namaLengkap"`	
	Email			*string		`json:"email"`
	Password 		*string		`json:"password"`
	NoHp			*string		`json:"noHp"`
}

func MigrateUser(db *gorm.DB) error {
	err := db.AutoMigrate(&User{})
	return err
}