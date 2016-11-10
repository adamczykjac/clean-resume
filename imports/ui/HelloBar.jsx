import React, { Component, PropTypes } from 'react';

export default class HelloBar extends Component {
  handleClick() {
  }

  componentWillMount() {
    this.handleClick();
  }

  render() {
    return (
      <div className="hello-bar text-center">
        <a className="btn btn-default btn-inverse"
          href="#"
          role="button"
          onClick={this.handleClick}>DOWNLOAD PDF</a>
      </div>
    );
  }
}
