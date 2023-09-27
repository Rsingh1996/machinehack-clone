import styled from "@emotion/styled";
import { Box, TextField, Button, Card, Typography, Input } from "@mui/material";
import React from "react";
import AddOptions from "./AddOptions";

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 2,
  color: "white",
}));

const Add = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#1b234a",
        border: 0.5,
        borderStyle: "solid",
        borderColor: "#263559",
        borderRadius: 2,
        p: 1.5,
        mt: 2,
        mb: 2,
      }}
    >
      <StyledBase>
        <StyledBase sx={{ alignItems: "center" }}>
          <input
            style={{
              width: 600,
              maxWidth: "100%",
              height: 50,
              backgroundColor: "rgba(0, 7, 38, 0.56)", // Corrected color value
              border: "none", // Added 'px' unit
              borderRadius: 26,
            }}
            fullWidth
            // borderRadius="40px"
            label="Start an AI-assisted discussion..."
            placeholder="Start an AI-assisted discussion..."
          />
        </StyledBase>
        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          {AddOptions.map((x) => (
            <Box key={x.id}>
              <Button
                sx={{
                  color: "white",
                  borderRadius: 10,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <img src={x.icon} />
                <Typography>{x.text}</Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </StyledBase>
    </Card>
  );
};

export default Add;
