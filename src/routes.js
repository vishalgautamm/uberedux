import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Locations from './containers/Locations';
import Products from './containers/Products';

export default (
 <Route path={'/'} component={App}>
  <IndexRoute component={Locations} />
 </Route>
);
