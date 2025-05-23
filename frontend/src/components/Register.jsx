import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Register = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password, email });
        navigate('/login')
    };
    const loginReturn = () => {
        navigate('/login')
    }

    return (
        <div className="form-container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Register</button>
            </form>
            <button class="button-7" onClick={loginReturn}>Log In</button>
        </div>
    );
};

export default Register;
