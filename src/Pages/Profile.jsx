import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

export const Profile = () => {
  const user = JSON.parse(sessionStorage.getItem("loggedInUser"));
  const navigate = useNavigate();
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);

  const logout = () => {
    sessionStorage.removeItem("loggedInUser");
    navigate("/login");
    setIsLoggedIn(false);
  };

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     console.log("navigation");
  //     navigate("/login");
  //   }
  // }, [isLoggedIn]);

  return user ? (
    <section>
      <h3>Profile Info</h3>
      <p>fullName: {user.fullName}</p>
      <p>Email: {user.email}</p>
      <p>Role: {user.role}</p>

      <button onClick={logout}>Logout</button>
    </section>
  ) : (
    <div>User Not logged In: </div>
  );
};
