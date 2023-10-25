import React, { useContext } from "react";
import { AuthContext } from "../App";
import { Navigate, useLocation } from "react-router-dom";

export const AuthNavigator = ({ children, navigateTo }) => {
  const { isLoggedIn } = useContext(AuthContext);
  //   console.log('children', children);
  const location = useLocation();
  console.log('location', location);
  if (!isLoggedIn) {
    return <Navigate to={`/login`} state={{myPreviousPath: location.pathname}}/>;
  } else {
    return children;
  }
};
