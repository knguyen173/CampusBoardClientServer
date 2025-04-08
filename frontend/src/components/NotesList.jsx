import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';


const NotesList = () => {
    const navigate = useNavigate();

    const toDashboard = () => {
        navigate('/dashboard');
    };

    const addTask = () => {
        navigate('/createNote')
    };

    return (
        <div className="content-container">
            <h2>Your Notes</h2>
            <button class="button-7" onClick={toDashboard}>Return To Dashboard</button>
            <div className="note">
                <h3>Note Title</h3>
                <p>This is a sample note content.</p>
            </div>
            <button class='button-7' onClick={addTask}>Add Note</button>
        </div>
    );
};

export default NotesList;
