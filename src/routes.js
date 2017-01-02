'use strict';

import React from 'react'
import { Route, IndexRoute } from 'react-router'
import Layout from './components/layout/Layout';
import Homepage from './components/homepage/Homepage';
import AthletePage from './components/AthletePage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Homepage}/>
    <Route path="athlete/:id" component={AthletePage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);

export default routes;
