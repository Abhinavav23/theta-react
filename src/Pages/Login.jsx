import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const userList = [
  {
    id: "1001",
    name: "Akash",
    role: "student",
    email: "Akash@mail.com",
    pwd: "123456",
  },
  {
    id: "1002",
    name: "Naveen",
    role: "student",
    email: "Naveen@mail.com",
    pwd: "123456",
  },
  {
    id: "1003",
    name: "Faraz",
    role: "student",
    email: "Faraz@mail.com",
    pwd: "123456",
  },
  {
    id: "1004",
    name: "Prashant",
    role: "student",
    email: "Prashant@mail.com",
    pwd: "123456",
  },
  {
    id: "1008",
    name: "Suraj",
    role: "student",
    email: "Suraj@mail.com",
    pwd: "123456",
  },
];

export const Login = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = userList.find((usr) => usr.email === userDetails.email);
    if(user){
        if(user.pwd === userDetails.password){
            // navigate the user to home
            console.log('successful');
            navigate("/home");
        }else{
            console.log("password is incorrect");
        }
    }else{
        console.log("no user found");
    }
  };

  return (
    <form action="" className="login-form" onSubmit={handleSubmit}>
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
