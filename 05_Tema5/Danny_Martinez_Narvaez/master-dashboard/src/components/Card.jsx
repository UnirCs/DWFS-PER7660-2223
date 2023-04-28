import React from 'react'
import '../styles/card.css'

const Card = (props) => {
    const {nombre, abreviatura, imagen, PER, cuatrimestre} = props;
    
    return (
        <div className={cuatrimestre==2 ? "card bordeDos" : "card borde"}>
            <img src={ require(`../img/${imagen}`)} alt={imagen}  className='imagenCard'></img>
            <p className='parrafo'>{nombre}</p>
            <p className='parrafo'>{abreviatura}</p>            
            <p className='parrafo'>{PER}</p>
        </div>
    )
}

export default Card
