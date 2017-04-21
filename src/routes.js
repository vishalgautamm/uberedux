import React from 'react';
import { Route } from 'react-router';

import App from './components/App';
import Locations from './containers/Locations';
import Products from './containers/Products';

export default (
 <Route path={'/'} component={App}>
  <Route path={'/locations'} component={Locations} />
  <Route path={'/products'} component={Products} />
 </Route>
);
