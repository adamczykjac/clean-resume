import React, { Component, PropTypes } from 'react';

import Work from './timeline/Work.jsx'
import Education from './timeline/Education.jsx'

// TimelineMoment component
export default class TimelineMoment extends Component {
  renderTimelineMomentBody() {
    switch (this.props.momentType) {
      case 'Work':
        return <Work work={this.props.moment} />;
      case 'Education':
        return <Education education={this.props.moment} />;
    }
  }

  render() {
    return (
      <li>
        <div className="timeline-badge primary"><a><div className="circle" rel="tooltip"></div></a></div>
        <div className="timeline-panel">
          { this.renderTimelineMomentBody() }
        </div>
      </li>
    );
  }
}

// TimelineMoment elements need to be Components either the type of Work or Education
TimelineMoment.propTypes = {
  momentType: PropTypes.string.isRequired,
  moment: PropTypes.object.isRequired,
};