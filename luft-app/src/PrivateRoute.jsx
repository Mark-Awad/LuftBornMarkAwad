import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
  const isAuthenticated = true; // replace this with your authentication logic

  return (
    <Route
      {...rest}
      element={isAuthenticated ? children : <Navigate to="/loginpage" replace />}
    />
  );
};

export default PrivateRoute;