import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Collection from "./Routes/Collection";
import Men from "./Routes/Men";
import Women from "./Routes/Women";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { useState } from "react";
import SideBar from "./components/SideBar";
import Hero from "./components/Hero";

const App = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleOpen = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(isClicked);
  };

  const handleClose = () => {
    setIsClicked((isClicked) => !isClicked);
    console.log(isClicked);
  };

  return (
    <div className="min-h-screen relative">
      <Router>
        <NavBar handleOpen={handleOpen} />

        {isClicked && (
          <>
            {" "}
            <div
              onClick={handleClose}
              className="inset-0 bg-black z-40 fixed opacity-60"
            ></div>{" "}
            <SideBar handleClose={handleClose} />{" "}
          </>
        )}
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
