// 04-select-students.js
// milestone: select CS students from college_db using mysql2/promise

const mysql = require("mysql2/promise");

async function dbase() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college_db"
  });

  console.log("✅ MySQL connected successfully!");

  const [rows] = await db.query(
    "SELECT * FROM students WHERE course = 'CS'"
  );

  console.table(rows);
  await db.end();
}

dbase();
