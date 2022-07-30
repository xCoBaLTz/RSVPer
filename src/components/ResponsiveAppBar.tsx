import { useState, MouseEvent } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import { Button, IconButton, Menu, MenuItem } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { NavItem } from "./NavBar";

interface Props {
  navItems: NavItem[];
}

const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = (props: Props) => {
  const { navItems } = props;

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ m: "auto" }}>
      <Container sx={{ maxWidth: { xs: "lg", md: "xl" } }}>
        <Toolbar disableGutters>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              display: "flex",
              fontFamily: "BickleyScriptRegular",
              flexGrow: 1,
              justifyContent: "flex-start",
              color: "secondary.main",
            }}
          >
            <Link
              to="/home"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Seanan & Sonia
            </Link>
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {props.navItems.map((navItem) => (
              <Button
                key={navItem.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                  to={navItem.route}
                >
                  {navItem.name}
                </Link>
              </Button>
            ))}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {navItems.map((navItem) => (
                <MenuItem key={navItem.name} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={navItem.route}
                    >
                      {navItem.name}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
