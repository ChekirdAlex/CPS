const showMoreButton = document.querySelector('.show-more');
// const buttonIconFirst = showMoreButton.querySelector('.show-more::before');
// const buttonIconSecond = showMoreButton.querySelector('.show-more::after');
const swiper = document.querySelector('.swiper'); //Visibility of brands list
const container = document.querySelector('.repair-container'); // Background-color height;

showMoreButton.addEventListener('click', function (evt) {
    evt.preventDefault();

    swiper.classList.toggle('swiper--overflow--hidden');
    swiper.classList.toggle('swiper--overflow--visible');

    container.classList.toggle('repair-container--overflow--hidden');
    container.classList.toggle('repair-container--overflow--visible');

    showMoreButton.classList.toggle('show-more--clicked');
    if (showMoreButton.classList.contains('show-more--clicked')) {
        showMoreButton.textContent = 'Скрыть';
    } else {
        showMoreButton.textContent = 'Показать все';
    }

})