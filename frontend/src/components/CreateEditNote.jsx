// CreateEditNote.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const CreateEditNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/notes', {
                user_id: 1, // Replace with the actual user ID
                title: title,
                content: note
            });
            console.log('Note saved:', response.data);
            navigate('/notes');
        } catch (error) {
            console.error('Failed to save note:', error);
        }
    };

    const handleExit = () => {
        navigate('/notes');
    };

    return (
        <div className="form-container">
            <h2>Add Note</h2>
            <form onSubmit={handleSave}>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Content:</label>
                <textarea value={note} onChange={(e) => setNote(e.target.value)} />

                <button type="submit">Save</button>
            </form>
            <button onClick={handleExit}>Exit</button>
        </div>
    );
};

export default CreateEditNote;
