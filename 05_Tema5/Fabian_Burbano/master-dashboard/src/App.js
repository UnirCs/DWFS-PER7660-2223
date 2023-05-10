import "./App.css";
import "./styles/card.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App container">
        <Card nombre="Desarrollo Web: Full Stack" imagen="imagen.png"
          abreviatura="DFS" PER="7660"
          cuatrimestre="1"/>
        <Card nombre="Plataformas de Desarrollo de Software" imagen="imagen.png"
          abreviatura="PDS" PER="7660"
          cuatrimestre="1" />
        <Card nombre="Metodologías, Desarrollo y Calidad en la Ingeniería de Software" imagen="imagen.png"
          abreviatura="MDC" PER="7660"
          cuatrimestre="1" />
        <Card nombre="Ciberseguridad Web" imagen="imagen.png"
          abreviatura="CSW" PER="7660"
          cuatrimestre="1" />
        <Card nombre="Dirección y Gestión de Proyectos de Software" imagen="imagen.png"
          abreviatura="DGP" PER="7660"
          cuatrimestre="1" />
        <Card nombre="Administración de Servidores, Virtualización, Cloud Computing y Devops" imagen="imagen.png"
          abreviatura="AVC" PER="7660"
          cuatrimestre="2" />
        <Card nombre="Desarrollo Seguro de Software y Auditoría de la Ciberseguridad" imagen="imagen.png"
          abreviatura="DSA" PER="7660"
          cuatrimestre="2" />
        <Card nombre="Prácticas en Empresa" imagen="imagen.png"
          abreviatura="PEM" PER="7660"
          cuatrimestre="2" />
        <Card nombre="Trabajo fin de Máster" imagen="imagen.png"
          abreviatura="TFM" PER="7660"
          cuatrimestre="2" />
    </div>
  );
}

export default App;
