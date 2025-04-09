import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';
import '../App.css';

const CreateEditNote = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    useEffect(() => {
        const fetchNote = async () => {
            if (id) {
                try {
                    const response = await axiosInstance.get('/notes');
                    const noteToEdit = response.data.find(n => n.id === parseInt(id));
                    if (noteToEdit) {
                        setTitle(noteToEdit.title);
                        setNote(noteToEdit.content);
                    }
                } catch (error) {
                    console.error('Failed to load note:', error);
                }
            }
        };

        fetchNote();
    }, [id]);

    const handleSave = async (e) => {
        e.preventDefault();
        try {
            if (id) {
                // Update existing note
                await axiosInstance.put(`/notes/${id}`, {
                    title,
                    content: note
                });
            } else {
                // Create new note
                await axiosInstance.post('/notes', {
                    user_id: 1, // Replace with dynamic user if needed
                    title,
                    content: note
                });
            }
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
            <h2>{id ? 'Edit Note' : 'Add Note'}</h2>
            <form onSubmit={handleSave}>
                <label>Title:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Content:</label>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                />

                <button type="submit">Save</button>
            </form>

            <button className="button-7" onClick={handleExit}>Exit</button>
        </div>
    );
};

export default CreateEditNote;
