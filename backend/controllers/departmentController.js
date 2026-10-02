const db = require("../config/database");

const getDepartments = (req, res) => {
    const sql = "SELECT * FROM departments";

    db.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Failed to fetch departments",
                error: err.message
            });
        }

        res.json({
            message: "Departments fetched successfully",
            departments: results
        });
    });
};

module.exports = {
    getDepartments
};