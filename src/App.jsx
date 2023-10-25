import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { createContext, useState } from "react";
import { Profile } from "./Pages/Profile";
import { Routes, Route, Navigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { DynamicProfile } from "./Pages/DynamicProfile";
import { Product } from "./Pages/Product";
import { Login } from "./Pages/Login";
import { SignUp } from "./Pages/SignUp";
import { AuthNavigator } from "./Navigator/AuthNavigator";

export const AuthContext = createContext();

function App() {
  const [showHome, setShowHome] = useState(false);
  // check the session storage if user is present then set to true otherwise false
  let loggedInstate;
  const user = sessionStorage.getItem('loggedInUser')
  if(user){
    loggedInstate = true
  }else{
    loggedInstate = false
  }
  const [isLoggedIn, setIsLoggedIn] = useState(loggedInstate);

  const toggle = () => {
    setShowHome(!showHome);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <div className="App">
        <Navbar />

        {/* <Home />
      <About/>
      <Profile/> */}
        {/* <button onClick={toggle}>toggle home</button> */}
        <Routes>
          <Route
            path="/home"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <AuthNavigator>
                <About />
                <Footer />
              </AuthNavigator>
            }
          />
          <Route
            path="/profile"
            element={
              <>
                <AuthNavigator navigateTo="login">
                  <Profile />
                  <Footer/>
                </AuthNavigator>
                {/* <homeNavigator>
                  <Footer />
                </homeNavigator> */}
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <div>
                <p>my cart</p>
                <button>Buy</button>
              </div>
            }
          />
          <Route
            path="/profile/:userId/:localAddress"
            element={<DynamicProfile />}
          />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="*"
            element={
              <section>
                <p>Error: Page not found !!</p>
              </section>
            }
          ></Route>
        </Routes>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

// let name = "abhinav";

// name = "dheerendra";

/*
const name = "abhinav";
const address = "India";
const user1 = {
  name: name,
  address: address,
};

// shorthand syntax of writing object in Js
const user2 = {
  name,
  address,
};
*/

/*
function calculate(a,b){
  // 10 lines of code
  return a*b
}

calculate()
calculate()
calculate()
*/
