import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const initialUserData = {
    fullName: "",
    email: "",
    role: "",
    password: "",
  };

  const [userDetails, setUserDetails] = useState(initialUserData);
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //  const data = {...userDetails, id: Math.floor(Math.random()*100000)}
  //  console.log("data", data);
  //   // json---> JS ---> JSON.parse()
  //   // JS ---> json --> JSON.stringify()
  //   // step 1: check if userList is present
  //   const userListJSON = localStorage.getItem("userList");
  //   const userList = JSON.parse(userListJSON);
    
  //   if (userList) {
  //     // push the data
  //     userList.push(data);
  //     localStorage.setItem("userList", JSON.stringify(userList));
  //   } else {
  //     // create a data
  //     const newUserList = [data]
  //     localStorage.setItem("userList", JSON.stringify(newUserList));
  //   }
  //   navigate("/login");
  // };

  // create a user using API
  const handleSubmit = () => {
    // get a phone ---> GET
    // add a phone ---> POST
    // update a phone ---> UPDATE
    // delete a phone ---> DELETE
    
    fetch("https://academics.newtonschool.co/api/v1/bookingportals/signup")
  }

  return (
    <form action="" className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name: </label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          onChange={handleInputChange}
          value={userDetails.fullName.toUpperCase()}
        />
      </div>
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
        <label htmlFor="role">Role: </label>
        <input
          type="text"
          name="role"
          id="role"
          onChange={handleInputChange}
          value={userDetails.role}
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

      <input type="submit" value="SignUp" />
    </form>
  );
};
