import "./Projects.css";
import bolsonVegetal from "/bolson-vegetal-screen1.png";
import tipTracer from "/tip-tracer-screen1.png";
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
        title="tip tracer"
        description="A web app I made while working as a waiter to keep track of all the tips I earned"
        deploy="https://tip-tracer-client.vercel.app/"
        link="tip-tracer"
        imgSrc={tipTracer}
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
