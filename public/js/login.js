import axios from 'axios';

import {showAlert} from "./alerts";


export const handleLoginFormSubmit = async event => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await axios({
            method: 'POST',
            url: '/api/v1/users/login',
            data: {
                email,
                password
            }
        });

        if (response.data.status === 'success') {
            showAlert('success', 'Logged In Successfully');
            window.setTimeout( () => location.assign('/'), 1500);
        }
    } catch(error) {
        showAlert('error', error.response.data.message);
    }
};
