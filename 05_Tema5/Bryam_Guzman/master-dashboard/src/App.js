import "./App.css";
import "./styles/card.css";
import { Card } from "./components/Card";

function App() {
  return (
    <div className="App">
      <div className="contenedor">
        <Card
          imagen="https://pygmalion.tech/wp-content/uploads/2020/06/Qu%C3%A9-es-full-stack-Pygmalion-Tech.png"
          nombre="Desarrollo Web Full Stack"
          abreviatura="DSFS"
          per="7660"
          tarjetaClassName="tarjeta-verde"
        ></Card>
        <Card
          imagen="https://www.areatecnologia.com/informatica/imagenes/que-es-ciberseguridad.jpg"
          nombre="Ciberseguridad Web"
          abreviatura="CBWB"
          per="7660"
          tarjetaClassName="tarjeta-verde"
        ></Card>
        <Card
          imagen="https://www.internetya.co/wp-content/uploads/2016/08/desarrollo-plataformas-web-en-colombia.jpg"
          nombre="Plataformas de Desarrollo "
          abreviatura="PDSOFT"
          per="7660"
          tarjetaClassName="tarjeta-verde"
        ></Card>

        <Card
          imagen="https://www.filepicker.io/api/file/wzfgdXfSSEaW8mekqmwa"
          nombre="Direccion de Proyectos"
          abreviatura="DPRO"
          per="7660"
          tarjetaClassName="tarjeta-verde"
        ></Card>
        <Card
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtFf9q8GjiRmwNsYuDUYWQAzrGl7Wul_9g6r7ge4uZVdroqN9RVj08mRjZrYA_zZfiOZk"
          nombre="Metodologías Desarrollo"
          abreviatura="METD"
          per="7660"
          tarjetaClassName="tarjeta-verde"
        ></Card>
         <Card
          imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVcGL51nfoyCPfk1SaiBQRTwB5MN9eSlbFrOm2xrguVEG5eBpuwGPdsosPOBuWDsvWjeM"
          nombre="Administración de Servidores"
          abreviatura="ADMSRV"
          per="7660"
          tarjetaClassName="tarjeta-azul"
        ></Card>
         <Card
          imagen="https://blog.hackmetrix.com/wp-content/uploads/2021/09/hackmetrix_desarrollo_seguro_demostrar-868x659.png"
          nombre="Desarrollo Seguro"
          abreviatura="DESSFT"
          per="7660"
          tarjetaClassName="tarjeta-azul"
        ></Card>
         <Card
          imagen="https://masterhistoriadelarte.usal.es/imagenes/tfm_imagen.png"
          nombre="Trabajo Fin Master"
          abreviatura="TRABMAS"
          per="7660"
          tarjetaClassName="tarjeta-azul"
        ></Card>
         <Card
          imagen="https://grupoinenka.com/wp-content/uploads/elementor/thumbs/practicas-en-empresas-okybxmlkottb2rck2u384edrt36ojywpyihdjky3yg.jpg"
          nombre="Prácticas Empresa"
          abreviatura="PRACEMP"
          per="7660"
          tarjetaClassName="tarjeta-azul"
        ></Card>
      </div>
    </div>
  );
}

export default App;
