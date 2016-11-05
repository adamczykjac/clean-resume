import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// Dev-only
import { ChromaticExplorer } from 'meteor/mdg:chromatic';

if (ChromaticExplorer) {
  ChromaticExplorer.configure({ basePath: '/styleguide' });
}
// !Dev-only

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  render(<App />, document.getElementById('render-target'));
});
