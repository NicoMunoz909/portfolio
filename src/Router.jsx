import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ProjectDetailed from "./Pages/ProjectDetailed";
import {
  bolsonVegetal,
  budgetTracker,
  appInventario,
} from "./descriptions.jsx";

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
                  imgName={"bolson-vegetal-screen"}
                  deploy="https://bolson-vegetal.vercel.app/"
                  clientRepo="https://github.com/NicoMunoz909/BolsonVegetal-client"
                  serverRepo="https://github.com/NicoMunoz909/BolsonVegetal-server"
                  description={bolsonVegetal()}
                />
              }
            ></Route>
            <Route
              path="projects/app-inventario"
              element={
                <ProjectDetailed
                  title={"App Inventario"}
                  imgName={"app-inventario-screen"}
                  deploy="https://id-automation-inventario.vercel.app/"
                  clientRepo="https://github.com/NicoMunoz909/proyectoInventarioClient"
                  serverRepo="https://github.com/NicoMunoz909/proyectoInventario"
                  description={appInventario()}
                />
              }
            ></Route>
            <Route
              path="projects/budget-tracker"
              element={
                <ProjectDetailed
                  title={"Budget Tracker"}
                  imgName={"budget-tracker-screen"}
                  deploy="https://budget-tracker-client-sage.vercel.app/"
                  clientRepo="https://github.com/NicoMunoz909/BudgetTracker-client"
                  serverRepo="https://github.com/NicoMunoz909/BudgetTracker-server"
                  description={budgetTracker()}
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
