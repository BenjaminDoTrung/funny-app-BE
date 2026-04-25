import express from "express";

const router = express.Router();

// Route test
router.get("/hello", (req, res) => {
  res.json({
    message: "Hello from API!"
  });
});

export default router;
//pass: x2NDfYPm5mOREBaC
//userName: trung96ecvn_db_user