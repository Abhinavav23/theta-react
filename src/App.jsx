import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";

function App() {
  return (
    <div className="App">
      <header>
        <h3>My App</h3>
      </header>
      <Home/> 
      <About></About>

    </div>
  );
}

export default App;
