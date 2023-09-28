import { Box, Container, Stack } from "@mui/material";
import Feed from "./compoents/Feed";

import Rightbar from "./compoents/Righbar";
import Sidebar from "./compoents/Sidebar";
import Navbar from "./compoents/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Stack direction={"row"} spacing={1} sx={{ background: "#000726" }}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
