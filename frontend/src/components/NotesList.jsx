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
                console.log("Fetched notes:", response.data); // Debugging line
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
        navigate('/createNote')
    };

    return (
        <div className="content-container">
            <h2>Your Notes</h2>
            <button onClick={toDashboard}>Return To Dashboard</button>
            {notes.map((note) => (
                <div key={note.id} className="note">
                    <h3>{note.title}</h3>
                    <p>{note.content}</p>
                </div>
            ))}
            <button onClick={addNote}>Add Note</button>
        </div>
    );
};

export default NotesList;
