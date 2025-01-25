import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';
import ProductCRUD from './ProductCRUD';

const Dashboard = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div>
            <h1>Welcome, {user?.username}</h1>
            <button onClick={logout}>Logout</button>
            <ProductCRUD />
        </div>
    );
};

export default Dashboard;
