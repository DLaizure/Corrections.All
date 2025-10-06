import pool from "./db.js";

async function createTables() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT,
      role TEXT DEFAULT 'attorney'
    );
  `);
  console.log("✅ Tables created");
  pool.end();
}

createTables();
