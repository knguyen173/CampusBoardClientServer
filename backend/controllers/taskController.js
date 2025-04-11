//

const { pool } = require('../config/db');

// Retrieve All Tasks
exports.getAllTasks = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM tasks');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create Task
exports.createTask = async (req, res) => {
    const { user_id, title, description, priority, due_date} = req.body;
    console.log("Creating new Task:", req.body);
    try {
        const result = await pool.query(
            'INSERT INTO tasks (user_id, title, description, priority, due_date) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [user_id, title, description, priority, due_date]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
  const { id }  = req.params;
  const { title, description, priority, due_date } = req.body;
  console.log("Received tasks! data on backend:", req.body); // Debugging line

  try {

      const result = await pool.query(
          'UPDATE tasks SET title = $1, description = $2, priority = $3, due_date = $4 WHERE id = $5',
          [title, description, priority, due_date, id]
      );

    //   if (result.rows.length === 0) {
    //       return res.status(404).json({ error: "Task not found" });
    //   }

      res.json(result.rows[0]);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
      const result = await pool.query('DELETE FROM tasks WHERE id = $1 RETURNING *', [id]);

      if (result.rows.length === 0) {
          return res.status(404).json({ error: "Task not found" });
      }

      res.json({ message: "Task deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

