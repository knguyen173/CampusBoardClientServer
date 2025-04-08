import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, password });
        // add auth check here
        navigate('/dashboard')
    };
    const handleRegister = () => {
        navigate('/register');
    };

    return (
        <div className="form-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
            
<button class="button-7" onClick={handleRegister} >register</button>

        </div>
    );
};

export default Login;
