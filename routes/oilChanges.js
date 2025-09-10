const express = require("express");
const db = require("../.vscode/db");
const router = express.Router();

//Add a new oil change record
router.post("/", (req, res) => {
    const { vehicle, mileage, date, notes } = req.body;

    db.run (
        "INSERT INTO oil_changes (vehicle, mileage, date, notes) VALUES (?, ?, ?, ?)",
        [vehicle, mileage, date, notes],
        function (err) {
            if (err) {
                return res.status(400).json({ error: err.message });
            }
            res.json({ 
                id: this.lastID,
                vehicle,
                mileage,
                date,
                notes,
             });
        }
    );
});

//Get all oil changes
router.get("/", (req, res) => {
    db.all("SELECT * FROM oil_changes", [], (err, rows) => {
        if (err) {
            return res.status(400).json({ error: err.message });
        }
        res.json(rows);
    });
});

module.exports = router;