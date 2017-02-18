import React from 'react';
import {mount} from 'react-mounter';
// load Layout and Welcome React components
import {Landing} from '../imports/ui/Landing.jsx';

FlowRouter.route('/', {
    name: 'landing',
    action: function(params) {
        console.log("This is landing page!");
        mount(Landing);
    }
});
