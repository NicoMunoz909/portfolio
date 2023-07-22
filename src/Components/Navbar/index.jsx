import logo from "../../assets/nmz-no-enso.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="/">
        <img className="navbar-icon" id="logo-icon" src={logo} alt="NMZ Logo SVG" />
      </a>
      <div className="navbar-links">
        <a href="/about">About Me</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
