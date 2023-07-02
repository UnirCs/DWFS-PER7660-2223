import React from "react";
import "../styles/Card.css";
const images = require.context("../images/", true);

const Card = ({ nombre, imagen, abreviatura, per, cuatrimestre }) => {
  const classBorder = cuatrimestre === 1 ? "blue" : "green";

  return (
    <div className={`card ${classBorder}`}>
      <h2>{nombre}</h2>
      <img
        className="imgCard"
        src={images(`./${imagen}`)}
        alt={`No img ${imagen}`}
      ></img>

      <p className="text">{abreviatura}</p>
      <p className="per">{per}</p>
    </div>
  );
};

export default Card;
