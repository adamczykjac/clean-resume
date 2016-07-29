import React, { Component, PropTypes } from 'react';

// Award component
export default class Award extends Component {
  render() {
    return (
      <li>
        <span className="flaticon-trophy big"></span>
        <div className="award-content">
          <h4>{ this.props.award.title }</h4>
          <h5>{ this.props.award.awarder } | { this.props.award.date }</h5>
          <p>{ this.props.award.summary }</p>
        </div>
      </li>
    );
  }
}

Award.propTypes = {
  award: PropTypes.object.isRequired
};
