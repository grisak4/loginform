import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate(); // Хук для навигации

    const handleLogout = () => {
        localStorage.removeItem('token'); // Удаляем токен из localStorage
        navigate('/login'); // Перенаправляем пользователя на страницу входа
    };

    return (
        <div>
            <h1>Hello world!</h1>
            <button onClick={handleLogout}>Logout</button> {/* Кнопка выхода */}
        </div>
    );
}

export default Home;
