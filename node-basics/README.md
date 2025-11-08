# ⚙️ Node Basics

This folder documents foundational Node.js concepts with minimal, milestone-tagged demos. Each file explores a core module or pattern, scaffolded for remixability and future reference.

## 🛠️ Setup Instructions

To initialize the Node project, run `npm init -y`. Choose an expressive project name when prompted, such as `node-basics`, `nzd-node`, or `node-lab`. Then install the MySQL connector with `npm install mysql2`.

## 🗄️ MySQL Setup (Linux)

Start the MySQL CLI using:

```bash
sudo mysql -u root -p
```

Inside the MySQL shell, run:

```sql
CREATE USER 'nzd'@'localhost' IDENTIFIED BY 'yourpassword';
GRANT ALL PRIVILEGES ON *.* TO 'nzd'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;
```

This grants full access to user `nzd` for local development.

## 🏃 Run Instructions

To run any file in this folder, use:

```bash
node filename.js
```

Example:

```bash
node 03-fs-demo.js
```
