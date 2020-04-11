import '@babel/polyfill'
import {handleLoginFormSubmit} from './login';


const form = document.querySelector('.form');
form.addEventListener('submit', handleLoginFormSubmit);