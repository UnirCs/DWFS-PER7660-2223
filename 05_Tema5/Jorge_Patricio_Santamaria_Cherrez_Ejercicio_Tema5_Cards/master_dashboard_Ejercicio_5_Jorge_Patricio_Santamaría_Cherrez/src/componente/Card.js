import React from 'react';
import logo1 from '../imagenes/1.jpg';
import logo2 from '../imagenes/2.jpg';
import logo3 from '../imagenes/3.jpg';
import logo4 from '../imagenes/4.png';
import logo5 from '../imagenes/5.jpg';
import logo6 from '../imagenes/6.png';
import logo7 from '../imagenes/7.jpg';
function Card() {
  return (
    <div>
    <div className='primercuatrimestre1'>
      <h2>Desarrollo Web Full Stack</h2>
      <p>DWFS</p>
      <img src={logo4}  alt='logo1' className="logo" />
    </div>
    <div className='primercuatrimestre2'>
      <h2>Dirección y Gestión de proyectos de Software</h2>
      <p>DGPS</p>
      <img src={logo5}  alt='logo2' className="logo" />
    </div> 
    <div className='primercuatrimestre3'>
      <h2>Plataformas de Desarrollo de Software</h2>
      <p>PDS</p>
      <img src={logo2}  alt='logo3' className="logo" />
    </div>
    <div className='primercuatrimestre4'>
      <h2>Ciberseguridad web</h2>
      <p>CW</p>
      <img src={logo3}  alt='logo4' className="logo" />
    </div>
    <div className='primercuatrimestre5'>
      <h2>Metodologías, Desarrollo y Calidad en la Ingeniería del Software</h2>
      <p>MDCIS</p>
      <img src={logo6}  alt='logo5' className="logo" />
    </div>
    <div className='segundocuatrimestre1'>
      <h2>Prácticas en Empresa</h2>
      <p>PE</p>
      <img src={logo1}  alt='logo6' className="logo" />
    </div>
    <div className='segundocuatrimestre2'>
      <h2>Trabajo Fin de Máster</h2>
      <p>TFM</p>
      <img src={logo7}  alt='logo7' className="logo" />
    </div>
    </div>
  );
}

export default Card;