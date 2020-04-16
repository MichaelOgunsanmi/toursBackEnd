import '@babel/polyfill'
import {handleLoginFormSubmit} from './login';
import {handleLogout} from './logout';
import {handleUpdateSettingsFormSubmit} from "./updateSettings";
import {handlePasswordUpdateFormSubmit} from "./updatePassword";
import {displayMap} from './mapbox';
import {handleBookTour} from "./stripe";


const mapBox = document.getElementById('map');
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}

const form = document.querySelector('.form--login');
if (form) form.addEventListener('submit', handleLoginFormSubmit);


const logoutButton = document.querySelector('.nav__el--logout');
if (logoutButton) logoutButton.addEventListener('click', handleLogout);


const updateUserButton = document.querySelector('.form-user-data');
if (updateUserButton) updateUserButton.addEventListener('submit', handleUpdateSettingsFormSubmit);


const updatePasswordButton = document.querySelector('.form-user-password');
if (updatePasswordButton) updatePasswordButton.addEventListener('submit', handlePasswordUpdateFormSubmit);


const bookTourButton = document.getElementById('book-tour');
if (bookTourButton) bookTourButton.addEventListener('click', handleBookTour);