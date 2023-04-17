window.onload = (event) => {
    // 1
    document.querySelector("#themeSelector").addEventListener("click", (event) => document.body.classList.toggle("dark-mode"));

    // 2
    const hojas = [];
    const buscarHojas = (element) => {
        if (!element.children.length) return hojas.push(element);
        for (const child of element.children) buscarHojas(child);
    };

    buscarHojas(document.body);
    console.log(hojas);
};
