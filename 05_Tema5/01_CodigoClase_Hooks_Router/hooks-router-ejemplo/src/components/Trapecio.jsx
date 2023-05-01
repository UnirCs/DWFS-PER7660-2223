import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { GeoContext } from './GeoContext';

export const Trapecio = () => {
  const [clicks, setClicks] = useState(0);
  const {globalClicks, updateClicks} = useContext(GeoContext);

  console.log("Renderizando trapecio...")

  return (
    <div className='trapecio'>Trapecio
    <button onClick={() => setClicks(clicks + 1) }>{clicks}</button>
    <button onClick={() => updateClicks() }>{globalClicks}</button>

    </div>
  )
}
