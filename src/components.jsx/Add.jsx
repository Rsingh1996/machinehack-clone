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
        pl: 3,
        pr: 3,
        mt: 2,
        mb: 2,
      }}
    >
      <StyledBase>
        <StyledBase sx={{ alignItems: "center", mt: { xs: 1, sm: 1, md: 2 } }}>
          <input
            style={{
              width: "100%",
              maxWidth: "100%",
              height: 50,
              color: "white",
              fontWeight: 600,
              outline: "none",
              padding: 10,
              backgroundColor: "rgba(0, 7, 38, 0.56)",
              border: "none",
              borderRadius: 26,
            }}
            fullWidth
            label="Start an AI-assisted discussion..."
            placeholder="  Start an AI-assisted discussion..."
          />
        </StyledBase>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            p: { xs: 0.7, sm: 1, md: 1 },
          }}
        >
          {AddOptions.map((x) => (
            <Box key={x.id}>
              <Button
                sx={{
                  color: "white",
                  borderRadius: { xs: 5, sm: 7, md: 10 },
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: { xs: 0.5, sm: 1, md: 1 },
                }}
              >
                <img src={x.icon} alt={x.text} />
                <Typography
                  sx={{
                    fontSize: 14,
                    fontWeight: { xs: 600 },
                  }}
                >
                  {x.text.slice(0, 6)}
                </Typography>
              </Button>
            </Box>
          ))}
        </Box>
      </StyledBase>
    </Card>
  );
};

export default Add;
