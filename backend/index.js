const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "mysql",       // <-- use service name, not localhost
  user: "grocery_user",
  password: "123",
  database: "grocerydb",
  port: 3306
});

db.connect((err) => {
  if (err) {
    console.error("MySQL connection error:", err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Example route to fetch items
app.get("/api/items", (req, res) => {
  db.query("SELECT * FROM items", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend server running on port ${PORT}`));
