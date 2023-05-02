window.onload = function () {
    //modo oscuro
    document.getElementById("switch").addEventListener("click", (event) => document.body.classList.toggle("clear-mode"));

    //imprimir hojar
    let contadorHojas = 0;
    console.log("Los siguientes nodos son las hojas del documento:");
    function buscarHojas(node) {
        if (node.children.length === 0) {
            console.log(node);
            contadorHojas++;
        } else {
            Array.from(node.children).forEach(element => {
                buscarHojas(element);
            });
        }
    }
    buscarHojas(document.body);
    console.log("Número total de hojas ", contadorHojas);
}