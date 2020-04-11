import axios from 'axios';

import {showAlert} from "./alerts";


export const handleLogout = async event => {
    event.preventDefault();
    try {
        const response = await axios({
            method: 'GET',
            url: '/api/v1/users/logout'
        });

        if (response.data.status === 'success') location.reload(true);
    } catch(error) {
        showAlert('error', 'Error logging out. Try Again.');
    }
};
