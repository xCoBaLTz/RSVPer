import React from "react";
import ResponsiveAppBar from "./ResponsiveAppBar";

interface Props {
  className?: string;
}

export interface NavItem {
  name: string;
  route: string;
}

const NavBar: React.FC<Props> = (props: Props) => {
  const navItems: NavItem[] = [
    { name: "Our Story", route: "/ourstory" },
    { name: "Events", route: "/events" },
    { name: "Invitation", route: "/invitation" },
    { name: "RSVP", route: "/rsvp" },
    { name: "Contact", route: "/contact" },
  ];

  return <ResponsiveAppBar navItems={navItems} />;
};

export default NavBar;
