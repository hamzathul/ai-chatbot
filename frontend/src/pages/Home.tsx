import { Box, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TypingAnim from "../components/typer/TypingAnim";
import Footer from "../components/footer/Footer";

function Home() {
  const theme = useTheme();
  const isBelowMd = useMediaQuery(theme.breakpoints.down("md"));
  const isBelowSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box width={"100%"} height={"100%"}>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          alignItems: "center",
          mx: "auto",
          mt: 3,
        }}
      >
        <TypingAnim />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: isBelowMd ? "column" : "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          my: 10,
        }}
      >
        <img
          src="robot.png"
          alt="robot"
          style={{ width: "200px", margin: "auto" }}
        />
        <img
          className="image-inverted rotate"
          src="openai.png"
          alt="openai"
          style={{ width: "200px", margin: "auto" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mx: "auto",
          mt: 10,
        }}
      >
        <img
          src="chat.png"
          alt="chatbot"
          style={{
            width: isBelowMd ? "90%" : "70%",
            borderRadius: 20,
            boxShadow: "-5px -5px 105px #64f3d5",
            marginTop: 20,
            marginBottom: 20,
          }}
        />
      </Box>
      <Footer></Footer>
    </Box>
  );
}

export default Home;
