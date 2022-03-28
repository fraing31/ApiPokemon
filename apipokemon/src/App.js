import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [apiPokemon, setApiPokemon] = useState([]);
  const [despliegue, setDespliegue] = useState('');

  useEffect(() => {
    if (despliegue !== '') {
      let configuracion = {
        method: "GET"
      };
    
      //console.log("Useffeect ejecutandose");
      fetch("https://pokeapi.co/api/v2/pokemon?limit=807", configuracion)
        .then(respuesta => respuesta.json())
        .then(respuesta => setApiPokemon(respuesta.results))
    }
  }, [despliegue]);//Cuando se debe ejecutar

  const desplegarLista = (event) => {
    event.preventDefault();
    setDespliegue((prev) => "api");
    //console.log("Desplegar ejecutandose");
  };

  return (
    <div>
        <button onClick={(event) => desplegarLista(event)}>Desplegar Pokemones</button>
      <div>
        <h1> Lista de pokemones</h1>
        <ol>
          {apiPokemon.map((pokemon, indice) => {
            return <li key={'pokemon_' + indice}>{pokemon.name}</li>;
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
