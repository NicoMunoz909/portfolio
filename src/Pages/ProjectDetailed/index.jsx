import {
  SiCss3,
  SiExpress,
  SiMysql,
  SiNodedotjs,
  SiReact,
  SiRender,
  SiSequelize,
  SiVercel,
} from "react-icons/si";
import "./ProjectDetailed.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectDetailed = ({ title, deploy, clientRepo, serverRepo, imgName, description }) => {
  let translatePercentage = 0;

  const translateRight = () => {
    if (translatePercentage < 500) {
      translatePercentage += 100;
      const container = document.getElementById("imgsContainer");
      container.style.transform = `translateX(-${translatePercentage}%)`;
    }
  };

  const translateLeft = () => {
    if (translatePercentage > 0) {
      translatePercentage -= 100;
      const container = document.getElementById("imgsContainer");
      container.style.transform = `translateX(-${translatePercentage}%)`;
    }
  };

  return (
    <div className="content">
      <h1>Project | {title}</h1>
      <div className="projectDetailed-carouselContainer">
        <button className="projectDetailed-carousel__handles" onClick={translateLeft}>
          <FaChevronLeft />
        </button>
        <div className="projectDetailed-carousel">
          <div className="imgsContainer" id="imgsContainer">
            <div className="projectDetailed-carouselImg">
              <img src={`/${imgName}1.png`} alt="" />
            </div>
            <div className="projectDetailed-carouselImg">
              <img src={`/${imgName}2.png`} alt="" />
            </div>
            <div className="projectDetailed-carouselImg">
              <img src={`/${imgName}3.png`} alt="" />
            </div>
            <div className="projectDetailed-carouselImg">
              <img src={`/${imgName}4.png`} alt="" />
            </div>
            <div className="projectDetailed-carouselImg">
              <img src={`/${imgName}5.png`} alt="" />
            </div>
            <div className="projectDetailed-carouselImg">
              <img src={`/${imgName}6.png`} alt="" />
            </div>
          </div>
        </div>
        <button className="projectDetailed-carousel__handles" onClick={translateRight}>
          <FaChevronRight />
        </button>
      </div>
      <div className="projectDetailed-info">
        <div className="projectDetailed-info__description">
          {description}
          <div className="projectDetailed-info__links">
            <a href={deploy} target="_blank" rel="noreferrer">
              Deploy
            </a>
            <a href={clientRepo} target="_blank" rel="noreferrer">
              Client Repo
            </a>
            <a href={serverRepo} target="_blank" rel="noreferrer">
              Server Repo
            </a>
          </div>
        </div>
        <div className="projectDetailed-tech">
          <h2>Tech Stack</h2>
          <div className="projectDetailed-tech__icons">
            <div>
              <SiReact />
              <span>React JS</span>
            </div>
            <div>
              <SiCss3 />
              <span>CSS</span>
            </div>
            <div>
              <SiExpress />
              <span>Express JS</span>
            </div>
            <div>
              <SiMysql />
              <span>MySQL</span>
            </div>
            <div>
              <SiSequelize />
              <span>Sequelize</span>
            </div>
            <div>
              <SiNodedotjs />
              <span>Node JS</span>
            </div>
            <div>
              <SiVercel />
              <span>Vercel</span>
            </div>
            <div>
              <SiRender />
              <span>Render</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailed;
