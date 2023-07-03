import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App() {
  const asignaturas = [
    {
      nombre: "Metodologías, Desarrollo y Calidad en la Ingeniería de Software",
      imagen: "https://media.licdn.com/dms/image/D4D12AQEUDAaNUdFgow/article-cover_image-shrink_720_1280/0/1661456645549?e=2147483647&v=beta&t=ua0G2D5ZzqogKgSt3_horF3XLwmgTdw17cfFHt3NxFI",
      abreviatura: "AS",
      per: "PER 7660",
      esCuatrimestre: false
    },
    {
      nombre: "Dirección y Gestión de Proyectos de Software",
      imagen: "https://www.atuservicio.net/wp-content/uploads/gestion-de-proyectos-1.png",
      abreviatura: "DS",
      per: "PER 7660",
      esCuatrimestre: true
    },
    {
      nombre: "Plataformas de Desarrollo de Software",
      imagen: "https://cerberustecnologia.com.co/wp-content/uploads/2017/07/development.png",
      abreviatura: "GPS",
      per: "PER 7660",
      esCuatrimestre: false
    },
    {
      nombre: "Desarrollo Web: Full Stack",
      imagen: "https://pygmalion.tech/wp-content/uploads/2020/06/Qu%C3%A9-es-fullstack-Pygmalion-Tech-2.png",
      abreviatura: "IR",
      per: "PER 7660",
      esCuatrimestre: true
    },
    {
      nombre: "Ciberseguridad Web",
      imagen: "https://www.imagar.com/wp-content/uploads/2020/05/ciberseguridad.jpg",
      abreviatura: "PER",
      per: "PER 7660",
      esCuatrimestre: true
    },

  ];

  return (
    <>
      <div className='principal'>
        <h1>Máster Universitario en Ingeniería de Software y Sistemas Informáticos</h1>
        {asignaturas.map((asignatura, index) => (
          <Card key={index} nombre={asignatura.nombre} imagen={asignatura.imagen} abreviatura={asignatura.abreviatura} per={asignatura.per} esCuatrimestre={asignatura.esCuatrimestre} />
        ))
        }
      </div>
    </>
  )
}

export default App
