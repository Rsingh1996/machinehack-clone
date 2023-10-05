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
import { useState, useEffect } from "react";

const ActionsStatus = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const FeedPost = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [shares, setShares] = useState({});
  const [bookmarks, setBookmarks] = useState({});

  const handleLike = (postId) => {
    setLikes((prevLikes) => ({
      ...prevLikes,
      [postId]: (prevLikes[postId] || 0) + 1,
    }));
  };

  const handleComment = (postId) => {
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: (prevComments[postId] || 0) + 1,
    }));
  };

  const handleShare = (postId) => {
    setShares((prevShares) => ({
      ...prevShares,
      [postId]: (prevShares[postId] || 0) + 1,
    }));
  };

  const handleBookmark = (postId) => {
    setBookmarks((prevBookmarks) => ({
      ...prevBookmarks,
      [postId]: (prevBookmarks[postId] || 0) + 1,
    }));
  };

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
                variant="body2"
                sx={{
                  fontWeight: 700,
                  fontSize: "16px",
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
              variant="body2"
              sx={{
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              {x.postContent}
            </Typography>
          </CardContent>
          {x.image === "" ? (
            ""
          ) : (
            <CardMedia
              sx={{
                margin: "auto",
                maxWidth: { md: 700 },
                maxHeight: { sm: 300, md: 400 },
                objectFit: "contain",
              }}
              component="img"
              src={x.image}
            />
          )}
          <ActionsStatus>
            <CardContent>
              {likes[x.id] > 0 ? (
                <img src="https://machinehack.com/static/media/thumc_article.dc004a00.svg" />
              ) : (
                ""
              )}
              {likes[x.id] > 0 ? <span> {likes[x.id]} Likes</span> : ""}
            </CardContent>
            <CardContent sx={{ display: "flex", gap: 2 }}>
              {comments[x.id] > 0 ? (
                <span> {comments[x.id]} Comments</span>
              ) : (
                ""
              )}
              {bookmarks[x.id] > 0 ? (
                <span> {bookmarks[x.id]} Bookmarks</span>
              ) : (
                ""
              )}
              {shares[x.id] > 0 ? <span> {shares[x.id]} shares</span> : ""}
            </CardContent>
          </ActionsStatus>
          <CardActions
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <IconButton aria-label="like" onClick={() => handleLike(x.id)}>
              <img src="https://machinehack.com/static/media/thumc_article.dc004a00.svg" />
            </IconButton>
            <IconButton
              aria-label="comment"
              onClick={() => handleComment(x.id)}
            >
              <img src="https://machinehack.com/static/media/comment.b5dc0dc5.svg" />
            </IconButton>
            <a href="https://www.linkedin.com/feed/" target="_blank">
              <IconButton aria-label="share" onClick={() => handleShare(x.id)}>
                <img src="https://machinehack.com/static/media/share.4a5f7130.svg" />
              </IconButton>
            </a>
            <IconButton
              aria-label="bookmark"
              onClick={() => handleBookmark(x.id)}
            >
              <img src="https://machinehack.com/static/media/bookmark.d86834e5.svg" />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default FeedPost;
