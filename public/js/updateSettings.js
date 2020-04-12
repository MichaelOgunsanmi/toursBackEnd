import axios from 'axios';

import {showAlert} from "./alerts";


export const handleUpdateSettingsFormSubmit = async event => {
    event.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    try {
        const response = await axios({
            method: 'PATCH',
            url: '/api/v1/users/updateMe',
            data: form
        });

        if (response.data.status === 'success') {
            showAlert('success', 'Details updated successfully');
            window.setTimeout( () => location.assign('/me'), 1000);
        }
    } catch(error) {
        showAlert('error', error.response.data.message);
    }
};
