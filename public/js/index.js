import '@babel/polyfill'
import {handleLoginFormSubmit} from './login';
import {handleLogout} from './logout';
import {displayMap} from './mapbox';

const mapBox = document.getElementById('map');
if (mapBox) {
    const locations = JSON.parse(mapBox.dataset.locations);
    displayMap(locations);
}

const form = document.querySelector('.form');
if (form){
    form.addEventListener('submit', handleLoginFormSubmit);
}


const logoutButton = document.querySelector('.nav__el--logout');
if (logoutButton) logoutButton.addEventListener('click', handleLogout);