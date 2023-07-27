import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home";
import About from "./Pages/About";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
