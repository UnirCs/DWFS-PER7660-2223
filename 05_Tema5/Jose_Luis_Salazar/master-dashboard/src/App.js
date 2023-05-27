import "./App.css";
import Card from "./components/Card";

function App() {
  const asignaturas = [
    {
      "nombre": "Metodologías, Desarrollo y Calidad en la Ingeniería de Software",
      "imagen": "metodologias.jpg",
      "abreviatura": "MDCIS",
      "per": "PER 7760",
      "cuatrimestre": 1
    },
    {
      "nombre": "Dirección y Gestión de Proyectos de Software",
      "imagen": "dgps.jpg",
      "abreviatura": "DGPS",
      "per": "PER 7760",
      "cuatrimestre": 1
    },
    {
      "nombre": "Plataformas de Desarrollo de Software",
      "imagen": "plataformas.jpg",
      "abreviatura": "PDS",
      "per": "PER 7760",
      "cuatrimestre": 1
    },
    {
      "nombre": "Desarrollo Web: Full Stack",
      "imagen": "fullstack.jpg",
      "abreviatura": "DWFS",
      "per": "PER 7760",
      "cuatrimestre": 1
    },
    {
      "nombre": "Ciberseguridad Web",
      "imagen": "ciberseguridad.jpg",
      "abreviatura": "CW",
      "per": "PER 7760",
      "cuatrimestre": 1
    },
    {
      "nombre": "Administración de Servidores, Virtualización, Cloud Computing y Devops",
      "imagen": "administracion.jpg",
      "abreviatura": "ASVCD",
      "per": "PER 7660",
      "cuatrimestre": 2
    },
    {
      "nombre": "Desarrollo Seguro de Software y Auditoría de la Ciberseguridad",
      "imagen": "desarrolloseguro.jpg",
      "abreviatura": "DSSAC",
      "per": "PER 7660",
      "cuatrimestre": 2
    },
    {
      "nombre": "Prácticas en Empresa",
      "imagen": "practicas.jpg",
      "abreviatura": "PE",
      "per": "PER 7660",
      "cuatrimestre": 2
    },
    {
      "nombre": "Trabajo fin de Máster",
      "imagen": "trabajofin.jpg",
      "abreviatura": "TFM",
      "per": "PER 7660",
      "cuatrimestre": 2
    }
  ];

  return (
    <>
      <div className="app">
      {asignaturas.map((asignatura, index) => (
        <Card
          key={index}
          nombre={asignatura.nombre}
          imagen={asignatura.imagen}
          abreviatura={asignatura.abreviatura}
          per={asignatura.per}
          cuatrimestre={asignatura.cuatrimestre}
        />
      ))}
      </div>
    </>
  );
}

export default App;
