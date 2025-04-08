import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const TasksList = () => {
    const navigate = useNavigate();

    const toDashboard = () => {
        navigate('/dashboard');
    };
    const addTask = () => {
        navigate('/createTask')
    }


    return (
        <div className="content-container">
            <h2>Your Tasks</h2>
            <button class='button-7' onClick={toDashboard}>Return To Dashboard</button>
            <div className="task">
                <h3>Task Title</h3>
                <p>Priority: High</p>
            </div>
            <button class='button-7' onClick={addTask}>add task</button>
        </div>
    );
};

export default TasksList;
