package login

import (
	"log"
	"loginform/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func PostLoginUser(c *gin.Context, db *gorm.DB) {
	var userForm models.User

	if err := c.BindJSON(&userForm); err != nil {
		log.Fatalf("Error with authorization user: %s", err)
	}

	c.JSON(http.StatusUnauthorized, gin.H{
		"error": "Incorrect data about user",
	})
}
