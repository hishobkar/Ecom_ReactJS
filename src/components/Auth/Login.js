import { useState, useContext } from 'react';
import { loginUser } from '../../services/authService';
import AuthContext from '../../context/AuthContext';
import { Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const { login } = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = await loginUser(credentials.username, credentials.password);
            login(token);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={e => setCredentials({ ...credentials, username: e.target.value })} />
            <input type="password" placeholder="Password" onChange={e => setCredentials({ ...credentials, password: e.target.value })} />
            <button type="submit">Login</button>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </form>
    );
};

export default Login;
