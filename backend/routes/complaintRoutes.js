const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { createComplaint } = require("../controllers/complaintController");

router.post("/", protect, createComplaint);

router.get("/test", protect, (req, res) => {
    res.json({
        message: "Complaint API is working",
        user: req.user
    });
});

module.exports = router;