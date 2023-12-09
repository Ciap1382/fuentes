import Banner1 from "./Benner1";
import { useEffect, useState } from "react";
const Contenido = ()=>{
        const movieState = useState([]);
        const setmovieState = useState([]);
        const banners = [
            {id:1, nombre:"banner1", cls:"bannerimg1"}
        ];
        let pelis = [];
        useEffect ( () => {
            fetch("https://api.themoviedb.org/3/movie/157336?api_key=771e72a46ca1e0f671f4fa40c868ff70").then(result=>result.json())
            .then((data)=>{
            pelis = data.result;
            console.log(pelis);
            })
});
        
        return(
        <>
            <div id="contenido">
                {banners.map(item=>{
                    return (<Banner1 item={item}/>)
                })}
            </div>
        </>
        );
    };
export default Contenido
/*
const App = () => { const [data, setData] = useState({});
    useEffect(() => { const getWeatherFromApiAsync = async () => { 
            const resopnse = await fetch( "https://api.openweathermap.org/data/2.5/weather?q=brighton,uk&appid=8b609354454cdb6c5a7092a939861ace&units=metric" );
            const resopnseJson = await resopnse.json();
            console.log("json", resopnseJson);
            setData(resopnseJson);
        };
        getWeatherFromApiAsync();
}, []);
return ( <div className="App"> <h6>{data?.coord?.lon}</h6> </div> );
};
*/
/*
const fetch = require('node-fetch')
const getUser = async (id) => {
    const res = await fetch('http://localhost/session25/api/?actorid=vta&acc=buscarvta&idvta=1')
    const res = await fetch('http://localhost/session25/api/?id=vta&acc=buscarvta&idvta=1')
    const data = await res.json()
    console.log(data);
}
getUser(1)
*/