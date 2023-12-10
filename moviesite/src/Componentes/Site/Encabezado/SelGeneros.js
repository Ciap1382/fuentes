import { useState, useEffect } from "react";
const SelGeneros =() => {
  const [generos, setGeneros] = useState([]);
  useEffect(() => {
    fetch("https://api.themoviedb.org/3/genre/movie/list?language=es",{
      headers:{
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NzFlNzJhNDZjYTFlMGY2NzFmNGZhNDBjODY4ZmY3MCIsInN1YiI6IjY1NjI2NzI0MDI4ZjE0MDExYmQ3NzVjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FZcwP_SdjLVYmFtI_AUi7GBewxm3ALDtZZmQrAbhGLI",
        "Content-Type":"application/json"
      }}).then((result)=>result.json()).then((data)=>{
      data.genres.map(item=>{
        fetch("http://localhost/api/?id=gen&acc=agregargen&nombregenero="+item.name+"&tmdbId="+item.id)
      })
        setGeneros(data.genres);
      })
},[])
return(
 <>
 <select>
  {generos.map(genero=>(
    <option value={genero.id}>{genero.name.toUpperCase()}</option>
  ))}
</select>
 </>
)
}
export default SelGeneros;