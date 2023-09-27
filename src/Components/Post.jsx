import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton,
  Typography,
  Divider,
} from "@mui/material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styled from "@emotion/styled";

const CardActionsStatus = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Post = () => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Card
        sx={{
          backgroundColor: "#1b234a",
          border: 0.5,
          borderStyle: "solid",
          borderColor: "#263559",
          borderRadius: 2,
          color: "white",
        }}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#445eb7" }} aria-label="avatar">
              <img
                src="https://cdn.machinehack.com/default/J.gif"
                height={"53px"}
              />
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <img src="https://machinehack.com/static/media/dark-three-dots.4770e886.svg" />
            </IconButton>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="body2" color="white">
            A hackathon is an event that brings together experts and creates a
            collaborative environment for solving a certain problem. While the
            majority of hackathons revolve around computer programming and IT,
            many other industries follow suit. Today, it's possible to find HR
            hackathons, economics hackathons, music hackathons, and the like.
          </Typography>
        </CardContent>
        <CardMedia
          sx={{ maxWidth: 700, maxHeight: 500, objectFit: "contain" }}
          component="img"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F8b%2F28%2F73%2F8b2873b192661d077912c24fdf21ad60.jpg&f=1&nofb=1&ipt=5d02e867394ce02cb73ab2ee37dd555a0d0537c8644eecac822dce5de85c11e0&ipo=images"
          // height="194"
          image=""
          alt="hackathon"
        />
        <CardActionsStatus>
          <CardContent>
            <img src="https://machinehack.com/static/media/thumc_article.dc004a00.svg" />
            <span> 2 Likes</span>
          </CardContent>
          <CardContent sx={{ display: "flex", gap: 2 }}>
            <span> 3 Comments</span>
            <span> 2 Bookmarks</span>
            <span> 2 shares</span>
          </CardContent>
        </CardActionsStatus>
        <CardActions sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <IconButton aria-label="add to favorites">
            <img src="https://machinehack.com/static/media/thumc_article.dc004a00.svg" />
          </IconButton>
          <IconButton aria-label="share">
            <img src="https://machinehack.com/static/media/comment.b5dc0dc5.svg" />
          </IconButton>
          <IconButton>
            <img src="https://machinehack.com/static/media/share.4a5f7130.svg" />
          </IconButton>
          <IconButton>
            <img src="https://machinehack.com/static/media/bookmark.d86834e5.svg" />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Post;
