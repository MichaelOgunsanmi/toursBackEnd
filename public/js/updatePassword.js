import axios from 'axios';

import {showAlert} from "./alerts";


export const handlePasswordUpdateFormSubmit = async event => {
    event.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const oldPassword = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-confirm').value;


    try {
        const response = await axios({
            method: 'PATCH',
            url: '/api/v1/users/updateMyPassword',
            data: {
                oldPassword,
                password,
                confirmPassword
            }
        });

        if (response.data.status === 'success') {
            showAlert('success', 'Password updated successfully');
            window.setTimeout( () => location.assign('/me'), 1000);
        }
    } catch(error) {
        showAlert('error', error.response.data.message);
        document.querySelector('.btn--save-password').textContent = 'Save Password';
    }
};
