const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'campus_board_client', 
  password: '',  
  port: 5432,
});

// connection to the database
const connectDB = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL database');
  } catch (err) {
    console.error('Failed to connect to PostgreSQL database', err);
    process.exit(1);
  }
};

module.exports = { connectDB, pool };
