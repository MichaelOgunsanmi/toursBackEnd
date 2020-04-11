import axios from 'axios';

import {showAlert} from "./alerts";


export const handleUpdateSettingsFormSubmit = async event => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;


    try {
        const response = await axios({
            method: 'PATCH',
            url: '/api/v1/users/updateMe',
            data: {
                name,
                email
            }
        });

        if (response.data.status === 'success') {
            showAlert('success', 'Details updated successfully');
            window.setTimeout( () => location.assign('/me'), 1000);
        }
    } catch(error) {
        showAlert('error', error.response.data.message);
    }
};
