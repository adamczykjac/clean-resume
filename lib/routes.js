import React from 'react';
import App from '../imports/ui/App.jsx';
import Content from '../imports/ui/Content.jsx';

import { IndexRoute, Route } from 'react-router';
import { ReactRouterSSR } from 'meteor/reactrouter:react-router-ssr';


Meteor.startup( function() {
  AppRoutes = (
    <Route path="/" component={App}>
    </Route>
  );

  ReactRouterSSR.Run(AppRoutes, {}, {
    htmlHook: function(html) {
      
      return html;
    }
  });
});
