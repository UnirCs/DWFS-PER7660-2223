import logo from "./logo.svg";
import "./App.css";
import "./styles/Card.css";
import { Card } from "./component/Card";

function App() {
  return (
    <div className="App">
      <Card name="Desarrollo Web Full Stack" code={"DWFS"} number={7760} qua="1"></Card>
      <Card qua="1" name="Metodologías, Desarrollo y Calidad en la Ingeniería de Software" code={"MDCI"} number={7760}></Card>
      <Card qua="1" name="Plataformas de Desarrollo de Software" code={"PDSO"} number={7760}></Card>
      <Card qua="1" name="Ciberseguridad Web" code={"CIWE"} number={7760}></Card>
      <Card qua="1" name="Direccion y gestión de proyectos de software" code={"DGPS"} number={7760}></Card>
      <Card name="Administración de Sistemas, Virtualización, Cloud Computing y DevOps" code={"AVCD"} number={7760}></Card>
      <Card name="Desarrollo Seguro de Software y Auditoría de la Ciberseguridad" code={"DSAC"} number={7760}></Card>
      <Card name="Prácticas en Empresa" code={"PREM"} number={7760}></Card>
      <Card name="Trabajo Fin de Máster" code={"TRFM"} number={7760}></Card>
    </div>
  );
}

export default App;
