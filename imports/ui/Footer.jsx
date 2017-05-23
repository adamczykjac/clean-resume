import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import InlineCss from 'react-inline-css';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

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
          <T>Footer.crafted_with_earrly</T> &copy; 2017 - <T>Footer.icon_credits</T>:&nbsp;
          <a href="http://flaticon.com" target="_blank" className="regular-text">flaticon.com</a>
        </footer>
      </InlineCss>
    );
  }
};
