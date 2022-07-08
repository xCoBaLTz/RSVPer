import { Route, Routes } from "react-router";
import Contact from "./Contact";
import Events from "./Events";
import Home from "./Home";
import Invitation from "./Invitation";
import Login from "./Login";
import OurStory from "./OurStory";
import Rsvp from "./Rsvp";

const Router = () => {
  const sessionToken: boolean = true;

  return (
    <>
      {sessionToken ? (
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/ourstory" element={<OurStory />} />
          <Route path="/invitation" element={<Invitation />} />
          <Route path="/rsvp" element={<Rsvp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      ) : (
        <Route path="/*" element={<Login />} />
      )}
    </>
  );
};

export default Router;
