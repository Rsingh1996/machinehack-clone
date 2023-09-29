import { Box, Container, Stack } from "@mui/material";
import Feed from "./components.jsx/Feed";

import Rightbar from "./components.jsx/Righbar";
import Sidebar from "./components.jsx/Sidebar";
import Navbar from "./components.jsx/Navbar";

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
