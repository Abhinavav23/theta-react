import React, { useContext } from "react";
import { AuthContext } from "../App";
import { Navigate } from "react-router-dom";

export const AuthNavigator = ({ children,navigateTo  }) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log('children', children);
  if (!isLoggedIn) {
    return <Navigate to={`/${navigateTo}`} />;
  } else {
    return children;
  }
};
