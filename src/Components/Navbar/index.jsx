import logo from "/nmz-no-enso.svg";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img className="navbar-icon" id="logo-icon" src={logo} alt="NMZ Logo SVG" />
      </a>
      <div className="navbar-links">
        <NavLink to="/about">About Me</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
