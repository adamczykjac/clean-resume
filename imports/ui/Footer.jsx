import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import InlineCss from 'react-inline-css';

export default class Footer extends Component {
  static styles() {
    return `
      footer {
        text-align: center;
        font-size: 1em;
        padding: 0;
      }

      footer a.regular-text {
        color: inherit;
        font-family: 'MontRgl';
      }
    `
  }

  render() {
    return (
      <InlineCss stylesheet={ Footer.styles() }>
        <footer>
          <hr />
          Crafted with <a href="http://www.earrly.com">earrly.com</a> &copy; 2017 - Icon credits:&nbsp;
          <a href="http://flaticon.com" target="_blank" className="regular-text">flaticon.com</a>
        </footer>
      </InlineCss>
    );
  }
};
