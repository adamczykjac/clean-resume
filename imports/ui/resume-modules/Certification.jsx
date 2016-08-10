import React, { Component, PropTypes } from 'react';

// Certification component
export default class Certification extends Component {
  render() {
    return (
      <li>
        <span className="flaticon-diploma big"></span>
        <div className="certification-content">
          <h4>{ this.props.cert.name }</h4>
          <h5>{ this.props.cert.authority } | { this.props.cert.date }</h5>
        </div>
      </li>
    );
  }
}

Certification.propTypes = {
  cert: PropTypes.object.isRequired
};
