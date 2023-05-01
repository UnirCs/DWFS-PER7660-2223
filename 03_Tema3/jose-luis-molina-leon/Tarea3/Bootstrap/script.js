class Script {
    constructor() {
      const miBoton = document.getElementById('boton');
  
      miBoton.addEventListener('click', () => this.getchiste());
      miBoton.addEventListener('mousedown', () => {
        miBoton.classList.add('grande');
      });
      miBoton.addEventListener('mouseup', () => {
        miBoton.classList.remove('grande');
      });
    }
  
    async getchiste() {
      const response = await fetch('https://api.chucknorris.io/jokes/random');
      const data = await response.json();
      const miElemento = document.querySelector('.card-body');
      miElemento.style.backgroundColor = '#1bce51';
      document.getElementById('chiste').innerHTML = data.value;
    }
  }
  
  export default Script;