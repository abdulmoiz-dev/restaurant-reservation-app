const express = require("express");
const app = express();
require("dotenv").config();

// const db=mysql{

// }

// Middleware
app.use(express.json()); // Parse JSON requests

// Define a route
app.get("/", (req, res) => {
  res.send("Welcome to my backend application!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
