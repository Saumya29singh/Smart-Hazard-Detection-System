const express = require("express");

const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const { createComplaint } = require("../controllers/complaintController");
const upload = require("../middleware/uploadMiddleware");

router.post(
    "/",
    protect,
    upload.single("image"),
    createComplaint
);

module.exports = router;