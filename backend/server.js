require("dotenv").config();
require("./config/database");

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const complaintRoutes = require("./routes/complaintRoutes");
const departmentRoutes = require("./routes/departmentRoutes");
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/complaints", complaintRoutes);
app.use("/api/departments", departmentRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Road Hazard Backend is Running"
    });
});

app.get("/api/test", (req, res) => {
    res.json({
        message: "API is working"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});