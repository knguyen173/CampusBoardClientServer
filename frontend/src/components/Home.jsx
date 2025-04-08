import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleRedirectNotes = () => {
        navigate('/notes');
    };
    const handleRedirectTasks = () => {
        navigate('/tasks');
    };
    const handleRedirectLogout = () => {
        navigate('/login');
    };

    return (
        <div>
            <h2>Welcome to Campus Board App</h2>
            <p>This is your dashboard. Navigate to register, login, notes, or tasks.</p>
            <div>
            <button class="button-7" onClick={handleRedirectNotes}>Go to Notes</button>
            </div>
            <div>
            <button class="button-7" onClick={handleRedirectTasks}>Go to Tasks</button>
            </div>
            <div>
            <button class="button-7" onClick={handleRedirectLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Home;
