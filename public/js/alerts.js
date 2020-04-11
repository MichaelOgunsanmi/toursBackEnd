export const hideAlert = () => {
    const alertElement = document.querySelector('.alert');

    if (alertElement) alertElement.parentElement.removeChild(alertElement);
};


export const showAlert = (alertType, message) => {
    hideAlert();

    const htmlMarkup = `<div class="alert alert--${alertType}">${message}</div>`;

    document.querySelector('body').insertAdjacentHTML('afterbegin', htmlMarkup);

    window.setTimeout(hideAlert, 5000)
};