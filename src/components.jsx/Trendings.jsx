import { Box, ListItemButton } from "@mui/material";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import React from "react";
import styled from "@emotion/styled";
import TrendingItems from "./TrendingItems";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: 6,
  fontSize: 13,
  color: "#b5c0d3",
}));

const Trendings = () => {
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
      <Box>
        <Box>
          <Box
            sx={{
              fontSize: 16,
              fontWeight: 700,
              display: "flex",
              gap: 1,
              m: 1,
              alignItems: "center",
            }}
          >
            <WhatshotIcon />
            <span>Trending on MachineHack</span>
          </Box>
          {TrendingItems.map((x) => (
            <ListItemButton key={x.id} component="a" href="#">
              <StyledBase>
                <Box>
                  <StarsOutlinedIcon
                    className="tournament"
                    sx={{ width: 40, height: 40, color: "white" }}
                  />
                </Box>
                <StyledBase flexDirection={"column"}>
                  <Box
                    sx={{
                      borderRadius: 2.5,
                      backgroundColor: "#263559",
                      pr: 1.5,
                      pl: 1.5,
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {x.item}
                  </Box>
                  <Box
                    sx={{
                      fontWeight: 600,
                      width: "150px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {x.description}
                  </Box>
                </StyledBase>
              </StyledBase>
            </ListItemButton>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Trendings;
