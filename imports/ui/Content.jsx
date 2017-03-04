import React, { Component, PropTypes } from 'react';

import Skill from './resume-modules/Skill.jsx';
import Award from './resume-modules/Award.jsx';
import Language from './resume-modules/Language.jsx';
import TimelineMoment from './resume-modules/TimelineMoment.jsx';
import Certification from './resume-modules/Certification.jsx';
import Interest from './resume-modules/Interest.jsx';

// Content component
export default class Content extends Component {
  renderSkills() {
    return this.props.skills.map((skill, idx) => (
      <Skill key={idx} skill={skill} />
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
    return timelineIterable.map((moment, idx) => (
      <TimelineMoment key={idx} momentType={momentType} moment={moment} />
    ));
  }
  renderAwards() {
    return this.props.awards.map((award, idx) => (
      <Award key={idx} award={award} />
    ));
  }
  renderLanguages() {
    return this.props.languages.map((lang, idx) => (
      <Language key={idx} id={idx} lang={lang} />
    ));
  }
  renderCertifications() {
    return this.props.certifications.map((cert, idx) => (
      <Certification key={idx} cert={cert} />
    ));
  }
  renderInterests() {
    return this.props.interests.map((interest, idx) => (
      <Interest key={idx} interest={interest} />
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

          <div className="menu-category list-group" id="certifications">
              <h3>CERTIFICATIONS</h3>
              <ul>
                { this.renderCertifications() }
              </ul>
          </div>

          <div className="menu-category list-group" id="languages">
            <h3>LANGUAGES</h3>
            { this.renderLanguages() }
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
  skills: PropTypes.array,
  awards: PropTypes.array,
  works: PropTypes.array,
  educations: PropTypes.array,
  languages: PropTypes.array,
  certifications: PropTypes.array,
  interests: PropTypes.array
};
