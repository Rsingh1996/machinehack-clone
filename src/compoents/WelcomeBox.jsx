import styled from "@emotion/styled";
import { Button, Box, Typography } from "@mui/material";
import React from "react";
const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  gap: 1,
  color: "white",
}));

const WelomceBox = () => {
  return (
    <Box
      className="tournament"
      sx={{
        borderRadius: 2,
        marginTop: 2,
        marginLeft: 4,
        p: 1.5,
      }}
      flex={1}
    >
      <StyledBase>
        <Typography>Welcome to MachineHack Gen </Typography>
        <Typography>Login to Explore more</Typography>
        <Button
          sx={{
            bgcolor: "#000",
            color: "white",
            borderRadius: 5,
            width: 150,
          }}
          variant="outlined"
        >
          Login Now
        </Button>
      </StyledBase>
    </Box>
  );
};
export default WelomceBox;
