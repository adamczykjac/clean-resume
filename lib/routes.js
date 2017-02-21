import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Landing} from '../imports/ui/Landing.jsx';
import {App} from '../imports/ui/App.jsx';

FlowRouter.route('/', {
    name: 'landing',
    action: function(params) {
        mount(Landing);
    }
});

FlowRouter.route('/app', {
    name: 'app',
    action: function(params) {
        mount(App);
    }
});
