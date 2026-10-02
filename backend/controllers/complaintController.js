const db = require("../config/database");

const createComplaint = (req, res) => {
    const { description, latitude, longitude } = req.body;

    if (!description) {
        return res.status(400).json({
            message: "Description is required"
        });
    }

    const image = req.file ? req.file.filename : null;

    const sql = `
        INSERT INTO complaints
        (user_id, image, description, latitude, longitude)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
        sql,
        [
            req.user.id,
            image,
            description,
            latitude || null,
            longitude || null
        ],
        (err, result) => {

            if (err) {
                return res.status(500).json({
                    message: "Complaint creation failed",
                    error: err.message
                });
            }

            res.status(201).json({
                message: "Complaint created successfully",
                complaintId: result.insertId,
                image: image
            });
        }
    );
};

module.exports = {
    createComplaint
};