import "./Project.css";
import { Link } from "react-router-dom";

const Project = ({ imgSrc, title, description, deploy, link, style }) => {
  return (
    <div className="project-container" style={style}>
      <div className="project-container__img">
        <Link to={deploy} target="_blank">
          <img src={imgSrc} alt="" />
        </Link>
      </div>
      <div className="project-container__description">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>View project &#8594;</Link>
      </div>
    </div>
  );
};

export default Project;
