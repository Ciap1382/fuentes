import Cardpelicula from "../../../../../Users/ciap0/OneDrive/CURSOS/UNISITE/ProgramadorWeb/session21REACT/src/Componentes/Contenido/CardPelicula"
const Estrenos=()=>{
    const datos=[{titulo:'RAMBO I',precio:6542.25}]
    return(
    <div id="estrenos">
        <Cardpelicula datos={datos}/>
        <Cardpelicula datos={datos}/>
    </div>)
    }
export default Estrenos