/*==================== T1 ====================*/

const themeButton = document.querySelector('#theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Activate / deactivate
themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
});

/* ================== T2 ==================== */

/* Get the elements that do not have children */

console.log(document.body.querySelectorAll(':not(:has(*))'));
console.log(document.body.querySelectorAll(':not(:has(*))').length);
