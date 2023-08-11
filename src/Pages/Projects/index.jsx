import "./Projects.css";
import bolsonVegetal from "../../assets/bolson-vegetal-screen.png";
import tipTracer from "../../assets/tip-tracer-screen.png";
import budgetTracker from "../../assets/budget-tracker-screen.png";
import Project from "../../Components/Project";

const Projects = () => {
  return (
    <div className="projects content">
      <h1>projects</h1>
      <Project
        title="bolson vegetal"
        description="Shopping page for a greengrocers shop I used to work for. It implements a shopping cart and takes you to WhatsApp with a fully formatted message with your order ready to send"
        link="https://bolson-vegetal.vercel.app/"
        imgSrc={bolsonVegetal}
        style={{ float: "left" }}
      />
      <Project
        title="tip tracer"
        description="A web app I made while working as a waiter to keep track of all the tips I earned"
        link="https://tip-tracer-client.vercel.app/"
        imgSrc={tipTracer}
        style={{ float: "right" }}
      />
      <Project
        title="budget tracker"
        description="A simple app to keep track of personal budget. Made it as a challenge to enter a bootcamp but I plan on upgrading it for personal use"
        link="https://budget-tracker-client-sage.vercel.app/"
        imgSrc={budgetTracker}
        style={{ float: "left" }}
      />
      <p></p>
    </div>
  );
};

export default Projects;
