window.onload = (event) => {
    const toggleBtn = document.getElementById('toggle-mode');
    toggleBtn.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        var containers = document.getElementsByClassName("info");
        for (var i = 0; i < containers.length; i++) {
            containers[i].classList.toggle("dark-mode-components");
        }
        var names = document.getElementsByClassName("name");
        for (var i = 0; i < names.length; i++) {
            names[i].classList.toggle("dark-mode-components");
        }
    });

    // 2 => Hojas del arbol
    // Seleccionamos todos los elementos que no tienen hijos del documento
    const hojas = document.body.querySelectorAll(':not(:has(*))');
    console.log(hojas);
}