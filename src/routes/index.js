const express = require("express");
const router = express.Router();

// Route test
router.get("/hello", (req, res) => {
  res.json({
    message: "Hello from API!"
  });
});

module.exports = router;