import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pokemon(props){
    const [ pokemon, setPokemon] = useState();

    useEffect(()=>{
        axios.get(props.url).then((event)=>{
            setPokemon(event)
        })
    }, [])
    console.log(pokemon)
    return (
        <>
        </>
    )
}