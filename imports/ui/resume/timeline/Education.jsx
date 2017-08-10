import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import { renderWorkPeriod } from './utils.js';
import InlineCss from 'react-inline-css';

const T = i18n.createComponent()

export default class Education extends Component {
  // Take it out to the separate module
  static externalStyles() {
    if(Meteor.isServer){
      return Assets.getText('stylesheets/flag-icon.css')
    }
  }

  renderCourses() {
    return this.props.education.courses.map((course, idx) => (
      <span key={idx}>
        { course }{ this.props.education.courses[this.props.education.courses.length - 1] === course ? null : ', ' }
      </span>
    ));
  }

  render() {
    return (
      <InlineCss stylesheet={ Education.externalStyles() }>
        <div className="timeline-body">
          <h4>{ this.props.education.studyType } - { this.props.education.area }</h4>
          <h5>
            { this.props.education.institution.name } <span className={"flag-icon flag-icon-" + this.props.education.institution.location.countryCode}></span> | { renderWorkPeriod(this.props.education.startDate, this.props.education.endDate) }
          </h5>
          { this.props.education.courses &&
            <p>{ this.renderCourses() }</p>
          }
        </div>
      </InlineCss>
    );
  }
}

Education.propTypes = {
  education: PropTypes.object.isRequired
};
