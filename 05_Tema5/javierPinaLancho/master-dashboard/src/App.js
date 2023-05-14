import { Card } from "./Components/Card";

function App() {
  return (
    <table>
      <tr>
        <th>
          <Card
            nameCourse="Metodologías, Desarrollo y Calidad en la Ingeniería de Software"
            imageCourse="Metodologia"
            shortName="Metodologías, Desarrollo y Calidad"
            per="PER 7660"
            quad="1"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse="Dirección y Gestión de Proyectos de Software"
            imageCourse="DireccionGestion"
            shortName="Dirección y Gestión de Proyectos"
            per="PER 7660"
            quad="1"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse=" Plataformas de Desarrollo de Software"
            imageCourse="Plataformas"
            shortName="Plataformas"
            per="PER 7660"
            quad="1"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse=" Desarrollo Web: Full Stack"
            imageCourse="DessarrolloFullStack"
            shortName="Full Stack"
            per="PER 7660"
            quad="1"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse="Ciberseguridad Web"
            imageCourse="Ciberseguridad"
            shortName="Ciberseguridad"
            per="PER 7660"
            quad="1"
          ></Card>
        </th>
      </tr>
      <tr>
        <th>
          <Card
            nameCourse="Administración de Servidores, Virtualización, Cloud Computing y Devops "
            imageCourse="AdministracionServidores"
            shortName="Administración de Servidores"
            per="PER 7660"
            quad="2"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse=" Desarrollo Seguro de Software y Auditoría de la Ciberseguridad"
            imageCourse="Desarrolloseguro"
            shortName="Desarrollo y Auditoría"
            per="PER 7660"
            quad="2"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse="Prácticas en Empresa"
            imageCourse="Practicas"
            shortName="Prácticas"
            per="PER 7660"
            quad="2"
          ></Card>
        </th>
        <th>
          <Card
            nameCourse=" Trabajo fin de Máster"
            imageCourse="TrabajoFM"
            shortName="TFM"
            per="PER 7660"
            quad="2"
          ></Card>
        </th>
      </tr>
    </table>
  );
}

export default App;
