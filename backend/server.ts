import express from 'express';
import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

const app = express();
const PORT = 3001;

app.use(express.json());

const initDb = async () => {
  const db = await open({
    filename: './database/attendance.db',
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS students (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      group_name TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS attendance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      student_id INTEGER NOT NULL,
      class_type TEXT NOT NULL,
      date TEXT NOT NULL,
      paid INTEGER NOT NULL,
      FOREIGN KEY(student_id) REFERENCES students(id)
    );
  `);

  return db;
};

app.get('/students', async (req, res) => {
  const db = await initDb();
  const students = await db.all('SELECT * FROM students');
  res.json(students);
});

app.post('/students', async (req, res) => {
  const { name, group_name } = req.body;
  const db = await initDb();
  await db.run('INSERT INTO students (name, group_name) VALUES (?, ?)', [name, group_name]);
  res.status(201).send('Student added');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});