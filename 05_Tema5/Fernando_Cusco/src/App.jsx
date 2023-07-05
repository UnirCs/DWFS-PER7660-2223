import './App.css'
import Card from './components/card/Card';

function App() {
  const materias = [
    new Materia("Metodologías, Desarrollo y Calidad en la Ingeniería de Software", "https://definicion.de/wp-content/uploads/2009/03/ingenieria-de-software.png", "AS", "PER 7660", true),
    new Materia("Dirección y Gestión de Proyectos de Software", "https://web-static.wrike.com/blog/content/uploads/2016/06/La-importancia-de-la-gestio-n-de-proyectos-preguntas-y-respuestas-con-Robert-Kelly.jpg?av=9cca9b92e52017d677996195ca78c04a", "DS", "PER 7660", true),
    new Materia("Plataformas de Desarrollo de Software", "https://www.tecnova.cl/wp-content/uploads/2019/12/tendencias2020-linkedin-2.jpg", "GPS", "PER 7660", false),
    new Materia("Desarrollo Web: Full Stack", "https://res.cloudinary.com/dmsxwwfb5/image/upload/v1595866967/full-stack-devlopment-min.png", "IR", "PER 7660", true),
    new Materia("Ciberseguridad Web", "https://www.extrasoft.es/wp-content/uploads/2020/05/4-Recursos-de-Ciberseguridad-1080x601.png", "MA", "PER 7660", false)
  ];
  return (
    <>
      <h1>Maestría Desarrollo de Software UNIR</h1>
      <div className='materias'>
        {materias.map((materia, index) => (
          <Card key={index} nombre={materia.nombre} img={materia.img} abre={materia.abre} per={materia.per} esPrimerCuatrimestre={materia.esPrimerCuatrimestre}  />
        ))}
      </div>
    </>
  )
}

class Materia {
  constructor(nombre, img, abre, per, esPrimerCuatrimestre) {
    this.nombre = nombre;
    this.img = img;
    this.abre = abre;
    this.per = per;
    this.esPrimerCuatrimestre = esPrimerCuatrimestre;
  }
}

export default App
