import React from 'react';
import { mount } from 'react-mounter';

import Landing from '../imports/ui/Landing.jsx';
import EntryForm from '../imports/ui/EntryForm.jsx';
import App from '../imports/ui/App.jsx';
import AppLayout from '../imports/ui/AppLayout.jsx';
import { AppContainer } from '../imports/ui/AppContainer.jsx';

FlowRouter.route('/', {
    name: 'landing',
    action: function(params) {
      mount(Landing);
    }
});

FlowRouter.route('/app', {
  name: 'app',
  action: function(params) {
    mount(AppContainer, {
      content: (props) => <App {...props} />
    });
  }
});

FlowRouter.route('/form', {
    name: 'form',
    action: function(params) {
      mount(EntryForm);
    }
});
