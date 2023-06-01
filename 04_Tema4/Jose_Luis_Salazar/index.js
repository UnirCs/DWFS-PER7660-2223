
window.onload = (event) => {
    document.querySelector("#toggleBtn").addEventListener("click", (event) => document.body.classList.toggle("bodyBlack"));

    var body = document.body;
    var hojas = [];

    const getHojas = (elemento) => {
        if (elemento.children.length === 0) {
            hojas.push(elemento);
        } else {
            for (let i = 0; i < elemento.children.length; i++) {
                getHojas(elemento.children[i]);
            }
        }
    };

    getHojas(body);
    console.log("Hojas del DOM:");
    console.log(hojas);

};
