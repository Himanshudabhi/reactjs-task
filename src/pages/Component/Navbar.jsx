import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    handleMenuClose();
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        color: "#000",
        zIndex: 2,
        width: "calc(100% - 250px)",
        marginLeft: "250px",
      }}
    >
      <Toolbar>
        <IconButton size="large" edge="start" color="inherit" sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#f1f3f4",
              borderRadius: "4px",
              px: 2,
              py: 0.5,
              width: "50%",
            }}
          >
            <InputBase
              placeholder={t("navbar.search")}
              sx={{ width: "100%" }}
            />
          </Box>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>

          <IconButton color="inherit" onClick={handleMenuOpen}>
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={() => handleLanguageChange("en")}>
              {t("navbar.english")}
            </MenuItem>
            <MenuItem onClick={() => handleLanguageChange("hi")}>
              {t("navbar.hindi")}
            </MenuItem>
          </Menu>

          <Avatar
            alt="Harley"
            src="https://example.com/profile-image.jpg"
            sx={{ width: 30, height: 30, ml: 1 }}
          />
          <Typography variant="body2" sx={{ ml: 1 }}>
            Harley
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
