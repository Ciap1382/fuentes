import './App.css';
import './estilos.css';
import Encabezado from './Componentes/Site/Encabezado/Encabezado';
import PiePagina from './Componentes/Site/piePagina/piePagina';
import Contenido from './Componentes/Site/Contenido/Contenido';
function App () {
  return(
  <div className="App">
    <Encabezado/>
    <Contenido/>
    <PiePagina/>
  </div>
  );
};
export default App;