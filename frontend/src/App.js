import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import NotesList from './components/NotesList';
import TasksList from './components/TasksList';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="container">
                <h1>Campus Board App</h1>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/notes" element={<NotesList />} />
                    <Route path="/tasks" element={<TasksList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
