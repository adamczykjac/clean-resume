import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

export default class AppLayout extends Component {
  render() { return (
    <div className="top-wrapper">
      <div className="container">
        { this.props.content(this.props) }
      </div>
    </div>
    );
  }
}
