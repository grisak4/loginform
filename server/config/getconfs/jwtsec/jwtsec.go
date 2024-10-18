package jwtsec

import (
	"log"
	"os"
)

func GetJwt() []byte {
	jwtSecret := os.Getenv("JWT_SECRET")
	if jwtSecret == "" {
		log.Fatal("JWT_SECRET is not set in environment variables")
	}
	return []byte(jwtSecret)
}
