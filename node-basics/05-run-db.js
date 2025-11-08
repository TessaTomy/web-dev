// 05-run-db.js
// milestone: use exported insert and select functions from db-utils

const { insertStudents, selectStudents } = require("./05-db-utils");

async function run() {
  await insertStudents();
  await selectStudents();
}

run();
