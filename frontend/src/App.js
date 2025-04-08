// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NotesList from './components/NotesList';
import TasksList from './components/TasksList';
import CreateEditNote from './components/CreateEditNote';
import CreateEditTask from './components/CreateEditTask';
import Home from './components/Home';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1>Campus Board App</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/login" />} /> {/* Redirects root URL to Login page */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/notes" element={<NotesList />} />
                    <Route path="/tasks" element={<TasksList />} />
                    <Route path="/dashboard" element={<Home />} />
                    <Route path="/createTask" element={<CreateEditTask />} />
                    <Route path="/createNote" element={<CreateEditNote />} />
                    <Route path="/editNote/:id" element={<CreateEditNote />} />
                    <Route path="/editTask/:id" element={<CreateEditTask />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
