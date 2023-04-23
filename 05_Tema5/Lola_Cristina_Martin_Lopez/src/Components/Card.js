import React from "react";
import '../css/Card.css';

const Card =({nombre, imagen, abreviatura, PER, semestre}) =>
{
    <div className={`Card ${semestre == 2 ? 'blue-border' : ''}`}>
    <div className='CardImage'>
      <img src={ imagen } />
    </div>
    <div className='CardBody'>
      <p>{ nombre }</p>
      <p>{ abreviatura }</p>
      <p>{ PER }</p>
    </div>
  </div>
}

export default Card;