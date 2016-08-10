import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../api/skills.js';
import Skill from './resume-modules/Skill.jsx';
import { Awards } from '../api/awards.js';
import Award from './resume-modules/Award.jsx';
import { Languages } from '../api/languages.js';
import Language from './resume-modules/Language.jsx';
import { Works } from '../api/works.js';
import { Educations } from '../api/educations.js';
import TimelineMoment from './resume-modules/TimelineMoment.jsx';
import { Certifications } from '../api/certifications.js';
import Certification from './resume-modules/Certification.jsx';
import { Interests } from '../api/interests.js';
import Interest from './resume-modules/Interest.jsx';

// Content component
export default class Content extends Component {
  renderSkills() {
    return this.props.skills.map((skill) => (
      <Skill key={skill._id} skill={skill} />
    ));
  }
  renderTimelineMoments(momentType) {
    var timelineIterable = null;
    if (momentType === 'Work') {
      timelineIterable = this.props.works;
    }
    else {
      timelineIterable = this.props.educations;
    }
    return timelineIterable.map((moment) => (
      <TimelineMoment key={moment._id} momentType={momentType} moment={moment} />
    ));
  }
  renderAwards() {
    return this.props.awards.map((award) => (
      <Award key={award._id} award={award} />
    ));
  }
  renderLanguages() {
    return this.props.languages.map((lang) => (
      <Language key={lang._id} lang={lang} />
    ));
  }
  renderCertifications() {
    return this.props.certifications.map((cert) => (
      <Certification key={cert._id} cert={cert} />
    ));
  }
  renderInterests() {
    return this.props.interests.map((interest) => (
      <Interest key={interest._id} interest={interest} />
    ));
  }

  render() {
    return (
      <div className="content menu row">
          <div className="menu-category list-group" id="skills">
            <h3>SKILLS</h3>
            { this.renderSkills() }
          </div>

          <div className="menu-category list-group" id="work">
            <h3>WORK</h3>
            <div className="timeline-wrap">
              <div className="timeline-before"></div>
              <ul className="timeline">
                { this.renderTimelineMoments('Work') }
              </ul>
            </div>
          </div>

          <div className="menu-category list-group" id="awards">
              <h3>AWARDS</h3>
              <ul>
                { this.renderAwards() }
              </ul>
          </div>
          <div className="menu-category list-group" id="education">
              <h3>EDUCATION</h3>
              <div className="timeline-wrap">
                <div className="timeline-before"></div>
                <ul className="timeline">
                  { this.renderTimelineMoments('Education') }
                </ul>
              </div>
          </div>

          <div className="menu-category list-group" id="languages">
              <h3>LANGUAGES</h3>
              { this.renderLanguages() }
          </div>
          <div className="menu-category list-group" id="certifications">
              <h3>CERTIFICATIONS</h3>
              <ul>
                { this.renderCertifications() }
              </ul>
          </div>
          <div className="menu-category list-group" id="interests">
              <h3>INTERESTS</h3>
              { this.renderInterests() }
          </div>
      </div>
    );
  }
}

Content.propTypes = {
  skills: PropTypes.array.isRequired,
  awards: PropTypes.array.isRequired,
  works: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
  languages: PropTypes.array.isRequired,
  certifications: PropTypes.array.isRequired,
  interests: PropTypes.array.isRequired
};

// TODO extract collections from one JSON Resume entry
export default ContentContainer = createContainer(() => {
  return {
    skills: Skills.find({}).fetch(),
    awards: Awards.find({}).fetch(),
    works: Works.find({}).fetch(),
    educations: Educations.find({}).fetch(),
    languages: Languages.find({}).fetch(),
    certifications: Certifications.find({}).fetch(),
    interests: Interests.find({}).fetch()
  };
}, Content);
