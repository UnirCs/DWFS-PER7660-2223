import React from "react";

export const Card = ({ imagen, nombre, abreviatura, per, tarjetaClassName }) => {
  return (
    <div className={tarjetaClassName}>
      <img src={imagen} alt="img"/>
      <h1>{nombre}</h1>
      <h1>{abreviatura}</h1>
      <h2>{per}</h2>
    </div>
  );
};
