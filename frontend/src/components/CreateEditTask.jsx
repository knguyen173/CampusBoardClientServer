// CreateEditTask.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

const CreateEditTask = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const [dueDate, setDueDate] = useState(new Date());

    useEffect(() => {
        const fetchTask = async () => {
            if (id) {
                try {
                    const response = await axiosInstance.get('/tasks');
                    const taskToEdit = response.data.find(task => task.id === parseInt(id));
                    if (taskToEdit) {
                        setTitle(taskToEdit.title);
                        setDescription(taskToEdit.description);
                        setPriority(taskToEdit.priority);
                        setDueDate(new Date(taskToEdit.due_date));
                    }
                } catch (error) {
                    console.error('Failed to load task:', error);
                }
            }
        };

        fetchTask();
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            if (id) {
                await axiosInstance.put(`/tasks/${id}`, {
                    title,
                    description,
                    priority,
                    due_date: dueDate
                });
            } else {
                await axiosInstance.post('/tasks', {
                    user_id: 1, // Replace with actual user_id 
                    title,
                    description,
                    priority,
                    due_date: dueDate
                });
            }

            navigate('/tasks');
        } catch (error) {
            console.error('Failed to save task:', error);
        }
    };

    const handleExit = () => {
        navigate('/tasks');
    };

    return (
        <div className="form-container">
            <h2>{id ? 'Edit Task' : 'Create New Task'}</h2>
            <form onSubmit={handleSave}>
                <label>Task:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <label>Date and Time:</label>
                <DatePicker
                    selected={dueDate}
                    onChange={(date) => setDueDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    timeCaption="time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                />

                <button type="submit">Save</button>
                <button type="button" onClick={handleExit}>Exit</button>
            </form>
        </div>
    );
};

export default CreateEditTask;
