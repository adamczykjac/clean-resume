import React, { Component, PropTypes } from 'react';

// Work component
export default class Work extends Component {
  render() {
    return (
      <li className="timeline-body">
        <h4>{ this.props.work.position }</h4>
        <h5>{ this.props.work.company } | { this.props.work.startDate } - { this.props.work.endDate }</h5>
        <p>{ this.props.work.summary }</p>
      </li>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
