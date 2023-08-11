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
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore pariatur obcaecati blanditiis ab
        alias illum dolores cumque, praesentium impedit error, iure explicabo vero! Unde sed excepturi qui
        tempore maiores a!"
        link="https://bolson-vegetal.vercel.app/"
        imgSrc={bolsonVegetal}
        style={{ float: "left" }}
      />
      <Project
        title="tip tracer"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore pariatur obcaecati blanditiis ab
        alias illum dolores cumque, praesentium impedit error, iure explicabo vero! Unde sed excepturi qui
        tempore maiores a!"
        link="https://tip-tracer-client.vercel.app/"
        imgSrc={tipTracer}
        style={{ float: "right" }}
      />
      <Project
        title="budget tracker"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore pariatur obcaecati blanditiis ab
        alias illum dolores cumque, praesentium impedit error, iure explicabo vero! Unde sed excepturi qui
        tempore maiores a!"
        link="https://budget-tracker-client-sage.vercel.app/"
        imgSrc={budgetTracker}
        style={{ float: "left" }}
      />
      <p></p>
    </div>
  );
};

export default Projects;
