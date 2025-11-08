// 03-insert-students.js
// milestone: insert multiple student records into college_db using mysql2/promise

const mysql = require("mysql2/promise");

async function insertStudents() {
  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "college_db"
  });

  console.log("MySQL connected successfully!");

  const students = [
    ['Alice', 20, 'CS'],
    ['Bob', 21, 'Maths'],
    ['Charlie', 22, 'Physics']
  ];

  await db.query(
    "INSERT INTO students(name, age, course) VALUES ?",
    [students]
  );

  console.log("Student records inserted successfully!");
  await db.end();
}

insertStudents();
