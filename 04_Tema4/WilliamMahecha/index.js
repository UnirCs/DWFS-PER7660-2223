window.onload = (event) => {
    const body         = document.body;
    const containers   = document.querySelectorAll('.container');
    const changeSwitch = document.querySelector('#dark_switch');
    function cambioTema(e) {
      if (e.target.checked) {
        containers.forEach(container => {
          container.classList.add('bg-dark');
        });
      } else {
        containers.forEach(container => {
          container.classList.remove('bg-dark');
        });
      }    
    }
    changeSwitch.addEventListener('change', cambioTema, false);

    var hojas = [];
    function buscarHojas(node) {
        if (node.children.length === 0) {
          hojas.push(node);
        } else {
            for (var i = 0; i < node.children.length; i++) {
              buscarHojas(node.children[i]);
            }
        }
    }
    buscarHojas(body);
    for (var i = 0; i < hojas.length; i++) {
        console.log(hojas[i]);
    }
};