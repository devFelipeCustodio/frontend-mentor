(function () {
    'use strict';
    document
        .querySelector('.card__rating-selector')
        .addEventListener('submit', (event) => {
            event.preventDefault();
            const score = document.querySelector(
                '.card__rating-radio input[type="radio"]:checked'
            ).value;
            document.querySelector('.card__selected-score').textContent = score;
            document
                .querySelector('.card__default-state')
                .classList.add('hidden');
            document
                .querySelector('.card__thank-you-state')
                .classList.remove('hidden');
        });
})();
