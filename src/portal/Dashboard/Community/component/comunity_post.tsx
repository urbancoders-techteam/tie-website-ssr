// @ts-nocheck
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Card, CardContent, Typography, CardMedia, Box, IconButton, TextField, Button, Collapse, Avatar, Chip } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import CommentIcon from "@mui/icons-material/Comment";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import CustomCircularProgress from "@/portal/Component/custom/CustomCircularProgress";
import dayjs from "dayjs";

const CommunityPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showComments, setShowComments] = useState({});
  const [newComments, setNewComments] = useState({});
  const commentsRef = useRef({});
  const currentUserId = sessionStorage.getItem("userId");
  const token = sessionStorage.getItem("authToken");

  const fetchCommunityPosts = async () => {
    if (!token) {
      setError("No authentication token found.");
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASE_URL}community`,
        { headers: { Authorization: `${token}` } }
      );

      setPosts(response.data.data.communityList);
    } catch (error) {
      setError("There was an error fetching the posts.");
    } finally {
      setLoading(false);
    }
  };

  const getPostComments = (post) =>
    post.likeAndComments?.filter((item) => item.comments) || [];

  const handleLike = async (postId) => {
    try {
      const post = posts.find((p) => p._id === postId);
      const newLikeStatus = !post.isLiked;

      const payload = {
        communityId: postId,
        likeStatus: newLikeStatus,
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}community/likeAndComments/create`,
        payload,
        { headers: { Authorization: token } }
      );

      if (response.data.success) {
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  isLiked: newLikeStatus,
                  likesCount: newLikeStatus
                    ? post.likesCount + 1
                    : post.likesCount - 1,
                }
              : post
          )
        );
        fetchCommunityPosts();
      }
    } catch (error) {
      console.error(`Error updating like for post ${postId}:`, error);
    }
  };

  const toggleComments = (postId) => {
    console.log("postId", postId);
    setShowComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const handleCommentChange = (postId, value) => {
    setNewComments((prev) => ({ ...prev, [postId]: value }));
  };

  const handleAddComment = async (postId) => {
    if (!newComments[postId]?.trim()) return;

    try {
      const payload = {
        communityId: postId,
        comments: newComments[postId],
      };

      const response = await axios.post(
        `${process.env.REACT_APP_BASE_URL}community/likeAndComments/create`,
        payload,
        { headers: { Authorization: token } }
      );

      if (response.data.success) {
        const newComment = {
          _id: Date.now().toString(),
          userId: currentUserId,
          comments: newComments[postId],
          createdAt: new Date().toISOString(),
        };

        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === postId
              ? {
                  ...post,
                  commentsCount: (post.commentsCount || 0) + 1,
                  likeAndComments: [
                    ...(post.likeAndComments || []),
                    newComment,
                  ],
                }
              : post
          )
        );

        setNewComments((prev) => ({ ...prev, [postId]: "" }));
        fetchCommunityPosts();

        setTimeout(() => {
          if (commentsRef.current[postId]) {
            commentsRef.current[postId].scrollTop =
              commentsRef.current[postId].scrollHeight;
          }
        }, 100);
      }
    } catch (error) {
      console.error(`Error adding comment to post ${postId}:`, error);
    }
  };

  useEffect(() => {
    fetchCommunityPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <CustomCircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Grid container justifyContent="center" spacing={4} padding={2}>
      {posts.length === 0 ? (
        <Typography>No approved posts available.</Typography>
      ) : (
        posts.map((post) => (
          <Grid item xs={12} key={post._id}>
            <Card>
              <CardContent>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography variant="h6">{post.title}</Typography>
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1,
                        pt: 2,
                      }}
                    >
                      <Typography variant="body2" color="textSecondary">
                        Posted At :
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {dayjs(post.createdAt).format("DD/MM/YYYY, hh:mm A")}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Typography variant="body2" color="textSecondary">
                        Posted by :
                      </Typography>
                      <Chip
                        variant="outlined"
                        label={post.createdBy?.name || post.createdBy}
                        size="small"
                        sx={{
                          border: "1.6px solid #00999E",
                          color: "#00999E",
                          fontWeight: 500,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
                <Typography variant="body2" color="textSecondary" paragraph>
                  {post.message}
                </Typography>

                <Grid container spacing={2}>
                  {post?.communityPosts?.map((img, idx) => (
                    <Grid item key={idx}>
                      <CardMedia
                        component="img"
                        image={img.url}
                        sx={{
                          width: 250,
                          objectFit: "contain",
                          borderRadius: 1,
                        }}
                      />
                    </Grid>
                  ))}
                </Grid>

                <Box display="flex" alignItems="center" mt={2}>
                  <IconButton
                    onClick={() => handleLike(post._id)}
                    color={post.isLiked ? "primary" : "default"}
                  >
                    {post.isLiked ? (
                      <ThumbUpIcon />
                    ) : (
                      <ThumbUpAltOutlinedIcon />
                    )}
                  </IconButton>
                  <Typography variant="body2" mr={2}>
                    {post.likesCount || 0} Like{post.likesCount !== 1 && "s"}
                  </Typography>

                  <Box
                    onClick={() => toggleComments(post?._id)}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <IconButton color="primary">
                      <CommentIcon />
                    </IconButton>
                    <Typography variant="body2">
                      {post?.commentsCount || 0} Comment
                      {post?.commentsCount !== 1 && "s"}
                    </Typography>
                  </Box>
                </Box>

                <Collapse
                  in={showComments[post._id]}
                  timeout="auto"
                  unmountOnExit
                >
                  <Box mt={2}>
                    <Box
                      ref={(el) => (commentsRef.current[post._id] = el)}
                      sx={{ maxHeight: 300, overflowY: "auto", mb: 2 }}
                    >
                      {getPostComments(post).map((comment, idx) => (
                        <Box
                          key={comment._id || idx}
                          sx={{
                            mb: 1,
                            p: 1,
                            backgroundColor: "#f5f5f5",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "flex-start",
                            gap: 1,
                          }}
                        >
                          <Avatar sx={{ width: 32, height: 32 }} />
                          <Box>
                            <Typography
                              variant="subtitle2"
                              fontWeight="bold"
                              fontSize={14}
                            >
                              {comment?.createdBy?.name || "Unknown"}
                            </Typography>
                            <Typography variant="body2" fontSize={14}>
                              {comment.comments}
                            </Typography>
                            <Typography variant="caption" color="textSecondary">
                              {new Date(comment.createdAt).toLocaleString()}
                            </Typography>
                          </Box>
                        </Box>
                      ))}
                    </Box>

                    <Box display="flex" gap={1}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        size="small"
                        placeholder="Add a comment..."
                        value={newComments[post._id] || ""}
                        onChange={(e) =>
                          handleCommentChange(post._id, e.target.value)
                        }
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => handleAddComment(post._id)}
                      >
                        Post
                      </Button>
                    </Box>
                  </Box>
                </Collapse>
              </CardContent>
            </Card>
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default CommunityPosts;
