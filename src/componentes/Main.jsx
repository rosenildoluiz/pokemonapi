
import '../App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';



function App() {
  const [ pokemons, setPokemons] = useState([]);
  

  
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=50').then((event) => setPokemons(event.data.results))
  }, [])
  console.log(pokemons)
  return (
    <>
            <header><img className='title' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'/></header> 
        <div className='pokemonContainer'>

        <div className='pokemonWrapper'>
          { 
          pokemons ?
          pokemons.map((event, i) => {
          return (
          
          <div className='pokemonComponent'>
            <img className='imagempoke' src={'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/'+(i+=1)+'.svg'}/>

            <a href={'/pokemon/'+i} className='pokename'><h1 key={i}>{event.name}</h1></a>
            

            
            
          </div>)
      })
            : <h1>Carregando...</h1>
       
    }
        </div>
        
    </div>
    </>


  );
}

export default App;
