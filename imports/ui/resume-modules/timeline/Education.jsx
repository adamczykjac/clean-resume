import React, { Component, PropTypes } from 'react';

// Education component
export default class Education extends Component {
  renderCourses() {
    return this.props.education.courses.map((course, idx) => (
      <span key={idx}>
        { course }{ this.props.education.courses[this.props.education.courses.length - 1] === course ? null : ', ' }
      </span>
    ));
  }

  render() {
    return (
      <li className="timeline-body">
        <h4>{ this.props.education.studyType } { this.props.education.area }</h4>
        <h5>{ this.props.education.institution } | GPA { this.props.education.gpa } | { this.props.education.startDate } - { this.props.education.endDate }</h5>
        <p>{ this.renderCourses() }</p>
      </li>
    );
  }
}

Education.propTypes = {
  education: PropTypes.object.isRequired
};
