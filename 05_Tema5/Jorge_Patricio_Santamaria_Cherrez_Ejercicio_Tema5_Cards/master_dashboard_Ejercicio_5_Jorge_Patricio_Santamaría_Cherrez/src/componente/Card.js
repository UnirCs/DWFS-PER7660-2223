

import React from "react";
import logo1 from '../imagenes/1.jpg';


export const Card = ({  asignatura, abreviatura, estilos }) => {
  return (
    <div className={estilos}>
  
      <h2>{asignatura}</h2>
      <h2>{abreviatura}</h2>
      <img src={logo1} alt="img" className="logo"/>
    
    </div>
  );
};
export default Card;