import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const isAuthenticated = !!localStorage.getItem('token'); // Проверяем наличие токена

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="login" />}
    />
  );
};

export default PrivateRoute;
