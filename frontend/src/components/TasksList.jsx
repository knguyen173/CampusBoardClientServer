import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from '../api/tasks';
import '../App.css';

const TasksList = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getAllTasks();
            setTasks(data);
        };
        fetchTasks();
    }, []);

    const handleDelete = async (id) => {
        await deleteTask(id);
        setTasks(tasks.filter(task => task.id !== id));
    };

    const toDashboard = () => {
        navigate('/dashboard');
    };

    const addTask = () => {
        navigate('/createTask');
    };

    return (
        <div className="content-container">
            <h2>Your Tasks</h2>
            <button className='button-7' onClick={toDashboard}>Return To Dashboard</button>
            {tasks.map(task => (
                <div key={task.id} className="task">
                    <h3>{task.title}</h3>
                    <p>Priority: {task.priority}</p>
                    <button onClick={() => navigate(`/editTask/${task.id}`)}>Edit</button>
                    <button onClick={() => handleDelete(task.id)}>Delete</button>
                </div>
            ))}
            <button className='button-7' onClick={addTask}>Add Task</button>
        </div>
    );
};

export default TasksList;