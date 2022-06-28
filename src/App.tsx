import React from "react";
import "./App.css";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import NavRoutes from "./Router";
import NavBar from "./NavBar";

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
      <main>
        <NavRoutes></NavRoutes>
      </main>
    </div>
  );
};

export default App;
