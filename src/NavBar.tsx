import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

interface Props {
  className?: string;
}

interface NavItem {
  name: string;
  route: string;
}

const NavBar: React.FC<Props> = (props: Props) => {
  const navItems: NavItem[] = [
    { name: "Login", route: "/" },
    { name: "Home", route: "/home" },
    { name: "Invitation", route: "/invitation" },
    { name: "Our Story", route: "/ourstory" },
    { name: "Location", route: "/location" },
    { name: "RSVP", route: "/rsvp" },
  ];
  return <ResponsiveAppBar />;
};

export default NavBar;
