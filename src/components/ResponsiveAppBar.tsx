import { NavItem } from "./NavBar";

import { useState, MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

interface Props {
  navItems: NavItem[];
}

const ResponsiveAppBar = (props: Props) => {
  const { navItems } = props;
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickNavMenu = (route: string) => {
    handleCloseNavMenu();
    navigate(route);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "primary.main", m: "auto" }}
    >
      <Container sx={{ maxWidth: { xs: "lg", md: "xl" } }}>
        <Toolbar disableGutters>
          <Link to="" className="title-button">
            <Typography
              variant="h2"
              component="h2"
              fontFamily="BickleyScriptRegular"
              color="primary.contrastText"
            >
              Seanan & Sonia
            </Typography>
          </Link>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
            {props.navItems.map((navItem) => (
              <Button
                key={navItem.name}
                onClick={(event) => handleClickNavMenu(navItem.route)}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {navItem.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              justifyContent: "flex-end",
            }}
          >
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
                <MenuItem
                  key={navItem.name}
                  onClick={() => handleClickNavMenu(navItem.route)}
                >
                  <Typography textAlign="center">{navItem.name}</Typography>
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
