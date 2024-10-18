package register

import (
	"log"
	"loginform/models"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func PostRegisterNewUser(c *gin.Context, db *gorm.DB) {
	var newUser models.User

	if err := c.BindJSON(&newUser); err != nil {
		log.Fatalf("Error with reading user: %s", err)
		c.JSON(http.StatusBadRequest, gin.H{
			"error": err,
		})
		return
	}

	if err := db.Create(&newUser).Error; err != nil {
		log.Fatalf("Error with adding user to db: %s", err)
		c.JSON(http.StatusInternalServerError, gin.H{
			"error": err,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"status": "User have registrated",
	})
}
