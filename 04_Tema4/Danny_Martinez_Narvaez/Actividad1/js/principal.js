window.onload = function () {
    let toggle = document.querySelector('.switch');
    //obtenemos los elementos a cambiar el color
    let contenedor =  document.querySelector('#contenedor');
    let izquierda =  document.querySelector('#columna-izquierda');
    let derecha =  document.querySelector('#columna-derecha');
    let bandera = true, contador = 0;
    toggle.onclick = (e) => {
        if (bandera) {
            contenedor.style.backgroundColor = (contador %2 == 0 )? "#2B1B17":"#fff";
            contenedor.style.boxShadow = (contador %2 == 0 )? "4px 4px 10px #7F462C":"2px 2px 10px rgba(0, 0, 0, 0.5)";
            contenedor.style.color = (contador %2 == 0 )? "#C8A2C8":"black";
            izquierda.style.backgroundColor = (contador %2 == 0 )? "#306754":"#6495ED";
            izquierda.style.color = (contador %2 == 0 )? "#151B54":"black";
            contador += 1
        }
        e.stopPropagation();
        bandera = !bandera
    }
}