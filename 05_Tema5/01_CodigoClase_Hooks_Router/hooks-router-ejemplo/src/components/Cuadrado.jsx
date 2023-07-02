import React from "react";
import { useLocation, useParams } from "react-router-dom";

export const Cuadrado = () => {
  const location = useLocation();
  console.log(location);
  const { id } = useParams();
  
  return <div className="cuadrado">Cuadrado {id}</div>;
};
