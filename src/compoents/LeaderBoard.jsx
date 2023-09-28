import styled from "@emotion/styled";
import { Avatar, Card, Box, Typography } from "@mui/material";
import React from "react";
import Leaders from "./Leaders";

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
  color: "white",
}));

const LeaderBoard = () => {
  return (
    <Card
      className="leaderBoard"
      sx={{
        backgroundColor: "#1b234a",
        border: 0.5,
        borderStyle: "solid",
        borderColor: "#263559",
        borderRadius: 2,
      }}
    >
      <StyledBase>
        <Box
          className="leaderBoardTitle"
          sx={{
            width: 200,
            display: "flex",
            justifyContent: "center",
            marginTop: 0,
            gap: 2,
            borderBottomLeftRadius: 19,
            borderBottomRightRadius: 19,
            alignSelf: "center",
          }}
        >
          <img src="https://machinehack.com/static/media/leaderboard.6d3c652d.svg" />
          <Typography>Interview Titans</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 4,
            flexWrap: "wrap",
            p: 2,
          }}
        >
          {Leaders.map((x) => (
            <Avatar
              key={x.id}
              sx={{ bgcolor: "#445eb7", height: 70, width: 70 }}
            >
              <img src={x.avatar} height={"75"} />
            </Avatar>
          ))}
        </Box>
      </StyledBase>
    </Card>
  );
};

export default LeaderBoard;
