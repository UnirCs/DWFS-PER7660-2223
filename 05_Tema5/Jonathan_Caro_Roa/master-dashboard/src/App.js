import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Card
        nombre="Metodologías, Desarrollo y Calidad en la Ingeniería de Software"
        imagen="image.png"
        abreviatura="MDC"
        PER="7660"
        cuatrimestre="1"
      />
      <Card
        nombre="Dirección y Gestión de Proyectos de Software"
        imagen="image.png"
        abreviatura="DGP"
        PER="7660"
        cuatrimestre="1"
      />
      <Card
        nombre="Plataformas de Desarrollo de Software"
        imagen="image.png"
        abreviatura="PDS"
        PER="7660"
        cuatrimestre="1"
      />
      <Card
        nombre="Desarrollo Web: Full Stack"
        imagen="image.png"
        abreviatura="DFS"
        PER="7660"
        cuatrimestre="1"
      />
      <Card
        nombre="Ciberseguridad Web"
        imagen="image.png"
        abreviatura="CSW"
        PER="7660"
        cuatrimestre="1"
      />
      <Card
        nombre="Administración de Servidores, Virtualización, Cloud Computing y Devops"
        imagen="image.png"
        abreviatura="AVC"
        PER="7660"
        cuatrimestre="2"
      />
      <Card
        nombre="Desarrollo Seguro de Software y Auditoría de la Ciberseguridad"
        imagen="image.png"
        abreviatura="DSA"
        PER="7660"
        cuatrimestre="2"
      />
      <Card
        nombre="Prácticas en Empresa"
        imagen="image.png"
        abreviatura="PEM"
        PER="7660"
        cuatrimestre="2"
      />
      <Card
        nombre="Trabajo fin de Máster"
        imagen="image.png"
        abreviatura="TFM"
        PER="7660"
        cuatrimestre="2"
      />
    </div>
  );
}

export default App;
