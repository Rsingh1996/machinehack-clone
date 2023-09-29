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
} from "@mui/material";
import PostItems from "./PostItems";
import styled from "@emotion/styled";
import "./Header.css";

const CardActionsStatus = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Post = () => {
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      {PostItems.map((x) => (
        <Card
          sx={{
            backgroundColor: "#1b234a",
            border: 0.5,
            borderStyle: "solid",
            borderColor: "#263559",
            borderRadius: 2,
            color: "white",
            mt: 2,
            mb: 2,
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#445eb7" }} aria-label="avatar">
                <img src={x.avatar} height={"53px"} />
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <img src="https://machinehack.com/static/media/dark-three-dots.4770e886.svg" />
              </IconButton>
            }
            title={
              <Typography
                className="postContent"
                variant="body2"
                sx={{
                  fontWeight: 700, // Change font weight
                  fontSize: "16px", // Change font size
                }}
              >
                {" "}
                {x.author}
              </Typography>
            }
            subheader={
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "13px",
                  color: "#b5c0d3",
                  fontFamily: "Roboto",
                }}
              >
                {x.postedDate}
              </Typography>
            }
          />
          <CardContent>
            <Typography
              className="postContent"
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              {x.postContent}
            </Typography>
          </CardContent>
          {x.image == "" ? (
            ""
          ) : (
            <CardMedia
              sx={{
                margin: "auto",
                maxWidth: { md: 700 },
                maxHeight: { sm: 400, md: 500 },
                objectFit: "contain",
              }}
              component="img"
              src={x.image}
            />
          )}
          <CardActionsStatus>
            <CardContent>
              {x.like > 0 ? (
                <img src="https://machinehack.com/static/media/thumc_article.dc004a00.svg" />
              ) : (
                ""
              )}
              {x.like > 0 ? <span> {x.like} Likes</span> : ""}
            </CardContent>
            <CardContent sx={{ display: "flex", gap: 2 }}>
              {x.comment > 0 ? <span> {x.comment} Comments</span> : ""}
              {x.bookmarks > 0 ? <span> {x.bookmarks} Bookmarks</span> : ""}
              {x.share > 0 ? <span> {x.share} shares</span> : ""}
            </CardContent>
          </CardActionsStatus>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
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
      ))}
    </Box>
  );
};

export default Post;
