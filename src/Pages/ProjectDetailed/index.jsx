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
import { Link } from "react-router-dom";

const ProjectDetailed = ({ title, deploy, clientRepo, serverRepo, imgName }) => {
  return (
    <div className="projectDetailed content">
      <h1>Project | {title}</h1>
      <div className="projectDetailed-info">
        <div className="project-container__img">
          <Link to={deploy} target="_blank">
            <img src={`/${imgName}`} alt="" />
          </Link>
        </div>
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
        <h2>Tech Stack</h2>
        <div className="projectDetailed-icons">
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
      <div className="projectDetailed-description">
        <h2>The Problem</h2>
        <p>
          I used to work at a greengrocers shop where we received a lot of home delivery orders on WhatsApp
          which we wrote down on an invoice. We often received poorly formatted orders, or had to ask a client
          important information for the delivery wich made the process slower and prone to errors.
        </p>
        <h2>The solution</h2>
        <p>
          The app consists of a shopping page with a buying cart. To complete the orders it takes you to a
          form where you fill all the necesary information for the delivery and then the app takes you to
          WhatsApp chat with a correctly formatted message filled with the form data. The store then receives
          a formatted message with all the necesary info, making the order taking process smoother and saving
          a lot of time
        </p>
        <h2>Things to do</h2>
        <ul>
          <li>
            Information section. The page is intended to work both as a shopping app and as a landing page
          </li>
          <li>Finish implementation of backoffice to manage products catalog</li>
          <li>Migrate project from CRA to Vite and reorganize code</li>
        </ul>
      </div>
    </div>
  );
};

export default ProjectDetailed;
