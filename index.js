import express from "express";
import connectDB from "./db.js";

const app = express();
const PORT = process.env.PORT || 3000;

// A simple route
app.get("/", (req, res) => {
  res.send("Hello, World! Your Express server is running.");
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Connect to DB, then start the server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
