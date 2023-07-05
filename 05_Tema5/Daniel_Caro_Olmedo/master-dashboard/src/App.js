import logo from './logo.svg';
import './App.css';
import {Card} from './Card';
import img1 from './1.JPG';
import img2 from './2.JPG';
import img3 from './3.JPG';
import img4 from './4.JPG';
import img5 from './5.JPG';
import img6 from './6.JPG';
import img7 from './7.JPG';
import img8 from './8.JPG';
import img9 from './9.JPG';


function App() {
  return (
    <div className="App">
      <Card name="Metodologías, Desarrollo y Calidad en la Ingeniería de Software" img={img1} abbr="MDCIS" PER="7660"></Card>
      <Card name="Dirección y Gestión de Proyectos de Software" img={img2} abbr="DGPS" PER="7660"></Card>
      <Card name="Desarrollo Web: Full Stack" img={img3} abbr="DWFS" PER="7660"></Card>
      <Card name="Plataformas de Desarrollo de Software" img={img4} abbr="PDS" PER="7660"></Card>
      <Card name="Ciberseguridad Web" img={img5} abbr="CW" PER="7660"></Card>
      <Card name="Administración de Servidores, Virtualización, Cloud Computing y Devops" img={img6} abbr="ASVCCD" PER="7660"></Card>
      <Card name="Desarrollo Seguro de Software y Auditoría de la Ciberseguridad" img={img7} abbr="DSSAC" PER="7660"></Card>
      <Card name="Prácticas en Empresa" img={img8} abbr="PE" PER="7660"></Card>
      <Card name="Trabajo fin de Máster" img={img9} abbr="TFM" PER="7660"></Card>
    </div>
  );
};

export default App;
