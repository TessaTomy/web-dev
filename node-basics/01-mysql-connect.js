// 01-mysql-connect.js
// milestone: first MySQL connection using mysql2/promise

const mysql = require("mysql2/promise");

async function dbase() {
  try {
    const db = await mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "",
      database: "college_db"
    });

    console.log("MySQL connected successfully.");
    await db.end(); 
  } catch (err) {
    console.error("Connection failed:", err.message);
  }
}

dbase();