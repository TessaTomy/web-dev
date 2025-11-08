// 06-db-full-demo.js
// milestone: full MySQL demo — create DB/table, select, update, delete using mysql2/promise

const mysql = require("mysql2/promise");

async function dbase() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college_db"
  });

  console.log("✅ MySQL connected successfully!");

  await db.execute("CREATE DATABASE IF NOT EXISTS college_db");
  console.log("✅ Database created!");

  await db.execute(`
    CREATE TABLE IF NOT EXISTS students (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(50),
      age INT,
      course VARCHAR(30)
    )
  `);
  console.log("✅ Table created!");

  const result = [
    ['d', 2, 'MATHS'],
    ['e', 3, 'MATHS'],
    ['f', 4, 'MATHS']
  ];

  // Uncomment to insert sample data
  // await db.query("INSERT INTO students(name, age, course) VALUES ?", [result]);

  let [rows] = await db.query("SELECT * FROM students WHERE course LIKE 'CS'");
  console.log("🔍 CS students:", rows);

  await db.query("UPDATE students SET course='data science' WHERE id=2");
  [rows] = await db.query("SELECT * FROM students");
  console.log("🔄 After update:", rows);

  await db.query("DELETE FROM students WHERE id=1");
  [rows] = await db.query("SELECT * FROM students");
  console.table(rows);

  await db.end();
}

dbase();
