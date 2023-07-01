import React from 'react';
import "../styles/Card.css";
const Card = ({ nombre, abreviatura, per, imagen, semestre }) => {
  
    return (
      <div className={`Card ${semestre == 2 ? 'blue' : 'green'}`}>
        <img src={imagen} alt={nombre} style={{ width: '10%' }} />
        <h3>{nombre}</h3>
        <p>Abreviatura: {abreviatura}</p>
        <p>PER: {per}</p>
      </div>
    );
  };

  export default Card;