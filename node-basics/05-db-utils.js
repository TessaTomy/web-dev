// 05-db-utils.js
// milestone: export insert and select functions for college_db using mysql2/promise

const mysql = require("mysql2/promise");

async function insertStudents() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college_db"
  });

  const students = [
    ['Tessa', 20, 'CS'],
    ['Ravi', 21, 'Maths'],
    ['Anu', 22, 'CS']
  ];

  await db.query("INSERT INTO students(name, age, course) VALUES ?", [students]);
  console.log("✅ Students inserted.");
  await db.end();
}

async function selectStudents() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college_db"
  });

  const [rows] = await db.query("SELECT * FROM students WHERE course = 'CS'");
  console.table(rows);
  await db.end();
}

module.exports = { insertStudents, selectStudents };
