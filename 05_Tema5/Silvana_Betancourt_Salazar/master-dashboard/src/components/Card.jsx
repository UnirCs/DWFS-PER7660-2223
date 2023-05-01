import React from "react";
import '../assets/css/cards.css';

export const Card = ({nombre, abreviatura, logo, codigoCuatrimestre }) => {
  return (
    <div className="card text-center card-margin">
      <div className="ard-alto-logo">
        <img src={logo}/>
      </div>
      <div className="card-alto-desc">
        <h4>{nombre}</h4>
        <p>
          {abreviatura}
        </p>
      </div>
    </div>
  );
};
