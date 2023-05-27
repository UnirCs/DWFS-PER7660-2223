import React, {useEffect} from 'react';

export const Card = ({name, img, abbr, PER}) => {

    
    useEffect(() => {    
        if(abbr == "ASVCCD" || abbr == "DSSAC" || abbr == "PE" || abbr == "TFM") {
            document.getElementById(abbr).classList.add("secondTerm")
        }
    });

    return(
        <div class="card" id={abbr}>
            <img src={img}/>
            <p>{name}</p>
            <p>{abbr}</p>
            <p>{PER}</p>
        </div>
    )
};