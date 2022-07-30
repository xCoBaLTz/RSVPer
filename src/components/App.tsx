import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Route, Routes } from "react-router";

import "../styles/App.css";

import NavBar from "./NavBar";
import Proposal from "./Proposal";
import Invitation from "./Invitation";
import Rsvp from "./Rsvp";
import Contact from "./Contact";
import Home from "./Home";
import Layout from "./Layout";
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
      <header>
        <NavBar></NavBar>
      </header>
      <main className="main">
        <Routes>
          <Route element={<RequireAuth />}>
            <Route path="/home" element={<Home />} />
            <Route path="/proposal" element={<Proposal />} />
            <Route path="/invitation" element={<Invitation />} />
            <Route path="/rsvp" element={<Rsvp />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
          <Route path="/*" element={<Login />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
