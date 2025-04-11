// NotesList.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../api/axiosInstance';

const NotesList = () => {
    const navigate = useNavigate();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const response = await axiosInstance.get('/notes');
                setNotes(response.data);
            } catch (error) {
                console.error('Failed to fetch notes:', error);
            }
        };

        fetchNotes();
    }, []);

    const toDashboard = () => {
        navigate('/dashboard');
    };

    const addNote = () => {
        navigate('/createNote');
    };

    const handleDelete = async (id) => {
        try {
            await axiosInstance.delete(`/notes/${id}`);
            setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
        } catch (error) {
            console.error('Failed to delete note:', error);
        }
    };

    const handleEdit = (id) => {
        navigate(`/editNote/${id}`);
    };

    return (
        <div className="content-container">
            <h2>Your Notes</h2>
            <button onClick={toDashboard} class="button-7">Return To Dashboard</button>
            {notes.map((note) => (
                <div key={note.id} className="note">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                    <button onClick={() => handleEdit(note.id)} class="button-7">Edit</button>
                    <button onClick={() => handleDelete(note.id)} class="button-7">Delete</button>
                </div>
            ))}
            <button onClick={addNote} class="button-7">Add Note</button>
        </div>
    );
};

export default NotesList;
