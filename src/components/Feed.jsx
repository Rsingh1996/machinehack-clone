import { Box } from "@mui/material";

import React from "react";
import FeedPost from "./FeedPost";
import Add from "./Add";
import LeaderBoard from "./LeaderBoard";

const Feed = () => {
  return (
    <Box sx={{ p: { xs: 1, sm: 1.5, md: 2 } }} flex={2.6}>
      <LeaderBoard />
      <Add />
      <FeedPost />
    </Box>
  );
};

export default Feed;
