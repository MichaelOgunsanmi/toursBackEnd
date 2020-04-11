import axios from 'axios';


export const handleLoginFormSubmit = async event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await axios({
        method: 'POST',
        url: '/api/v1/users/login',
        data: {
            email,
            password
        }
    });

};
