// @ts-nocheck
import { Icon } from "@iconify/react";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "@/portal/navigation";
import MainHeader from "@/portal/Component/content-component/MainHeader";
const posts = [
  {
    id: 1,
    name: "Faculty Name",
    message:
      "Your request for the doubt section has been approved. Here is the link with a time duration of 1 hr.If somehow you are not able to join and connect or want to change the scheduled time, then contact us on the given no.",
    url: "https://meethysbgdtgnfkenubf.com",
    time: "Meeting scheduled at 1:00 PM to 2:00 PM on 21 July 2024. Be ready.",

    replies: "1.2k Reply"
  },
  {
    id: 2,
    name: "Faculty Name",
    message:
      "Lorem ipsum dolor sit amet consectetur. Urna mi ipsum sapien lectus consequat tempus tellus eu. Justo feugiat mattis eu risus. Nunc leo tristique molestie lorem sit nisl. Pulvinar donec tellus viverra morbi. Tellus neque neque pulvinar nunc. Nec augue dui dui id ac tortor in faucibus. Fringilla dictumst nunc a sit nisi nulla enim risus.",
    replies: "1.2k Reply"
  },
  {
    id: 3,
    name: "Faculty Name",
    message:
      "Lorem ipsum dolor sit amet consectetur. Urna mi ipsum sapien lectus consequat tempus tellus eu. Justo feugiat mattis eu risus. Nunc leo tristique molestie lorem sit nisl. Pulvinar donec tellus viverra morbi. Tellus neque neque pulvinar nunc. Nec augue dui dui id ac tortor in faucibus. Fringilla dictumst nunc a sit nisi nulla enim risus.",
    replies: "1.2k Reply"
  }
];

const Notifications = () => {
  return (
    <Box sx={{ padding: "20px", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          mb: "30px",
          alignItems: "center"
        }}
      >
        <Icon
          icon="octicon:bell-fill-16"
          style={{ color: "#00999E", fontSize: "28px" }}
        />
        <Box sx={{ pl: "20px" }}>
          <MainHeader
            content={"Notification"}
            fontWeight={"550"}
            fontSize={"28px"}
          />
        </Box>
      </Box>
      <Box sx={{ p: 2 }}>
        {posts.map((post) => (
          <Paper
            key={post.id}
            sx={{
              mb: 2,
              p: 2,
              display: "flex",
              bgcolor: "#DEF2F3",
              alignItems: "flex-start"
            }}
          >
            <Avatar sx={{ mr: 2, bgcolor: "#00999E" }}>F</Avatar>
            <Box>
              <Typography variant="h6">{post.name}</Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontWeight: "500", color: "#404040" }}
              >
                {post.message}
              </Typography>
              {post.url && (
                <Typography variant="body1">
                  <Link
                    href={post.url}
                    target="_blank"
                    rel="noopener"
                    sx={{ color: "#00999E" }}
                  >
                    {post.url}
                  </Link>
                </Typography>
              )}
              {post.time && (
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "500", pt: "10px", color: "#404040" }}
                >
                  {post.time}
                </Typography>
              )}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  m: "10px 0",
                  alignItems: "center"
                }}
              >
                <Icon icon="carbon:mail-reply" />
                <Typography
                  variant="subtitle2"
                  color="textSecondary"
                  sx={{ pl: "10px" }}
                >
                  {post.replies}
                </Typography>
              </Box>
            </Box>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};

export default Notifications;

// Sample JSON data
