import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Banner from './pages/index'

// Importa de las vistas

export default function App() {

  return (
    <div>
      <BrowserRouter >
        <Switch>
           <Route exact path = '/' component = {Banner} /> 
        </Switch>
      </BrowserRouter>
    </div>
  );
}