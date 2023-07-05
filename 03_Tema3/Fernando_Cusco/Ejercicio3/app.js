
var head = document.head; // objeto head del DOM
console.log(head);

var logo = document.getElementById("logo");
console.log(logo);

var divs = document.getElementsByTagName("div");
console.log(divs);

var body = document.body; // contiene el objeto body del DOM
console.log(body);

const API_URL = "https://api.chucknorris.io/jokes/random";
document.addEventListener("DOMContentLoaded", () => {
    // buscamos el boton por id
    const boton = document.getElementById("btn-api");
    // evento click para el boton
    boton.addEventListener("click", (event) => {
        // evitamos que el formulario se reenvie
        event.preventDefault();
        boton.disabled = true;
        fetch(API_URL)
            .then(response => {
                if (!response.ok) throw new Error("No se pudo hacer la peticion");
                return response.json();
            })
            .then(data => {
                const chiste = new Chiste(data.value, data.url, data.updated_at, data.id, data.icon_url, data.created_at, data.categories);
                const element = document.getElementById("chiste");
                const fecha = document.getElementById("fecha");
                element.textContent = chiste.value;
                fecha.textContent = new Date(chiste.created_at).toLocaleDateString("es-ES");
            })
            .catch(error => console.error("Error: ", error)).finally(() => boton.disabled = false);
    });
});



async function sendRequest() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error al obtener los datos');
          }
          const data = await response.json();
          console.log(data);
    } catch(error) {

    }
}



class Chiste {
    constructor(value, url, updated_at, id, icon_url, created_at, categories) {
        this.value = value;
        this.url = url;
        this.updated_at = updated_at;
        this.id = id;
        this.icon_url = icon_url;
        this.created_at = created_at;
        this.categories = categories;
    }
}