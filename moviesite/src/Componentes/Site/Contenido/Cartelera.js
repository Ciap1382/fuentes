import SelGeneros from '../Encabezado/SelGeneros';
import { useEffect, useState } from 'react';
import TarjetaPelicula from './TarjetaPelicula';
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
    <>
    <h1>CARTELERA</h1>
    <SelGeneros/>
    <div id="cartelera">
      {peliculas.map((pelicula) => <TarjetaPelicula pelicula={pelicula}/>)};
    </div>
    </>
  );
};
export default Cartelera;