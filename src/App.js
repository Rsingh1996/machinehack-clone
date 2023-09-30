import { Box, Container, Stack } from "@mui/material";
import Feed from "./components/Feed";

import Rightbar from "./components/Righbar";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
