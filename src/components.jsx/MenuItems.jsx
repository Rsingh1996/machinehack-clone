import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItems from "./ListItems";
import PaidIcon from "@mui/icons-material/Paid";

const StyledBase = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
}));

const MenuItems = () => {
  return (
    <Box
      flex={1}
      sx={{
        backgroundColor: "#1b234a",
        border: 0.5,
        borderStyle: "solid",
        borderColor: "#1b234a",
        color: "white",
        flexDirection: "column",
        borderRadius: { md: 2 },
        marginTop: { md: 2 },
        marginLeft: { md: 4 },
        fontWeight: 600,
      }}
    >
      <List disablePadding>
        {ListItems.map((x) => (
          <ListItem key={x.id} disablePadding>
            <ListItemButton component="a" href="#">
              <StyledBase>
                <img src={x.icon} className="icon" />
                <ListItemText primary={x.text} />
              </StyledBase>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List disablePadding>
        <ListItem disablePadding>
          <ListItemButton>
            <StyledBase>
              <PaidIcon />
              <ListItemText primary="Coins" />
            </StyledBase>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default MenuItems;
