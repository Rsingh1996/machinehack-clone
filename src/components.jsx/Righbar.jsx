import { Box, Divider, Typography } from "@mui/material";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import React from "react";
import Trendings from "./Trendings";
import styled from "@emotion/styled";
import Tournament from "./Tournament";

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 1,
}));

const Rightbar = () => {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "none", md: "block" },
        color: "white",
      }}
      flex={1.1}
    >
      <Box sx={{ position: "sticky", top: -288, right: 0 }}>
        <Tournament />
        <Trendings />
      </Box>
    </Box>
  );
};

export default Rightbar;
