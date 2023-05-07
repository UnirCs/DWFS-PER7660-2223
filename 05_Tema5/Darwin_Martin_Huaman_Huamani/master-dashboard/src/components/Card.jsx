import React from 'react';
import '../styles/card.css';
import img from '../imagenes/imagen';


export const Card = ({nombre, abreviatura, PER, cuatrimestre, imagen}) => {
  let estilo;
  cuatrimestre == 1 ? estilo="cardverde" : estilo="cardazul";

  let im;

  switch (imagen) {
    case "1":
      im = img.seguridad;
      break;
    case "2":
      im = img.plataformas;
      break;
    case "3":
      im = img.proyectos;
      break;
    case "4":
      im = img.desarrollo;
      break;
    case "5":
      im = img.tfm;
      break;
    default:
      console.log("No existe");
      break;
  }
  return (
    <div className={estilo}>
        <div>
          <img src={im}/>
        </div>
        <p>{nombre}</p>
        <p>{abreviatura}</p>
        <p>{PER}</p>
    </div>
  )
}
