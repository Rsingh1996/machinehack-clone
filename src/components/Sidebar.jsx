import { Box } from "@mui/material";
import MenuItems from "./MenuItems";
import WelomceBox from "./WelcomeBox";

export default function Sidebar() {
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }} flex={1}>
      <Box sx={{ position: "sticky", top: 64, left: 0 }}>
        <MenuItems />
        <WelomceBox />
      </Box>
    </Box>
  );
}
