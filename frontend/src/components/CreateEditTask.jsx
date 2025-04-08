import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DateTimePickerComponent from './DateTimePicker';
import '../App.css';

const CreateEditTask = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [dateAndTime, setDateAndTime] = useState(new Date());

    const handleSave = (e) => {
        e.preventDefault();
        // Make sure to include the dateAndTime in your data handling or logging
        console.log({ title, dateAndTime });
        navigate('/tasks');
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

                <label>Date and Time:</label>
                <DateTimePickerComponent selectedDate={dateAndTime} onChange={setDateAndTime} />

                <button type="submit">Save</button>
            </form>
            
            <button className="button-7" onClick={handleExit}>Exit</button>
        </div>
    );
};

export default CreateEditTask;
