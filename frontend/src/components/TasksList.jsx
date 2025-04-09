import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllTasks, deleteTask } from '../api/tasks';
import '../App.css';

const TasksList = () => {
    const navigate = useNavigate();
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await getAllTasks();
                setTasks(response);
            } catch (error) {
                console.error('Failed to fetch tasks:', error);
            }
        };

        fetchTasks();
    }, []);

    const toDashboard = () => {
        navigate('/dashboard');
    };

    const addTask = () => {
        navigate('/createTask');
    };

    const handleDelete = async (id) => {
        try {
            await deleteTask(id);
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Failed to delete task:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/editTask/${id}`);
    };

    return (
        <div className="content-container">
            <h2>Your Tasks</h2>
            <button onClick={toDashboard}>Return To Dashboard</button>
            <button onClick={addTask}>Add Task</button>
            <div>
                {tasks.map(task => (
                    <div key={task.id} className="task">
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Priority: {task.priority}</p>
                        <button onClick={() => handleEdit(task.id)}>Edit</button>
                        <button onClick={() => handleDelete(task.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksList;
