import { Box, Container, Stack } from "@mui/material";
import Feed from "./Components/Feed";

import Rightbar from "./Components/Righbar";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";

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
