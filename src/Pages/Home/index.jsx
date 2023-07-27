import "./Home.css";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn, FaSoundcloud } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home content">
      <h1>hi, i'm nico muñoz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi quam praesentium ab expedita omnis sed
        eligendi optio dolor ducimus labore consequuntur magnam excepturi dolores nobis voluptatum, quisquam,
        similique earum nihil.
      </p>
      <p style={{ marginBottom: "100px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus aspernatur ad laudantium,
        necessitatibus atque, enim excepturi cumque error libero in optio quasi nobis cupiditate consequuntur
        sed qui deserunt ipsam! Dicta.
      </p>
      <Link to="/about" id="see-more">
        See more about me &#8594;
      </Link>
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
