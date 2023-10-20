import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./App";

export const Navbar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <nav className="navbar">
      <ul>
        <li>
          {/* <a href="/home">Home</a> */}
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          {/* <a href="/profile">Profile</a> */}
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li>
          {/* <a href="/about">About</a> */}
          <NavLink to="/about">About</NavLink>
        </li>

        {!isLoggedIn && (
          <li>
            {/* <a href="/cart">cart</a> */}
            {/* <NavLink to="/cart">Cart</NavLink> */}
            <NavLink to="/login">Login</NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};


/*
const a = 90; //absolute

const b = 20; //absolute

const c = a+20; //30 -->relative to a
*/