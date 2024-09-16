import app from "./app.js";
import { connectToDatabase, disconnectFromDatabase } from "./db/connection.js";

const PORT = process.env.PORT || 5001;

connectToDatabase()
  .then(() => {
    const server = app.listen(PORT, () =>
      console.log(`Server running on port ${PORT} and connected to the database`)
    );

    // Error handling for server listen
    server.on("error", (err: NodeJS.ErrnoException) => {
      if (err.code === "EADDRINUSE") {
        console.error(`Port ${PORT} is already in use. Trying to restart...`);

        // Optional: Terminate the process to restart it cleanly (useful for dev environments)
        process.exit(1);
      } else {
        console.error("Server error:", err);
        disconnectFromDatabase().then(()=>{
          console.log('Something Went wrong... so that disconnected from database')
        })
      }
    });
  })
  .catch((err) => console.error("Database connection error:", err));
