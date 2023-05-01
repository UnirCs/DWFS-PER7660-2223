import React from 'react'

export const Card = (props) => {
    return (<div className={"card"}>
            <img src={props.imageUrl} alt={props.code}/>
            <h4>{props.name}</h4>
            <h5>{props.acronym}</h5>
            <p>{props.code}</p>
        </div>)
}
