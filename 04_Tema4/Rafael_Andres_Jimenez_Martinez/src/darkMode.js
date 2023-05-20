
let darkMode =  false;

changeToDarkMode = () => {
    const jobs = Array.from(document.getElementsByClassName("job"));
    jobs.forEach(it => {
        it.classList.remove("job")
        it.classList.add("dark_job")
    });

    const separator = Array.from(document.getElementsByClassName("separator"));
    separator.forEach(it => {
        it.classList.remove("separator")
        it.classList.add("dark_separator") 
    });

    const contenedor = Array.from(document.getElementsByClassName("contenedor"));
    contenedor.forEach(it => {
        it.classList.remove("contenedor")
        it.classList.add("dark_contenedor") 
    });
     
    const parrafo = Array.from(document.getElementsByClassName("parrafo"));
    parrafo.forEach(it => {
        it.classList.remove("parrafo")
        it.classList.add("dark_parrafo") 
    });
    darkMode = true
    
    const circle = Array.from(document.getElementsByClassName("circle"));
    circle.forEach(it => {
        it.classList.remove("circle")
        it.classList.add("dark_circle") 
    });
    const title = Array.from(document.getElementsByClassName("title"));
    title.forEach(it => {
        it.classList.remove("title") 
        it.classList.add("dark_title") 
    });
    darkMode = true
    

}

changeToDefault = () => {
    const jobs = Array.from(document.getElementsByClassName("dark_job"));
    jobs.forEach(it => {
        it.classList.remove("dark_job")
        it.classList.add("job")
    });

    const separator = Array.from(document.getElementsByClassName("dark_separator"));
    separator.forEach(it => {
        it.classList.remove("dark_separator") 
        it.classList.add("separator") 
    });

    const contenedor = Array.from(document.getElementsByClassName("dark_contenedor"));
    contenedor.forEach(it => {
        it.classList.remove("dark_contenedor") 
        it.classList.add("contenedor") 
    });
     
    const parrafo = Array.from(document.getElementsByClassName("dark_parrafo"));
    parrafo.forEach(it => {
        it.classList.remove("dark_parrafo") 
        it.classList.add("parrafo") 
    });
    darkMode = true
    
    const circle = Array.from(document.getElementsByClassName("dark_circle"));
    circle.forEach(it => {
        it.classList.remove("dark_circle") 
        it.classList.add("circle") 
    });

    const title = Array.from(document.getElementsByClassName("dark_title"));
    title.forEach(it => {
        it.classList.remove("dark_title") 
        it.classList.add("title") 
    });
    darkMode = false
    
}

changeMode = () => {
    console.log("Cambiando el modo")
    if(darkMode) { changeToDefault()}
    else changeToDarkMode()

}
const imprimirHijos = (element) => {
    if (element && element.nodeType === Node.ELEMENT_NODE) {
      Array.from(element.children).forEach(child => { 
        console.log(child);        
      });
    }
  };
  
  const iterarSobreHijos = (element) => {
    Array.from(element.children).forEach(child => {
      console.log(child);
      imprimirHijos(child);
    });
  };
  
  window.addEventListener("load", () => {
    const contenedor = document.getElementById("contenedor");
    if (contenedor) {
      iterarSobreHijos(contenedor);
    }
  });