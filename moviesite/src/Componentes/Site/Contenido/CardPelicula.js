import Button from '@mui/material/Button';
import IconoFavoritos from '@mui/icons-material/Favorite';
import IconoInicio from '@mui/icons-material/HomeSharp';
const Cardpelicula=(props)=>{
  const dato=props.datos[0]
    return(
          <div className="cardPelicula">
            <div className="cardtitle">
            {dato.titulo}
            </div>
            <div className="cardbody">
              MAGEN
            </div>
            <div className="cardPrecios">
              <button >
                <IconoFavoritos/> 
                {dato.precio}
              </button>
              <button className="btn btn-success">
                test
              </button>
              <Button className="btn btn-success">
                <IconoInicio/>
                test
              </Button>
            </div>
          </div>
          )
    }
    export default Cardpelicula