const express = require("express");
const app = express();

// Cho phép server đọc JSON từ client
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("Backend NodeJS is running...");
});

// Khởi động server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});