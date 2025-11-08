// 02-create-table.js
// milestone: create 'students' table in college_db using mysql2/promise

const mysql = require("mysql2/promise");

async function dbase() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college_db"
  });

  console.log("MySQL connected successfully!");

  await db.execute(`
    CREATE TABLE IF NOT EXISTS students (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50),
      age INT,
      course VARCHAR(30)
    )
  `);

  console.log(" 'students' table created successfully!");
  await db.end();
}

dbase();
