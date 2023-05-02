import './App.css';
import Card from './Components/Card';

function App() {
  const cards = [

    {
        id: 1,
        nombre: 'PLATAFORMAS DE DESARROLLO DE SOFTWARE',
        abreviatura: 'PDS',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg',
        semestre: 1      
    },
    {
        id: 2,
        nombre: 'DESARROLLO WEB: FULL STACK',
        abreviatura: 'DWFS',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg', 
        semestre: 1    
    },
    {
        id: 3,
        nombre: 'CIBERSEGURIDAD WEB',
        abreviatura: 'CW',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg', 
        semestre: 1     
    },
    {
        id: 4,
        nombre: 'METODOLOGÍAS, DESARROLLO Y CALIDAD EN LA INGENIERÍA DE SOFTWARE',
        abreviatura: 'MDCIS',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg',
        semestre: 1      
    },
    {
        id: 5,
        nombre: 'DIRECCIÓN Y GESTIÓN DE PROYECTOS DE SOFTWARE',
        abreviatura: 'DGPS',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg',
        semestre: 1      
    },
    {
        id: 6,
        nombre: 'DESARROLLO SEGURO DE SOFTWARE Y AUDITORÍA DE LA CIBERSEGURIDAD',
        abreviatura: 'DSSAC',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg',
        semestre: 2        
    },
    {
        id: 7,
        nombre: 'ADMINISTRACIÓN DE SISTEMAS WEB, VIRTUALIZACIÓN, CLOUD COMPUTING Y DEVOPS',
        abreviatura: 'ASW',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg',
        semestre: 2      
    },
    {
        id: 8,
        nombre: 'PRÁCTICAS EN EMPRESA',
        abreviatura: 'PE',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg', 
        semestre: 2     
    },
    {
        id: 9,
        nombre: 'TRABAJO FIN DE MÁSTER',
        abreviatura: 'TFM',
        per: '7660',
        imagen: 'https://www.unir.net/wp-content/uploads/2019/11/Unir_2021_logo.svg', 
        semestre: 2     
    }
  ];
  return (
    <div className="App"> 
      {cards.map(card => (          
        <Card key={card.id} nombre={card.nombre} abreviatura={card.abreviatura} per={card.per} imagen={card.imagen} semestre={card.semestre}></Card>
      ))}
    </div>
  );
}

export default App;