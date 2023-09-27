import React from "react";
import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import WifiTetheringIcon from "@mui/icons-material/WifiTethering";
import TournamentList from "./TournamentList";
import styled from "@emotion/styled";

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 1,
}));

const Tournament = () => {
  return (
    <Box
      sx={{
        border: 0.5,
        borderStyle: "solid",
        borderColor: "#263559",
        borderRadius: 2,
        backgroundColor: "#1b234a",
        marginTop: 2,
        marginRight: 4,
      }}
    >
      <Box
        className="tournament"
        sx={{
          display: "flex",
          gap: 1.5,
          p: 1,
          alignItem: "center",
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10,
        }}
      >
        <WifiTetheringIcon />
        <span>Live Tournaments</span>
      </Box>
      {TournamentList.map((x) => (
        <StyledBase key={x.id}>
          <Box sx={{ display: "flex", gap: 2, p: 1 }}>
            <img src="	https://machinehack.com/static/media/dark-triangle-bullet.49021469.svg" />
            <span>{x.title}</span>
          </Box>
          <Box sx={{ display: "flex", gap: 2, p: 1, alignItem: "center" }}>
            <img src={x.icon} className="icon" />
            <span>{x.timeLine}</span>
          </Box>
          <Box>
            <Button
              sx={{
                bgcolor: "#445EBD",
                color: "white",
                borderRadius: 10,
                display: "flex",
                gap: 2,
                alignItem: "center",
                mb: 1,
              }}
              variant="outlined"
            >
              <span>Parcticipate Now</span>
              <img src={x.buttonIcon} />
            </Button>
          </Box>
          <Divider />
        </StyledBase>
      ))}
    </Box>
  );
};

export default Tournament;
