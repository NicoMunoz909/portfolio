import "./Projects.css";
import bolsonVegetal from "/bolson-vegetal-screen1.png";
import appInventario from "/app-inventario-screen1.png";
import budgetTracker from "/budget-tracker-screen1.png";
import Project from "../../Components/Project";

const Projects = () => {
  return (
    <div className="projects content">
      <h1>projects</h1>
      <Project
        title="bolson vegetal"
        description="Shopping page for a greengrocers shop I used to work for. It implements a shopping cart and takes you to WhatsApp with a fully formatted message with your order ready to send"
        deploy="https://bolson-vegetal.vercel.app/"
        link="bolson-vegetal"
        imgSrc={bolsonVegetal}
        style={{ flexDirection: "row" }}
      />
      <Project
        title="App Inventario"
        description="A custom-built tool for tracking hardware inventory with features for entry logging, sales tracking, and backup/demo identification. Built with Sequelize, Node.js, and a responsive UI."
        deploy="https://id-automation-inventario.vercel.app/"
        link="app-inventario"
        imgSrc={appInventario}
        style={{ flexDirection: "row-reverse" }}
      />
      <Project
        title="budget tracker"
        description="A simple app to keep track of personal budget. Made it as a challenge to enter a bootcamp but I plan on upgrading it for personal use"
        deploy="https://budget-tracker-client-sage.vercel.app/"
        link="budget-tracker"
        imgSrc={budgetTracker}
        style={{ flexDirection: "row" }}
      />
      <p></p>
    </div>
  );
};

export default Projects;
