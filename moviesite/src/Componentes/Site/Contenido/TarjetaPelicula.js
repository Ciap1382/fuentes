import Button from 'react-bootstrap/Button';
function clicCompra(event) {
  alert("Enviar a carrito");
}
const TarjetaPelicula = (props) => {
  const pelicula = props.pelicula;
    return (
    <>
      <div id={pelicula.id} className='cardPelicula'>
        <img src={"https://image.tmdb.org/t/p/w500" + pelicula.poster_path} alt="titulo"/>;
        <div className="cardpelidescrip">
        <p>Titulo:{pelicula.title}</p>
        <p>Fecha:{pelicula.release_date}</p>
        <p>Descripcion:{pelicula.overview.substring(0, 25)}</p>
        <Button onClick={clicCompra} className="btn btn-success">Enviar a carrito</Button>
        <Button variant="primary">Info</Button>
        </div>
      </div>
    </>
  );
};
export default TarjetaPelicula;
/*
      <div id={pelicula.id} className={"cardpeli "}>
        <img src={"https://image.tmdb.org/t/p/w500" + pelicula.poster_path} alt="titulo"/>;
        <div className="cardpelidescrip">
        <p>Titulo:{pelicula.title}</p>
        <p>Fecha:{pelicula.release_date}</p>
        <p>Descripcion:{pelicula.overview.substring(0, 25)}<a href="#">{" "}...Ver mas<></></a></p>
        </div>
      </div>
*/