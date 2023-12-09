import SelGeneros from '../Encabezado/SelGeneros';
import Selgeneros from '../Encabezado/SelGeneros';
import { useEffect, useState } from 'react';
const Cartelera =() => {
  const [peliculas,setPeliculas] = useState([]);
  function getRandomInt(max) {
      return Math.floor(Math.random() * max);
    };
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-MX&page=4&sort_by=popularity.desc",{
      headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjliMzgwNzM4YmNmODgxYTZjMmE2NzFhMmU2MWNlZSIsInN1YiI6IjYzNDJkODZjMzlhMWE2MDA3Y2E0YTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htHzsJWnlAMRs3DSDKO2Ryj_dvPogO3vg5cI1riXjzs",
      "Content-Type":"application/json"
    }}).then((result)=>result.json()).then((data)=>{
      setPeliculas(data.results);
    },[])
});
  return (
    <><h1>CARTELERA</h1>
    <label>Genero</label>
    <SelGeneros/>
    <div id="cartelera">
      {peliculas.map((pelicula) => {
      var gen = pelicula.genre_ids;
      var gen_name = "";
      gen.forEach((element) => {
        switch (element) {
          case 12:
            gen_name = gen_name + "INFANTILES ";
            break;
          case 16:
            gen_name = gen_name + "FANTASIA ";
            break;
          case 28:
            gen_name = gen_name + "GUERRA ";
            break;
          case 878:
            gen_name = gen_name + "ACCION ";
            break;
        };
      });
      return(
        <div id={pelicula.id} className={"cardpeli " + gen_name}>
          <img src={"https://image.tmdb.org/t/p/w500" + pelicula.poster_path} alt="titulo"/>;
          <div className="cardpelidescrip">
            <p>Titulo:{pelicula.title}</p>
            <p>Fecha:{pelicula.release_date}</p>
            <p>Descripcion:{pelicula.overview.substring(0, 25)}<a href="#">{" "}...Ver mas<></></a></p>
          </div>
        </div>);}
        )};
      </div>
    </>
  );
};
export default Cartelera;