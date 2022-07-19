import { Route, Routes } from "react-router";
import Contact from "./Contact";
import Home from "./Home";
import Invitation from "./Invitation";
import Login from "./Login";
import Proposal from "./Proposal";
import Rsvp from "./Rsvp";

const Router = () => {
  const sessionToken: boolean = true;

  return (
    <>
      {sessionToken ? (
        <Routes>
          <Route path="/proposal" element={<Proposal />} />
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
