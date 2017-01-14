import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Catalogo from './containers/Catalogo';

const routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/catalogo" component={Catalogo}/>
    {/*
      <Route path="/proyectos" component={Proyectos}/>
      <Route path="/proyectos/:proyecto_slug" component={ProyectoDetalle}/>
      <Route path="/sobre-nosotros" component={SobreNosotros}/>
      <Route path="/contacto" component={Contacto}/>
      <Route path="*" component={NotFound}/>
    */}
    </Route>
  );
};

export default routes;