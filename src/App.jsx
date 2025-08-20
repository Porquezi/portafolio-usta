import JuanP from "./screens/JuanP";
import JulianS from "./screens/JulianS";
import JuanM from "./screens/JuanM";
import Home from "./screens/home";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./assets/logo.png";
import JohanL from "./screens/JohanL";


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
            <Link to="/juanM">JuanM</Link>
            <Link to="/JohanL">JohanL</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/juanp" element={<JuanP />} />
          <Route path="/julians" element={<JulianS />} />
          <Route path="/juanM" element={<JuanM />} />
          <Route path="/JohanL" element={<JohanL />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
