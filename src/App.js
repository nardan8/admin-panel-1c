import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="hhh"><p>Hi my friend</p></div>
      </div>
    </Router>
  );
}

export default App;
