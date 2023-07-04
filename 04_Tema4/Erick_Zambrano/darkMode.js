
const toggleButton = document.getElementById('toggle-mode');
const body = document.body;

toggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    console.log(document.body.querySelectorAll(':not(:has(*))'))
});