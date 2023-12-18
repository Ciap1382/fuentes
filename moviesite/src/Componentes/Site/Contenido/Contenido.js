import Cartelera from "./Cartelera";
import Ofertas from "./Ofertas";
const Contenido =() => {
  return (
    <>
      <div id="contenido">
          <Cartelera />
      </div>
      <div id="ofertas">
          <Ofertas />
        {
          /*
                banners.map(item=>{
                    return (<Banner1 item={item}/>)
                })
                */
        }
      </div>
    </>);
};
export default Contenido;