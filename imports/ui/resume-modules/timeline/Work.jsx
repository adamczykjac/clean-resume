import React, { Component, PropTypes } from 'react';

export default class Work extends Component {
  render() {
    return (
      <div className="timeline-body">
        <h4>{ this.props.work.position }</h4>
        <h5>{ this.props.work.company } | { this.props.work.startDate } - { this.props.work.endDate }</h5>
        <p>{ this.props.work.summary }</p>
      </div>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
