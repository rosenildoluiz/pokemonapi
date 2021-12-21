
import './App.css';
import axios from 'axios';
import Pokedex from 'pokedex-promise-v2';
import { useEffect, useState } from 'react';
import Pokemon from './componentes/pagina01';
import {  BrowserRouter as Router,
  Switch, Link,
  Route,
  Routes } from 'react-router-dom';
import Main from './componentes/Main'
import Pagina02 from './componentes/pagina02';

export default function RouteMain() {

  return (

<Router>
<Switch>
           <Route component={Main}  path='/' exact/>
           <Route component={Pagina02} path='/pokemon/:id' />
           
</Switch>



</Router>
 
      


  
    
  );
}


