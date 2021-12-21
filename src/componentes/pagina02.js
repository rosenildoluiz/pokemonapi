import axios from "axios";
import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";


 

    export default function Pagina02(){

    const params = useParams()

    const [ pokemonid, setPokemonid] = useState();
  
  
    const onChange = (url) => {
    
    return <pokemonid url={url} />
  }

    useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/'+ params.id).then((event) => setPokemonid(event.data))
}, [])

console.log(pokemonid)
return (
    <div>
           <a href='/'> <header><img className='title' src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'/></header> </a>
         <h1>{params.nome}</h1>
         
        { 
          pokemonid ?
         
            <div className="center">
                        
                 <img className='imagem' src={'https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/'+(params.id)+'.svg'}/>

                 <h1 className='pokemonTitle'><b>{pokemonid.name}</b></h1>  
              <br/>
              <br/>
              <br/>
              <h1>Habilidades</h1>
              <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Habilidade</th>

    </tr>
  </thead>
   {
                pokemonid.abilities.map((event, counter) => {
                  return (
                    <tbody>
                    <tr>
                      <th scope="row">{counter}</th>

                      <td>{event.ability.name}</td>
                    </tr>

                  </tbody>
                  )
                })
              }
</table>
<h1>Movimentos</h1>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Movimento</th>

    </tr>
  </thead>
   {
                pokemonid.moves.map((event, counter) => {
                  return (
                    <tbody>
                    <tr>
                      <th scope="row">{counter}</th>

                      <td>{event.move.name}</td>
                    </tr>

                  </tbody>
                  )
                })
              }
</table>
           
        
            </div>
  :<h1>ERROR </h1>
        
    }
             
  
  </div>
)
}
 

