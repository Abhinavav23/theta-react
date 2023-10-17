import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
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
        <li>
          {/* <a href="/cart">cart</a> */}
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};
