import React from 'react';
import './card.css';

export const Card = ({ nombre, imagen, abreviatura, per, esCuatrimestre }) => {
    const estilo = (esCuatrimestre == true ? 'border-green' : 'border-blue');

    return <>
        <div className={estilo} id='estilo'>
            <p>{nombre}</p>
            <div className='img'><img src={imagen} alt="" /></div>
            <p>{abreviatura}</p>
            <p>{per}</p>
            <p>{esCuatrimestre}</p>
        </div>
    </>
};