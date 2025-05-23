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

    // Function to get the background color based on priority
    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'High':
                return '#FF9090';  // Red for high priority
            case 'Medium':
                return '#F6F29E';  // Yellow for medium priority
            case 'Low':
                return '#9EF6A5';  // Green for low priority
            default:
                return '#ffffff';  // Default color if no priority
        }
    };

    return (
        <div className="content-container">
            <h2>Your Tasks</h2>
            <button onClick={toDashboard} className="button-7">Return To Dashboard</button>
            <button onClick={addTask} className="button-7">Add Task</button>
            <div>
                {tasks.map(task => (
                    <div key={task.id} className="task" style={{ backgroundColor: getPriorityColor(task.priority) }}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Priority: {task.priority}</p>
                        <button onClick={() => handleEdit(task.id)} className="button-7">Edit</button>
                        <button onClick={() => handleDelete(task.id)} className="button-7">Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksList;
