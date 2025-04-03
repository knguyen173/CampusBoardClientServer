import React from 'react';
import '../App.css';
const NotesList = () => {
    return (
        <div className="content-container">
            <h2>Your Notes</h2>
            <div className="note">
                <h3>Note Title</h3>
                <p>This is a sample note content.</p>
            </div>
        </div>
    );
};

export default NotesList;
