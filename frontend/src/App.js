import React,  {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import clienteAxios from './config/axios';

//componentes
import Balance from './components/Balance';
import NuevoPresupuesto from './components/NuevoPresupuesto';
import Presupuesto from './components/Presupuesto';


function App() {

 //State de la app
const [presupuestos, guardarPresupuestos] = useState ([]);

useEffect(() => {
if(consultar) { 
const consultarAPI = () => {
  clienteAxios.get('/presupuestos')
    .then(respuesta => {
      guardarPresupuestos(respuesta.data);
    })
    .catch(error => {
      console.log(error)
    })
}
consultarAPI();
}
}, [consultar] );

return (



  <Router>
    <Switch>
        <Route
          exact path= "/" 
          component= {() => <Presupuestos presupuestos={presupuestos} />}

        />
          <Route
          exact path= "/nuevo" 
          component= {NuevoPresupuesto}

        />
         <Route
          exact path= "/nuevo/:id" 
          component= {Presupuesto}

        />
        


    </Switch>

</Router>
)  }

export default App;
