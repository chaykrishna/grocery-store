
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mysql',           // service name from docker-compose.yml
  user: 'appuser',         // must match MYSQL_USER
  password: 'Backend456!', // must match MYSQL_PASSWORD
  database: 'grocery_db',  // must match MYSQL_DATABASE
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL!');
  }
});
