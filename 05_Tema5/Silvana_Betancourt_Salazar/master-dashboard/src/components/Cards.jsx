import React from "react";
import { Card } from "./Card";
import "../assets/css/cards.css";

const materias = [
  {
    codigo: "1",
    nombre: "Metodologías, Desarrollo y Calidad en la Ingeniería de Software",
    abreviatura: "MDCS",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "1",
  },
  {
    codigo: "2",
    nombre: "Dirección y Gestión de Proyectos de Software",
    abreviatura: "DGPS",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "1",
  },
  {
    codigo: "3",
    nombre: "Plataformas de Desarrollo de Software",
    abreviatura: "PDS",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "1",
  },
  ,
  {
    codigo: "4",
    nombre: "Desarrollo Web: Full Stack",
    abreviatura: "DQFS",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "1",
  },
  ,
  {
    codigo: "5",
    nombre: "Ciberseguridad Web",
    abreviatura: "CSW",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "1",
  },
  ,
  {
    codigo: "6",
    nombre:
      "Administración de Servidores, Virtualización, Cloud Computing y Devops",
    abreviatura: "ASVCD",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "2",
  },
  ,
  {
    codigo: "7",
    nombre: "Desarrollo Seguro de Software y Auditoría de la Ciberseguridad",
    abreviatura: "DSSAC",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "2",
  },
  ,
  {
    codigo: "8",
    nombre: "Prácticas en Empresa",
    abreviatura: "PE",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "2",
  },
  {
    codigo: "9",
    nombre: "Trabajo fin de Máster",
    abreviatura: "TFM",
    logo: require(`../assets/imagenes/logo.png`),
    codigoCuatrimestre: "2",
  },
];

export const Cards = () => {
  return (
    <div className="container">
      <div className="row">
        {materias.map(
          ({ codigo, nombre, abreviatura, logo, codigoCuatrimestre }) => (
            <div className="col-md-4" key={codigo}>
              <div className={codigoCuatrimestre === "1"? "color-border-verde":"color-border-azul"}>
                <Card
                  nombre={nombre}
                  abreviatura={abreviatura}
                  logo={logo}
                  codigoCuatrimestre={codigoCuatrimestre}
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};
