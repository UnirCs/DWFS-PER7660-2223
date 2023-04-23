
window.onload = (event) => {


    //Modo oscuro
    document.querySelector("#checkboxSelector").addEventListener("click", (event) => document.body.classList.toggle("night-mode"));

    //API DOM: para seleccionar las hojas del arbol, se deben evaluar aquellos elementos que no tengan hijos. 

    const hojas= []
    const hojasHTML = (element) => {
        //si no hay lenght para encontrar los nodos NO vacíos de la estructura.
        if (!element.children.length) return hojas.push(element); 
        //por cada hijo que se encuentre en la topología, aplicar de forma recursiva la funcion hojasHTML
        for (const child of element.children) hojasHTML(child);
    };

    hojasHTML(document.body);
    console.log(hojas);

};
