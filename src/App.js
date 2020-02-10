import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

import ProyectosState from './context/proyectoState'

function App() {
  return (
    <div >
      <ProyectosState>
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
          <Route exact path='/proyectos' component={Proyectos} />
        </Switch>
      </Router>
      </ProyectosState>
    </div>
  );
}

export default App;
