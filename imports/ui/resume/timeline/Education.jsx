import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import InlineCss from 'react-inline-css';
import LocationBio from './LocationBio'


const T = i18n.createComponent()

export default class Education extends Component {
  // Take it out to the separate module
  static externalStyles() {
    if(Meteor.isServer){
      return Assets.getText('stylesheets/flag-icon.css')
    }
  }

  renderInstitutionBio() {
    let institutionData = this.props.education
    if(institutionData.institution.name) {
      institutionData['authority'] = institutionData.institution.name
      delete institutionData.institution.name
      if(institutionData.institution.location) {
        institutionData['location'] = institutionData.institution.location
        delete institutionData.institution.location
      }
    }
    return <LocationBio locationData={ institutionData } />
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
          { this.renderInstitutionBio() }
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
