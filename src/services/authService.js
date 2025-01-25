import axios from 'axios';

export const loginUser = async (username, password) => {
    const response = await axios.post(`http://localhost:5001/api/Home/login?username=${username}&password=${password}`);
    return response.data.token;
};

export const registerUser = async (username, password, email) => {
    return await axios.post(`http://localhost:5001/api/Home/register?username=${username}&email=${email}&password=${password}`);
};
