import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRedirect = () => {
  const isAuthenticated = !!localStorage.getItem('token'); // Проверяем наличие токена

  return isAuthenticated ? <Navigate to="/main" /> : <Navigate to="/login" />;
};

export default AuthRedirect;
