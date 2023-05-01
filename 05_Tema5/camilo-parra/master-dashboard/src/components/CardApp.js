import React from 'react'
import { Card } from 'react-bootstrap';


export const CardApp = (props) => {
    const cambiarColor = (cuatrimestre) => {
        if (cuatrimestre == 1) {
            return 'success'
        } else if (cuatrimestre == 2) {
            return 'primary'
        }
    }
    const estadoMateria = (nota) => {
        if (nota <= 5) {
            return  'Reprobada'  
        } else if (nota >= 6 && nota <=10) {
            return 'Aprobada'
        } else if (nota > 10) {
            return 'No valida'
        }
    }

    return (

        <div>
            <Card border={cambiarColor(props.atributos.cuatrimestre)} style={{borderWidth: '8px'}}>
                <Card.Img src={props.atributos.imagen} />
                <Card.Body>
                    <Card.Title>{props.atributos.nombre}</Card.Title>
                    <Card.Text>  <b> Abreviación:</b> {props.atributos.abreviatura} <br /> <b>Per: </b> {props.atributos.per}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted"> <b>Estado: </b> {estadoMateria(props.atributos.nota)} con una nota de: {props.atributos.nota}</small>
                </Card.Footer>
            </Card>
        </div>
    )
}
