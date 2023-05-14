import "./App.css";
import "./styles/style.css";

import MyCards from "./components/MyCards";

function App() {
  const customCards = [
    {
      image: "src/assets/DSFS.svg",
      name: "Desarrollo Web Full Stack",
      abbreviation: "DSFS",
      period: "7660",
    },
    {
      image: "src/assets/CBWB.svg",
      name: "Ciberseguridad Web",
      abbreviation: "CBWB",
      period: "7660",
    },
    {
      image: "src/assets/PDSOFT.svg",
      name: "Plataformas de Desarrollo",
      abbreviation: "PDSOFT",
      period: "7660",
    },
    {
      image: "src/assets/DPRO.svg",
      name: "Direccion de Proyectos",
      abbreviation: "DPRO",
      period: "7660",
    },
    {
      image: "src/assets/METD.svg",
      name: "Metodologías Desarrollo",
      abbreviation: "METD",
      period: "7660",
    },
    {
      image: "src/assets/ADMSRV.svg",
      name: "Administración de Servidores",
      abbreviation: "ADMSRV",
      period: "7660",
    },
    {
      image: "src/assets/DESSFT.svg",
      name: "Desarrollo Seguro",
      abbreviation: "DESSFT",
      period: "7660",
    },
    {
      image: "src/assets/TRABMAS.svg",
      name: "Trabajo Fin Master",
      abbreviation: "TRABMAS",
      period: "7680",
    },
    {
      image: "src/assets/PRACEMP.svg",
      name: "Prácticas Empresa",
      abbreviation: "PRACEMP",
      period: "7680",
    },
  ];

  return (
    <div className="container">
      <MyCards customCards={customCards} />
    </div>
  );
}

export default App;
