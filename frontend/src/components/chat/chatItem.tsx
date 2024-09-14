import { Avatar, Box } from "@mui/material";
import React from "react";

const chatItem = ({
  content,
  role,
}: {
  content: string;
  role: "user" | "assistant";
}) => {
  return role === "assistant" ? (
    <Box
      sx={{ display: "flex", p: 2, bgcolor: "#004d5612", my: 2, gap: 2 }}
    >
        <Avatar sx={{ml:0 }}>
            <img src="openai.png" alt="openai" width={'30px'} />
            <Box></Box>
        </Avatar>
    </Box>
  ) : (
    <></>
  );
};

export default chatItem;
