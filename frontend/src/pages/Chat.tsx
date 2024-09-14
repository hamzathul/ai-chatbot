import React from "react";
import { Box, Avatar, Typography, Button,IconButton } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import red from "@mui/material/colors/red";
import ChatItem from "../components/chat/ChatItem";
import { IoMdSend } from "react-icons/io";

const chatMessages: { role: "user" | "assistant"; content: string }[] = [
  {
    role: "user",
    content: "Can you help me find a good Italian restaurant nearby?",
  },
  {
    role: "assistant",
    content:
      "Sure! I can help with that. Can you provide your current location or address?",
  },
  {
    role: "user",
    content: "I'm at 123 Main Street, Springfield.",
  },
  {
    role: "assistant",
    content:
      "Great, let me find some options for you. There are three highly-rated Italian restaurants nearby: Bella Italia, Pasta Palace, and Rome's Delights.",
  },
  {
    role: "user",
    content: "Can you give me more details about Bella Italia?",
  },
  {
    role: "assistant",
    content:
      "Bella Italia is located at 456 Elm Street. They offer a variety of traditional Italian dishes and are known for their excellent pasta and pizza. Their hours are 11 AM to 10 PM daily.",
  },
  {
    role: "user",
    content:
      "Thanks! Can you set a reminder for me to visit Bella Italia tomorrow at 7 PM?",
  },
  {
    role: "assistant",
    content:
      "I can’t set reminders directly, but you might want to use your phone’s reminder app or calendar to do that. Just set a reminder for tomorrow at 7 PM for Bella Italia.",
  },
  {
    role: "user",
    content: "Okay, I’ll do that. Can you tell me a joke to brighten my day?",
  },
  {
    role: "assistant",
    content:
      "Of course! Why don’t skeletons fight each other? They don’t have the guts!",
  },
  {
    role: "user",
    content: "Haha, that’s a good one! Can you recommend a good book to read?",
  },
  {
    role: "assistant",
    content:
      "Certainly! If you enjoy fiction, you might like 'The Midnight Library' by Matt Haig. It's a thought-provoking and engaging read.",
  },
  {
    role: "user",
    content: "I’ll check it out. What’s the weather like today?",
  },
  {
    role: "assistant",
    content:
      "I can help with that. Could you please tell me your location so I can provide the current weather?",
  },
  {
    role: "user",
    content: "I’m in Springfield.",
  },
  {
    role: "assistant",
    content:
      "It looks like the weather in Springfield today is mostly sunny with a high of 75°F (24°C).",
  },
  {
    role: "user",
    content: "Great, thanks for the information!",
  },
  {
    role: "assistant",
    content:
      "You’re welcome! If you have any other questions, feel free to ask.",
  },
];

function Chat() {
  const auth = useAuth();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flex: 1,
          width: "100%",
          height: "100%",
          mt: 3,
          gap: 3,
        }}
      >
        <Box
          sx={{
            display: {
              md: "flex",
              xs: "none",
              sm: "none",
              flex: 0.2,
              flexDirection: "column",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "60vh",
              bgcolor: "rgb(17,29,39)",
              borderRadius: 5,
              flexDirection: "column",
              mx: 3,
            }}
          >
            <Avatar
              sx={{
                mx: "auto",
                my: 2,
                bgcolor: "white",
                color: "black",
                fontWeight: 700,
              }}
            >
              {auth?.user?.name[0]}
            </Avatar>
            <Typography sx={{ mx: "auto", fontFamily: "work sans" }}>
              You are talking to a ChatBOT
            </Typography>
            <Typography
              sx={{ mx: "auto", fontFamily: "work sans", my: 4, p: 3 }}
            >
              Yay! Ask me anything...!
            </Typography>
            <Button
              sx={{
                width: "200px",
                my: "auto",
                color: "white",
                fontWeight: "700",
                borderRadius: 3,
                mx: "auto",
                bgcolor: red[300],
                ":hover": {
                  bgcolor: red.A400,
                },
              }}
            >
              Clear Conversation
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: { md: 0.8, xs: 1, sm: 1, flexDirection: "column", px: 3 },
          }}
        >
          <Typography
            sx={{
              fontSize: "40px",
              color: "white",
              mb: 2,
              mx: "auto",
              fontWeight: "600",
            }}
          >
            Model - GPT 4o
          </Typography>
          <Box
            sx={{
              width: "100%",
              height: "60vh",
              borderRadius: 3,
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              overflow: "scroll",
              overflowX: "hidden",
              overflowY: "auto",
              scrollBehavior: "smooth",
            }}
          >
            {chatMessages.map((chat, index) => (
              <ChatItem content={chat.content} role={chat.role} key={index} />
            ))}
          </Box>
          <div
            style={{
              width: "100%",
              padding: "20px",
              borderRadius: 8,
              backgroundColor: "rgb(17,27,39)",
              display:'flex',
              margin:'auto'
            }}
          >
            <input
              type="text"
              style={{
                width: "100%",
                backgroundColor: "transparent",
                padding: "10px",
                border: "none",
                outline: "none",
                color: "white",
                fontSize: "20px",
              }}
            />
            <IconButton sx={{ml:'auto', color:'white'}}><IoMdSend/></IconButton>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default Chat;
