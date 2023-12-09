import Banner1 from "./Benner1";
import Cartelera from "./Cartelera";
const Contenido =() => {
  const banners = [{ id: 1, nombre: "banner1", cls: "bannerimg1" }];
  return (
    <>
      <div id="contenido">
          <Cartelera />
        {
          /*
                banners.map(item=>{
                    return (<Banner1 item={item}/>)
                })
                */
        }
      </div></>);
};
export default Contenido;