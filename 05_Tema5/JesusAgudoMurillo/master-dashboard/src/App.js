const { default: Card } = require("./components/Card");

function App() {
  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>The subjects of the Master</h2>
        <div className='mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <Card
            name="Metodologías, Desarrollo y Calidad en la Ingeniería de Software"
            image="https://picsum.photos/300/200"
            abbreviation="MDC"
            per="7660"
            fourmonthper="1"
          />

          <Card
            name="Dirección y Gestión de Proyectos de Software"
            image="https://picsum.photos/300/200"
            abbreviation="DGP"
            per="7660"
            fourmonthper="1"
          />

          <Card
            name="Plataformas de Desarrollo de Software"
            image="https://picsum.photos/300/200"
            abbreviation="PDS"
            per="7660"
            fourmonthper="1"
          />

          <Card
            name="Desarrollo Web: Full Stack"
            image="https://picsum.photos/300/200"
            abbreviation="DFS"
            per="7660"
            fourmonthper="1"
          />

          <Card
            name="Ciberseguridad Web"
            image="https://picsum.photos/300/200"
            abbreviation="CSW"
            per="7660"
            fourmonthper="1"
          />

          <Card
            name="Administración de Servidores, Virtualización, Cloud Computing y Devops"
            image="https://picsum.photos/300/200"
            abbreviation="AVC"
            per="7660"
            fourmonthper="2"
          />

          <Card
            name="Desarrollo Seguro de Software y Auditoría de la Ciberseguridad"
            image="https://picsum.photos/300/200"
            abbreviation="DSA"
            per="7660"
            fourmonthper="2"
          />

          <Card
            name="Prácticas en Empresa"
            image="https://picsum.photos/300/200"
            abbreviation="PEM"
            per="7660"
            fourmonthper="2"
          />

          <Card
            name="Trabajo Fin de Máster"
            image="https://picsum.photos/300/200"
            abbreviation="TFM"
            per="7660"
            fourmonthper="2"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
