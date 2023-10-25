import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../App";

// const userList = [
//   {
//     id: "1001",
//     name: "Akash",
//     role: "student",
//     email: "Akash@mail.com",
//     pwd: "123456",
//   },
//   {
//     id: "1002",
//     name: "Naveen",
//     role: "student",
//     email: "Naveen@mail.com",
//     pwd: "123456",
//   },
//   {
//     id: "1003",
//     name: "Faraz",
//     role: "student",
//     email: "Faraz@mail.com",
//     pwd: "123456",
//   },
//   {
//     id: "1004",
//     name: "Prashant",
//     role: "student",
//     email: "Prashant@mail.com",
//     pwd: "123456",
//   },
//   {
//     id: "1008",
//     name: "Suraj",
//     role: "student",
//     email: "Suraj@mail.com",
//     pwd: "123456",
//   },
// ];

export const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const location = useLocation();
  console.log("location inside login", location);

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userList = JSON.parse(localStorage.getItem("userList"));
    if (!userList) {
      return;
    }
    const user = userList.find((usr) => usr.email === userDetails.email);
    if (user) {
      if (user.password === userDetails.password) {
        // save the user
        sessionStorage.setItem("loggedInUser", JSON.stringify(user));
        setIsLoggedIn(true);

        // navigate the user to home
        // navigate("/home"); // this is not correct behaviour
        if (location.state) {
          navigate(location.state.myPreviousPath);
        } else {
          navigate("/home");
        }
      } else {
        console.log("password is incorrect");
        setError("password is incorrect");
      }
    } else {
      console.log("no user found");
      // err message
      setError("no user found");
    }
  };

  return (
    <form action="" className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={handleInputChange}
          value={userDetails.email.toLowerCase()}
        />
      </div>

      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleInputChange}
          value={userDetails.password}
        />
      </div>

      <input type="submit" value="Login" />

      <p>Not a user already?</p>
      <button onClick={() => navigate("/signup")}>create account</button>

      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </form>
  );
};

let address = {
  country: "India",
  state: "Delhi",
  pin: "10001",
};

let key = "pin";
console.log(address[key]);

// /Users/abhinav/Desktop/Theta/routing-demo/src/Pages/Login.jsx

// src/Pages/Login.jsx
