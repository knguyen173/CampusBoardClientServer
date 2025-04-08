import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CreateEditNote = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');

    const handleSave = (e) => {
        e.preventDefault();
        console.log({ title, note });
        navigate('/notes')
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
                
                <label>Note:</label>
                <textarea type="text" value={note} onChange={(e) => setNote(e.target.value)} />

                <button type="submit">Save</button>
            </form>

            <button class="button-7" onClick={handleExit} >exit</button>

        </div>
    );
};

export default CreateEditNote;
