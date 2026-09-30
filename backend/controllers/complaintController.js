const db = require("../config/database");

const createComplaint = (req, res) => {
    const {
        description,
        latitude,
        longitude
    } = req.body;

    const userId = req.user.id;

    if (!description) {
        return res.status(400).json({
            message: "Description is required"
        });
    }

    const sql = `
        INSERT INTO complaints
        (user_id, description, latitude, longitude)
        VALUES (?, ?, ?, ?)
    `;

    db.query(
        sql,
        [userId, description, latitude || null, longitude || null],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Failed to create complaint",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Complaint created successfully",
                complaintId: result.insertId
            });
        }
    );
};

module.exports = {
    createComplaint
};