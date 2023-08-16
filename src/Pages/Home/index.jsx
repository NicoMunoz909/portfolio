import "./Home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaSoundcloud } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home content">
      <h1>nicolás muñoz |</h1>
      <p style={{ marginBottom: "100px" }}>
        Gamer, traveller and music lover. I enjoy making web apps to solve every-day tasks. Constantly
        learning.
      </p>
      <Link to="/about" className="home-link">
        See more about me &#8594;
      </Link>
      <a href="/cv-nicolas-munoz.pdf" className="home-link" download style={{ marginLeft: "50px" }}>
        Download my CV &#8595;
      </a>
      <div className="home-socials">
        <a href="https://github.com/NicoMunoz909" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://instagram.com/nico.munoz_/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/nicolas-enrique-munoz/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="https://soundcloud.com/nmz-sound" target="_blank" rel="noreferrer">
          <FaSoundcloud />
        </a>
      </div>
    </div>
  );
};

export default Home;
