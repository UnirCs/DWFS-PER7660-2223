import React from "react";
import "./card.css";
const Card = ({ nombre, img, abre, per, esPrimerCuatrimestre }) => {
    const style = (esPrimerCuatrimestre) ? 'card border-verde': 'card border-azul';
    return (
        <div className={style}>
            <img src={img} alt="" />
            <p className="name" >{nombre}</p>
            <p className="abre" >{abre}</p>
            <p className="per" >{per}</p>
        </div>

    );

};
export default Card;