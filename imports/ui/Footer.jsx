import React, { Component } from 'react';
import InlineCss from 'react-inline-css';

export default class Footer extends Component {
  render() {
    return (
      <InlineCss stylesheet={`
        footer {
          text-align: center;
          color: #aaa;
          font-size: 0.8em;
          margin-bottom: 20px;
        }
      `}>
        <footer>
          <hr />
          &copy; Clean Resume, 2016 - Icon credits: <a href="http://flaticon.com" target="_blank">flaticon.com</a>
          <hr />
          { this.props.resume.basics.name }
        </footer>
      </InlineCss>
    );
  }
};
