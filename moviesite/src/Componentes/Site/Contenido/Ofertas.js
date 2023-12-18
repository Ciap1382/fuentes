import { useEffect, useState } from 'react';
import TarjetaPelicula from './TarjetaPelicula';
var carteleraInicio =0;
var carteleraFinal =4;
const Ofertas =() => {
  const [peliculas,setPeliculas] = useState([]);
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/discover/tv?include_adult=false&include_video=false&language=es-MX&page=4&sort_by=popularity.desc",{
      headers:{
      Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjliMzgwNzM4YmNmODgxYTZjMmE2NzFhMmU2MWNlZSIsInN1YiI6IjYzNDJkODZjMzlhMWE2MDA3Y2E0YTcwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.htHzsJWnlAMRs3DSDKO2Ryj_dvPogO3vg5cI1riXjzs",
      "Content-Type":"application/json"
    }}).then((result)=>result.json()).then((data)=>{
      setPeliculas(data.results);
    },[])
});
function clicIzda(event) {
  carteleraInicio++;
  carteleraFinal++;
  if (carteleraInicio>peliculas.length -4){
    carteleraInicio = peliculas.length-4;
    carteleraFinal = peliculas.length;
  }
};
function cDer(event) {
  carteleraInicio--;
  carteleraFinal--;
  if (carteleraInicio<0){
    carteleraInicio= 0;
    carteleraFinal = 4;  
  }
};
  return (
    <><h1>SERIES</h1>
    <div id="cartelera">
      <button onClick={clicIzda}>Ant.</button>
      {peliculas.slice(carteleraInicio, carteleraFinal).map((pelicula) => {
          return (
            <TarjetaPelicula pelicula={pelicula}/>
            );
      })}
      <button onClick={cDer}>Sig.</button>
      </div>
      </>
  )
}
export default Ofertas;