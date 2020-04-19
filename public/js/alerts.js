import {CONVERTSECONDSTOMILLISECONDS} from '../../utils'

export const hideAlert = () => {
    const alertElement = document.querySelector('.alert');

    if (alertElement) alertElement.parentElement.removeChild(alertElement);
};


export const showAlert = (alertType, message, timeInSeconds = 5) => {
    hideAlert();

    const htmlMarkup = `<div class="alert alert--${alertType}">${message}</div>`;

    document.querySelector('body').insertAdjacentHTML('afterbegin', htmlMarkup);

    window.setTimeout(hideAlert, timeInSeconds * CONVERTSECONDSTOMILLISECONDS);
};