import React, { Component, PropTypes } from 'react';

// Work component
export default class Work extends Component {
  render() {
    return (
      <li>
          <div className="timeline-badge primary"><a><div className="circle" rel="tooltip" title="11 hours ago via Twitter" id=""></div></a></div>
          <div className="timeline-panel">
              <div className="timeline-body">
                  <h4>{ this.props.work.position }</h4>
                  <h5>{ this.props.work.company } | { this.props.work.startDate } - { this.props.work.endDate }</h5>
                  <p>{ this.props.work.summary }</p>
              </div>
          </div>
      </li>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
