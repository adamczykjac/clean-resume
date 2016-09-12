import React, { Component, PropTypes } from 'react';

// Award component
export default class Award extends Component {
  render() {
    return (
      <li>
        <span className="flaticon-award big"></span>
        <div className="award-content">
          <h4>{ this.props.award.awarder }</h4>
          <h5>{ this.props.award.title } | { this.props.award.date }</h5>
          <p>{ this.props.award.summary }</p>
        </div>
      </li>
    );
  }
}

Award.propTypes = {
  award: PropTypes.object.isRequired
};
