import React from "react";

export const Card = ({ nombre, imagen, abreviatura, PER, cuatrimestre }) => {
  return (
    <div className={`inicial ${cuatrimestre == 1 ? "bordeverde" : "bordeazul"}`}>
      <div className="imagen">
        <img src={imagen} alt="Imagen aqui"/>
      </div>
      <div className="CardBody">
        <p>{nombre}</p>
        <p>{abreviatura}</p>
        <p>{PER}</p>
      </div>
    </div>
  );
};
