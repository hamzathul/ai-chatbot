import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";

config(); // This loads environment variables from a .env

const app = express();

const corsURI = process.env.NODE_ENV === "development" ? "http://localhost:5173" : "https://ai-chatbot-frontend-0j3f.onrender.com"
//middlewares
app.use(cors({ origin: corsURI, credentials: true })); //This middleware enables Cross-Origin Resource Sharing (CORS), which allows or restricts requests from other domains
app.use(express.json()); //parses incoming requests with JSON payloads and makes them available via req.body
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it from production
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
