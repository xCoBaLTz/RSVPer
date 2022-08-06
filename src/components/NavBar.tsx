import ResponsiveAppBar from "./ResponsiveAppBar";

export interface NavItem {
  name: string;
  route: string;
}

const NavBar = () => {
  const navItems: NavItem[] = [
    { name: "Home", route: "" },
    { name: "Proposal", route: "/proposal" },
    { name: "Invitation", route: "/invitation" },
    { name: "RSVP", route: "/rsvp" },
    { name: "Contact", route: "/contact" },
  ];

  return <ResponsiveAppBar navItems={navItems} />;
};

export default NavBar;
