const express = require("express");
const oilChangeRoutes = require ("./routes/oilChanges");

const app = express();
app.use(express.json());

//Routes
app.use("/api/oil-changes", oilChangeRoutes);

//Start server
const PORT = 3000; 
app.listen(PORT, () => {
    console.log (`Server running on http://localhost:${PORT}`);
});