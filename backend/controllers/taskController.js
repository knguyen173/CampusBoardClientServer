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
    const { user_id, title, description, priority } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO tasks (user_id, title, description, priority) VALUES ($1, $2, $3, $4) RETURNING *',
            [user_id, title, description, priority]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, priority, status } = req.body;

  try {
      const result = await pool.query(
          'UPDATE tasks SET title = $1, description = $2, priority = $3, status = $4, updated_at = NOW() WHERE id = $5 RETURNING *',
          [title, description, priority, status, id]
      );

      if (result.rows.length === 0) {
          return res.status(404).json({ error: "Task not found" });
      }

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

