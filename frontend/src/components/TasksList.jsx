import React from 'react';
import '../App.css';
const TasksList = () => {
    return (
        <div className="content-container">
            <h2>Your Tasks</h2>
            <div className="task">
                <h3>Task Title</h3>
                <p>Priority: High</p>
            </div>
        </div>
    );
};

export default TasksList;
