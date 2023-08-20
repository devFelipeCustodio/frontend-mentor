(function () {
    'use strict';
    const shareActionsBtn = document.querySelector('.share-actions-btn');
    const shareActionsDiv = document.querySelector('.share-actions');
    shareActionsBtn.addEventListener('click', () => {
        toggleShareActionsVisibility();
    });

    function toggleShareActionsVisibility() {
        if (shareActionsDiv.classList.contains('hidden')) {
            shareActionsDiv.classList.remove('hidden');
            shareActionsBtn.classList.add('share-actions-btn--active');
        } else {
            shareActionsDiv.classList.add('hidden');
            shareActionsBtn.classList.remove('share-actions-btn--active');
        }
    }
})();
