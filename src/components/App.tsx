import "../styles/App.css";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Route, Routes } from "react-router";
import { Box } from "@mui/material";

import NavBar from "./NavBar";
import Proposal from "./Proposal";
import Invitation from "./Invitation";
import Rsvp from "./Rsvp";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";
import RequireAuth from "./RequireAuth";
import Location from "./Location";

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
    <Box
      component="div"
      display="flex"
      height="100%"
      flexDirection="column"
      flexWrap="nowrap"
    >
      <Particles className="background" options={options} init={customInit} />
      <Box component="div">
        <NavBar></NavBar>
      </Box>
      <Box component="div">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/location" element={<Location />} />
          <Route element={<RequireAuth />}>
            <Route path="/rsvp" element={<Rsvp />} />
          </Route>
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
