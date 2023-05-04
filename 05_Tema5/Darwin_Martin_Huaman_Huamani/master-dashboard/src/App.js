import logo from "./logo_unir.png";
import "./App.css";
import { Card } from "./components/Card";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo}/>        
          <h1>
            Máster Universitario en Ingeniería de Software y Sistemas
            Informáticos
          </h1>
      </header>      
      <div className="contenedor">
        <div>
          <Card 
            imagen="1"
            nombre="Ciberseguridad Web" 
            abreviatura="CSW" 
            PER="7660"
            cuatrimestre="1"
          ></Card>
        </div>
        <div>
          <Card
            imagen="2"
            nombre="Metodologías, Desarrollo y Calidad en la Ingeniería de Software"
            abreviatura="MDS"
            PER="7660"
            cuatrimestre="1"
          ></Card>
        </div>
        <div>
          <Card
            imagen="3"
            nombre="Dirección y Gestión de Proyectos de Software"
            abreviatura="DGP"
            PER="7660"
            cuatrimestre="1"
          ></Card>
        </div>
      </div>
      <div className="contenedor">
        <div>
          <Card
            imagen="4"
            nombre="Plataformas de Desarrollo de Software"
            abreviatura="PDS"
            PER="7660"
            cuatrimestre="1"
          ></Card>
        </div>
        <div>
          <Card
            imagen="5"
            nombre="Desarrollo Web: Full Stack"
            abreviatura="DWF"
            PER="7660"
            cuatrimestre="1"
          ></Card>
        </div>
      </div>
      <div className="contenedor">
        <div>
          <Card
            imagen="1"
            nombre="Administración de Sistemas, Virtualización, Cloud Computing y DevOps"
            abreviatura="ASV"
            PER="7660"
            cuatrimestre="2"
          ></Card>
        </div>
        <div>
          <Card
            imagen="2"
            nombre="Desarrollo Seguro de Software y Auditoría de la Ciberseguridad"
            abreviatura="DSSA"
            PER="7660"
          ></Card>
        </div>
        <div>
          <Card
            imagen="3"
            nombre="Prácticas en Empresa"
            abreviatura="PREM"
            PER="7660"
            cuatrimestre="2"
          ></Card>
        </div>
      </div>
      <div className="contenedor">
        <div>
          <Card
            imagen="4"
            nombre="Trabajo Fin de Máster"
            abreviatura="TFM"
            PER="7660"
            cuatrimestre="2"
          ></Card>
        </div>        
      </div>
    </div>
  );
}

export default App;
