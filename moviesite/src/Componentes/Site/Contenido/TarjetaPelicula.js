const TarjetaPelicula = (props) => {
  var generos ="";
  props.pelicula.genre_ids.forEach(genero => {
    generos += genero + '';
  });
    return (
    <>
      <div id="props.pelicula.id" className={"cardpeli" + generos}>
        <img src={"https://image.tmdb.org/t/p/w500" + props.pelicula.poster_path} alt="titulo"/>;
        <h1>{props.pelicula.title}</h1>
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