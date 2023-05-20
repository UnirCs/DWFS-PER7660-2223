import {Card} from "./components/Card";

function App() {
    const subjects = [{
        name: "Ciberseguridad Web",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/6783/6783360.png",
        code: "PER 7660",
        acronym: "CW"
    }, {
        name: "Desarrollo Web: Full Stack",
        imageUrl: "https://icon-library.com/images/dev-icon/dev-icon-8.jpg",
        code: "PER 7660",
        acronym: "DW FS"
    }, {
        name: "Plataformas de Desarrollo de Software",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5741/5741483.png",
        code: "PER 7660",
        acronym: "PDS"
    }, {
        name: "Dirección y Gestión de Proyectos de Software",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1087/1087815.png",
        code: "PER 7660",
        acronym: "DGPS"
    }, {
        name: "Metodologías, Desarrollo y Calidad en la Ingeniería de Software",
        imageUrl: "https://cdn-icons-png.flaticon.com/512/1875/1875674.png",
        code: "PER 7660",
        acronym: "MDCIS"
    }]
    return (<div className={"card-content"}>
        {subjects.map(subject => <Card {...subject}/>)}
    </div>);
}

export default App;
