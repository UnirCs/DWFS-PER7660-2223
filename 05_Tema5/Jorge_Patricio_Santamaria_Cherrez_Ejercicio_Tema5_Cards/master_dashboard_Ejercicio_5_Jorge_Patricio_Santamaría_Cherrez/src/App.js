import React from 'react';
import Card from './componente/Card';
import './estilos.css';


function App() {
  return (
    <div>
      <h1 className='título'>Máster de Ingeniería de Software y Sistemas Informáticos</h1>
      <Card
      
          asignatura="Desarrollo Web Full Stack"
          abreviatura="DWFS"
       
          estilos="primercuatrimestre1"
         
        >

        </Card>

          <Card
        
          asignatura="Dirección y Gestión de proyectos"
          abreviatura="DGP"
          estilos="primercuatrimestre2"
        >
        </Card>

          <Card
        
          asignatura="Ciberseguridad Web"
          abreviatura="CW"
       
          estilos="primercuatrimestre3"
         
        >

        </Card>

          <Card
         
         asignatura="Metodologías, Desarrollo y Calidad en la Ingenieía del Software"
          abreviatura="MDCIS"

          estilos="primercuatrimestre4"
    
        >
          
        </Card>
          <Card
         
         asignatura="Plataformas de Desarrollo de Software"
          abreviatura="PDS"
       
         estilos="primercuatrimestre5"
        >

        </Card>
          
    
          <Card
         
          asignatura="Prácticas en Empresa"
          abreviatura="PE"
       
          estilos="segundocuatrimestre1"
        >

        </Card>

          <Card
       
          asignatura="Trabajo Fin de Máster"
          abreviatura="TFM"
       
          estilos="segundocuatrimestre2"
        >

        </Card>
    </div>
  );
}

export default App;
