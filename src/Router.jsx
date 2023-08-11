import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProjectDetailed from "./Pages/ProjectDetailed";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="projects" element={<Projects />}></Route>
            <Route
              path="projects/bolson-vegetal"
              element={
                <ProjectDetailed
                  title={"Bolson Vegetal"}
                  imgName={"bolson-vegetal-screen.png"}
                  deploy="https://bolson-vegetal.vercel.app/"
                  clientRepo="https://github.com/NicoMunoz909/BolsonVegetal-client"
                  serverRepo="https://github.com/NicoMunoz909/BolsonVegetal-server"
                />
              }
            ></Route>
            <Route path="contact" element={<Contact />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
