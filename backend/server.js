const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const tasksRoutes = require('./routes/tasks');

// Importing connectDB and pool properly
const { connectDB } = require('./config/db');
connectDB(); // Ensure the database connection is established

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/notes', notesRoutes);
app.use('/api/tasks', tasksRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
