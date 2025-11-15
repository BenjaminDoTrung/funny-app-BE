const express = require("express");
const cors = require("cors");
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // cho phép frontend gọi API

// Import routes
app.use("/api", require("./src/routes"));

// Test route
app.get("/", (req, res) => {
  res.send("Funny App Backend is running...");
});

// Port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});