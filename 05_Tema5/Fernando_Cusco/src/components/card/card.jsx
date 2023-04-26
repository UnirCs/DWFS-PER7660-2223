import React from "react";
import "./card.css";
const Card = ({ nombre, img, abre, per, esPrimerCuatrimestre }) => {
    const style = (esPrimerCuatrimestre) ? {border: '2px solid green'} : {border: '2px solid blue'};
    return (
        <div className="card" style={style}>
            <img src={img} alt="" />
            <p className="name" >{nombre}</p>
            <p className="abre" >{abre}</p>
            <p className="per" >{per}</p>
        </div>

    );

};
export default Card;