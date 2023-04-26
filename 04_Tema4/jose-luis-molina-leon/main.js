window.onload = (event) => {

    // cambiar a modo oscuro
    const body = document.body;
    let check = document.querySelector("#mySwitch");
    check.addEventListener("click", (event) => {
        if(check.checked){
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });


    // Mostrar arbol del documento
    function encontrarHojas(node) {
        const leaves = node.querySelectorAll(":not(:has(*))");
        let arrayHojas = [];
        for (let i = 0; i < leaves.length; i++) {
            arrayHojas.push(leaves[i]);
        }
        return arrayHojas;
      }

      const arrayHojas = encontrarHojas(body);
      
      console.log(`Las hojas del árbol de elementos asociado al body del documento HTML son:`);
      for (let i = 0; i < arrayHojas.length; i++) {
        console.log(arrayHojas[i]);
      }
};
