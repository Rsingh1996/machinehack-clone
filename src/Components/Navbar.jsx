import { styled, alpha } from "@mui/material/styles";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  InputBase,
  Typography,
  Hidden,
} from "@mui/material";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";
import "./Header.css";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  gap: 5,
  alignItems: "center",
});

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: 20,
  alignItems: "center",
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 30,
  border: 0.5,
  borderStyle: "solid",
  borderColor: "#263559",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
  },
}));
const Navbar = () => {
  return (
    <AppBar sx={{ position: "sticky", background: "#000726" }}>
      <StyledToolbar>
        <a href="https://machinehack.com/feed">
          <img
            className="logo"
            src="https://machinehack.com/static/media/MH-Gen-AI-Dark.d5336c6f.png"
            loading="lazy"
          />
        </a>
        <StyledBase>
          <Search sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search in Machinhack…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <StyledBase>
            <Button
              sx={{ borderRadius: 5, display: { xs: "none", sm: "flex" } }}
              variant="outlined"
            >
              <ApartmentOutlinedIcon></ApartmentOutlinedIcon>
              <span>Enterprise</span>
            </Button>
            <Button
              sx={{
                display: { xs: "none", sm: "flex" },
                color: "#3c4858",
                borderRadius: 5,
              }}
              variant="outlined"
            >
              <LightModeRoundedIcon
                sx={{ fontSize: "medium", color: "#ffc83d" }}
              ></LightModeRoundedIcon>
            </Button>
            <Button
              sx={{
                borderRadius: 50,
                background: "#6540d7",
                marginLeft: { xs: 1, sm: 0 },
                display: { xs: "flex", sm: "flex" },
              }}
              variant="contained"
            >
              Login
            </Button>
          </StyledBase>
        </StyledBase>
      </StyledToolbar>
    </AppBar>
  );
};
export default Navbar;
