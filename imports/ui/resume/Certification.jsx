import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Certification extends Component {
  certificationDetails(authority, date) {
    let args = Array.prototype.slice.call(arguments);
    // take out undefined arguments
    args = args.filter((argument) => {
      return argument != undefined;
    })
    if(args.length == 0) {
      return <span>&nbsp;</span>
    }
    return args.join(" | ");
  }

  render() {
    return (
      <li>
        <span className="flaticon-diploma big"></span>
        <div className="certification-content">
          <h4>{ this.props.cert.name }</h4>
          <h5>
            {
              this.certificationDetails(this.props.cert.authority,
                                        this.props.cert.date)
            }
          </h5>
        </div>
      </li>
    );
  }
}

Certification.propTypes = {
  cert: PropTypes.object.isRequired
};
