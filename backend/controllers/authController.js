//

const { pool } = require('../config/db');
const bcrypt = require('bcrypt');

// Register a new user
exports.register = async (req, res) => {
    const { username, password, email } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING *',
            [username, hashedPassword, email]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// User Login
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const result = await pool.query(
            'SELECT * FROM users WHERE username = $1',
            [username]
        );

        if (result.rows.length === 0) return res.status(400).json({ error: "User not found" });

        const user = result.rows[0];
        const isValid = await bcrypt.compare(password, user.password);

        if (!isValid) return res.status(400).json({ error: "Invalid credentials" });

        res.status(200).json({ message: "Login successful", user: user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
