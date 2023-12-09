import SelGeneros from "./SelGeneros";
const Encabezado=()=>{
    return(
    <>
        <div id="encabezado" className="colorbase">
            <div id="logotipo">logotipo</div>
            <div id="generos"><SelGeneros/></div>
            <div id="registro">registro</div>
        </div>
    </>
    );
    };
export default Encabezado;