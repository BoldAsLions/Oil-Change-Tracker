const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./oilChange.db", (err) => {
    if (err) {
        console.error("Error opening database:", err.message);
    } else {
        console.log("Connected to SQLite database");

        db.run(`
            CREATE TABLE IF NOT EXISTS oil_changes (
            id  INTEGER PRIMARY KEY AUTOINCREMENT, 
            vehicle TEXT NOT NULL,  
            mileage INTEGER NOT NULL, 
            date TEXT NOT NULL, 
            notes TEXT 
             )
         `);
    }
});

module.exports = db;