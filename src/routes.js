import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './containers/App';
import Home from './containers/Home';
import Catalogo from './containers/Catalogo';
import ProductDetail from './containers/ProductDetail';

const routes = () => {
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/catalogo/:categoria" component={Catalogo}/>
      <Route path="/productos/:producto_id" component={ProductDetail}/>
    </Route>
  );
};

export default routes;