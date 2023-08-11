import { FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact content">
      <h1>contact me</h1>
      <div className="contact-socials">
        <a href="mailto:nimunoz28@gmail.com" target="_blank" rel="noreferrer">
          <FiMail />
        </a>
        <a href="https:wa.me/+5493413062939" target="_blank" rel="noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/nico.munoz_/" target="_blank" rel="noreferrer">
          <FaInstagram />
        </a>
        <a href="https://github.com/NicoMunoz909" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-enrique-munoz/" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Contact;
