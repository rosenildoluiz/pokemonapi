
import './App.css';
import axios from 'axios';
import Pokedex from 'pokedex-promise-v2';
import { useEffect, useState } from 'react';
import Pokemon from './componentes/pagina01';
import {  BrowserRouter,
  Switch, Link,
  Route,
  Routes } from 'react-router-dom';
import Main from './componentes/Main'
import Router from './Router';

export default function App() {
  const [ pokemons, setPokemons] = useState([]);

  return (

<Router />
 
      


  
    
  );
}


