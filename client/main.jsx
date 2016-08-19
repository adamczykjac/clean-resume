import React from 'react';
import { Meteor } from 'meteor/meteor';
import { DocHead } from 'meteor/kadira:dochead';
import { render } from 'react-dom';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  DocHead.setTitle('Clean Resume - John Doe');
  // TODO Refactor to iterate over all files
  // TODO Minify all files with 'juice' from npm
  var linkInfoMain = {rel: "stylesheet", type: "text/css", href: "stylesheets/main.css"};
  DocHead.addLink(linkInfoMain);
  var linkInfoLanguage = {rel: "stylesheet", type: "text/css", href: "stylesheets/languages.css"};
  DocHead.addLink(linkInfoLanguage);
  var linkInfoTimeline = {rel: "stylesheet", type: "text/css", href: "stylesheets/timeline.css"};
  DocHead.addLink(linkInfoTimeline);
  var linkInfoFontIcons = {rel: "stylesheet", type: "text/css", href: "stylesheets/fonts/icons.css"};
  DocHead.addLink(linkInfoFontIcons);
  var linkInfoFontMontserrat = {rel: "stylesheet", type: "text/css", href: "stylesheets/fonts/montserrat.css"};
  DocHead.addLink(linkInfoFontMontserrat);

  render(<App />, document.getElementById('render-target'));
});
