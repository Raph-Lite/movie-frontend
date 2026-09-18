import axios from 'axios';

export default axios.create({
    baseURL:'http://3.223.230.243:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
