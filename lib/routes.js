import React from 'react';
import { mount } from 'react-mounter';

import EntryForm from '../imports/ui/EntryForm.jsx';
import App from '../imports/ui/App.jsx';
import AppLayout from '../imports/ui/AppLayout.jsx';
import { AppContainer } from '../imports/ui/AppContainer.jsx';

FlowRouter.route('/', {
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
