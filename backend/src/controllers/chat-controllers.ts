import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import G4FModule from "g4f";

// Extract the G4F class from the default export
const { G4F } = G4FModule;

export const generateChatCompletion = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  // console.log("Message received from request:", message);

  try {
    const user = await User.findById(res.locals.jwtData.id);
    // console.log("User fetched from database:", user);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    // Validate and clean up chats
    const validChats = user.chats
      .filter((chat) => chat.content && chat.role) // Ensure content and role are present
      .map(({ role, content }) => ({
        role,
        content,
      }));

    // console.log("Valid chats sent to G4F:", validChats);

    // Add new message from user
    validChats.push({ content: message, role: "user" });
    user.chats.push({ content: message, role: "user" });

    // Instantiate G4F class
    const g4f = new G4F();

    // Call chatCompletion method
    let chatResponse = await g4f.chatCompletion(validChats);
    // console.log("G4F chatCompletion response:", chatResponse);

    // If chatResponse is a string, wrap it into the expected object
    if (typeof chatResponse === "string") {
      chatResponse = [{ role: "assistant", content: chatResponse }];
    }

    // Check if the response has valid content and role
    if (!chatResponse[0]?.content || !chatResponse[0]?.role) {
      // console.error("Invalid response format from G4F:", chatResponse[0]);
      return res.status(500).json({ message: "Invalid response from G4F" });
    }

    // Push the AI's response to user chats and save the user document
    user.chats.push(chatResponse[0]);
    await user.save();

    // console.log("User document saved successfully.");
    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    // console.log("User fetched from database:", user);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission didn't match");
    }

    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.error("Error occurred while sending old chats:", error);
    return res
      .status(500)
      .json({
        message: "Something went wrong while sending old chats to user",
      });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    // console.log("User fetched from database:", user);

    if (!user) {
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });
    }

    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permission didn't match");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK"});
  } catch (error) {
    console.error("Error occurred while sending old chats:", error);
    return res.status(500).json({
      message: "Something went wrong while sending old chats to user",
    });
  }
};
