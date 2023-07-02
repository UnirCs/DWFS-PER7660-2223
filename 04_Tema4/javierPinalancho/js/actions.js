window.onload = function () {

  //  Ejercicio - 1 -> Modo Oscuro
  //Creamos el boton que va a servir para el cambio de color
  let switcher = document.createElement("div");
  switcher.classList.add("form-check", "form-switch");
  switcher.innerHTML = `<input class="form-check-input" type="checkbox" id="switchColor">
                          <label class="form-check-label"></label>`;
  document.getElementById("switcher").appendChild(switcher);

  //creamos un evento para cuando se produzca un click dentro del elemento con id switcher
  document.getElementById("switcher").addEventListener("click", (event) => {
    //obtenemos el elemento body y utilizamos toggle para cambiar el color
    var element_body = document.body;
    element_body.classList.toggle("dark_mode");
    event.stopPropagation();
  });
};


//  Ejercicio - 2 ->  El árbol del documento
window.addEventListener("load", function(event) {

  console.log("'Todos los recursos terminaron de cargar!");

  var nodes = Array.prototype.slice.call(document.body.getElementsByTagName("*"), 0);
  var leaf_nodes = nodes.filter(function(elem) {
    // vamos a comprobar los nodos hijos y vamos a incluir tambien los que tengan texto
    if (elem.hasChildNodes()) {
      for (var i = 0; i < elem.childNodes.length; i++) {
          if (elem.childNodes[i].nodeType == 1) {
              return false;
          }
      }
    }
    return true;
  });
  console.log(leaf_nodes);

});