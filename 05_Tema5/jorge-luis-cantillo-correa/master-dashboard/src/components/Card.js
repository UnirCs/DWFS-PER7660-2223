import React from "react";
import '../css/Card.css';
import LogoUnir from '../image/Unir_2021_logo.svg'

function Card(props) {

  let cardClassName = "card";

  if (props.cuatrimestre === 1) {
    cardClassName += " green";
  } else {
    cardClassName += " blue";
  }

  return (
    <div className={cardClassName}>
      <img src={LogoUnir} alt={props.abreviatura}/>
      <h4>{props.nombre}</h4>
      <h5>{props.abreviatura}</h5>
      <p>{props.per}</p>
    </div>
  );
}

export default Card;