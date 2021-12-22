
import './App.css';
import {  BrowserRouter as Router,
  Switch,
  Route,
   } from 'react-router-dom';
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


