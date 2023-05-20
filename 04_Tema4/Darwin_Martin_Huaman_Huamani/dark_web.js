const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); 
    switchButton.classList.toggle('active');
});

window.onload = (event) => {
    const hojas = [];
    const buscarHojas = (element) => {
        if (!element.children.length) 
            return hojas.push(element);
        for (const child of element.children) 
            buscarHojas(child);
    };

    buscarHojas(document.body);
    console.log(hojas);
};