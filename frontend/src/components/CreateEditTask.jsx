import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePickerComponent from './DateTimePicker';
import axiosInstance from '../api/axiosInstance';  // Make sure this path is correct
import '../App.css';

const CreateEditTask = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('Low');
    const [dateAndTime, setDateAndTime] = useState(new Date());

    const handleSave = async (e) => {
        e.preventDefault();

        try {
            const response = await axiosInstance.post('/tasks', {
                user_id: 1,  // Replace with the actual user ID
                title: title,
                description: description,
                priority: priority,
                dateAndTime: dateAndTime
            });
            console.log('Task saved:', response.data);
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
            <h2>Create New Task</h2>
            <form onSubmit={handleSave}>
                <label>Task:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} />

                <label>Priority:</label>
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <label>Date and Time:</label>
                <DateTimePickerComponent selectedDate={dateAndTime} onChange={setDateAndTime} />

                <button type="submit">Save</button>
            </form>
            
            <button className="button-7" onClick={handleExit}>Exit</button>
        </div>
    );
};

export default CreateEditTask;
