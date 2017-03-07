import React from 'react';
import {mount} from 'react-mounter';

import Landing from '../imports/ui/Landing.jsx';
import EntryForm from '../imports/ui/EntryForm.jsx';

FlowRouter.route('/', {
    name: 'landing',
    action: function(params) {
        mount(Landing);
    }
});

FlowRouter.route('/app', {
    name: 'app',
    action: function(params) {
        mount(EntryForm);
    }
});
