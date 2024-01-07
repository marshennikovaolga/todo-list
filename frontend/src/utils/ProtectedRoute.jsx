import React from "react";
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, loggedIn, ...props }) => {
    return loggedIn ? (
      <Route {...props} element={element} />
    ) : (
      <Navigate to="/login" />
    );
  };
  
  export default ProtectedRoute;