import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { useState } from "react";
import { Profile } from "./Pages/Profile";
import { Routes, Route } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { DynamicProfile } from "./Pages/DynamicProfile";
import { Product } from "./Pages/Product";
import { Login } from "./Pages/Login";

function App() {
  const [showHome, setShowHome] = useState(false);

  const toggle = () => {
    setShowHome(!showHome);
  };

  return (
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
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/cart"
          element={
            <div>
              <p>my cart</p>
              <button>Buy</button>
            </div>
          }
        />
        <Route path="/profile/:userId/:localAddress" element={<DynamicProfile />} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
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
  );
}

export default App;


// let name = "abhinav";

// name = "dheerendra";
