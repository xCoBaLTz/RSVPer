import "../styles/App.css";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Route, Routes } from "react-router";

import NavBar from "./NavBar";
import Proposal from "./Proposal";
import Invitation from "./Invitation";
import Rsvp from "./Rsvp";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import RequireAuth from "./RequireAuth";

const App = () => {
  const customInit: (engine: Engine) => Promise<void> = async (
    engine: Engine
  ) => {
    await loadStarsPreset(engine);
  };

  const options = {
    preset: "stars",
  };

  return (
    <div className="app">
      <Particles className="background" options={options} init={customInit} />
      <div className="nav-bar">
        <NavBar></NavBar>
      </div>
      <div className="main">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<RequireAuth />}>
            <Route path="/rsvp" element={<Rsvp />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
