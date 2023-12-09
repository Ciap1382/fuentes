import Cardpelicula from "./CardPelicula"
const Estrenos=()=>{
    const datos=[{titulo:'RAMBO I',precio:6542.25}]
    return(
    <div id="estrenos">
        <Cardpelicula datos={datos}/>
        <Cardpelicula datos={datos}/>
    </div>)
    }
export default Estrenos