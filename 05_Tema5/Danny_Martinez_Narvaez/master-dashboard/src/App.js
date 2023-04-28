import Card from './components/Card';
import { Materias } from './model/Materias';
import './styles/App.css';

const materias = [];
materias.push(new Materias(1, 'Ciberseguridad Web', 'CBW', 'ciberseguridad.png', '7660',1))
materias.push(new Materias(2, 'Desarrollo Web: Full Stack', 'DSWF', 'web.png', '7660',1))
materias.push(new Materias(3, 'Plataformas de Desarrollo de Software', 'PDS', 'plataformas.png', '7660',1))
materias.push(new Materias(4, 'Dirección y Gestión de Proyectos de Software', 'DGPS', 'proyectos.jfif', '7660',1))
materias.push(new Materias(5, 'Metodologías, Desarrollo y Calidad en la Ingeniería de Software', 'MDCIS', 'metodologia.png', '7660',1))
materias.push(new Materias(6, 'Dirección y Gestión cuatrimestre DOS', 'DGPS', 'proyectos.jfif', '7660',2))
materias.push(new Materias(7, 'Metodologías, Desarrollo cuatrimestre DOS', 'MDCIS', 'metodologia.png', '7660',2))

function App() {
  return (
    <div className="App">
      <header className="contenedor">
        {materias.map(mat =>
          <Card nombre={mat.nombre}
            abreviatura={mat.abreviatura}
            imagen={mat.imagen}
            PER={mat.per}
            cuatrimestre={mat.cuatrimestre}
            key={mat.id}></Card>
        )
        }

      </header>
    </div>
  );
}

export default App;
