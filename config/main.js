/**
 * Функция добавляет клик по кнопкам /Плюс/ и /Минус/
 */

function addEventListenerForAddButtons() {
    const addToCartButtons = document.querySelectorAll('button[data]');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', addedHealer);
    });
}

/**
 * 
 * @param {*} event обработчик событий при клике
 */

function addedHealer(event) {
    const productId = event.currentTarget.getAttribute('data');
    console.log(productId);
}