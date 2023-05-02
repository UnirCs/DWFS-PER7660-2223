import datos from './components/datos.json';
import { CardApp } from './components/CardApp';
function App() {
  const info = datos;
  return (
    <div className='container'>
      <div className='row p-4'>
        {info.map(item => (
          <div className='col-md-6 mt-3'>
            <CardApp atributos={item} ></CardApp>
          </div>
        ))
        }
      </div>
    </div>
  );
}

export default App;
