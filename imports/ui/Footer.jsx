import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import InlineCss from 'react-inline-css';

export default class Footer extends Component {  
  static styles() {
    return `
      footer {
        text-align: center;
        font-size: 1em;
        margin-bottom: 20px;
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
          &copy; Clean Resume, 2016 - Icon credits: <a href="http://flaticon.com" target="_blank">flaticon.com</a>
        </footer>
      </InlineCss>
    );
  }
};
