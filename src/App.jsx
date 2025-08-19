import { useState } from "react";
import JuanP from "./JuanP";
import JulianS from "./JulianS";
import Home from "./home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";

function App() {

  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar-logo">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                style={{
                  height: "40px",
                  marginRight: "10px",
                  verticalAlign: "middle",
                  cursor: "pointer"
                }}
              />
            </Link>
            Portafolio
          </div>
          <div className="navbar-links">
            <Link to="/">Inicio</Link>
            <Link to="/juanp">JuanP</Link>
            <Link to="/julians">JulianS</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juanp" element={<JuanP />} />
          <Route path="/julians" element={<JulianS />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
