import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import "../styles/App.css";
import NavBar from "./NavBar";
import Router from "./Router";

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
        <Router></Router>
      </main>
    </div>
  );
};

export default App;
