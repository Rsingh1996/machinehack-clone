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
            width: { xs: 140, sm: 170, md: 200 },
            display: "flex",
            justifyContent: "center",
            marginTop: 0,
            gap: { xs: 1, sm: 1, md: 2 },
            borderBottomLeftRadius: { xs: 12, sm: 15, md: 19 },
            borderBottomRightRadius: { xs: 12, sm: 15, md: 19 },
            alignSelf: "center",
          }}
        >
          <img src="https://machinehack.com/static/media/leaderboard.6d3c652d.svg" />
          <Typography sx={{ fontSize: { xs: 12, sm: 12, md: 16 } }}>
            Interview Titans
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: { xs: 2.5, sm: 3, md: 3 },
            flexWrap: "wrap",
            p: { xs: 1, sm: 1, md: 2 },
          }}
        >
          {Leaders.map((x) => (
            <Avatar
              key={x.id}
              sx={{
                bgcolor: "#445eb7",
                height: { xs: 35, sm: 50, md: 70 },
                width: { xs: 35, sm: 50, md: 70 },
              }}
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
