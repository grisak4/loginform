package routes

import (
	"loginform/middleware/auth"
	"loginform/middlewares/cors"
	"loginform/services/hello"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func InitRoutes(router *gin.Engine, db *gorm.DB) {
	cors.InitCors(router)

	// test
	router.GET("/hello", func(c *gin.Context) {
		hello.GetHello(c)
	})

	// authorization
	router.POST("/register", func(c *gin.Context) {
		hello.GetHello(c)
	})
	router.POST("/login", func(c *gin.Context) {
		hello.GetHello(c)
	})

	// auth middleware
	authRoutes := router.Group("/auth")
	authRoutes.Use(auth.AuthMiddleware())
	{

	}
}
