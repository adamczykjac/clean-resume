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
    return (
      <div className="menu-category list-group" id="skills">
        <h3>UMIEJĘTNOŚCI</h3>
        { this.props.skills.map((skill, idx) => (
            <Skill key={idx} skill={skill} />
          ))
        }
      </div>
    );
  }

  renderTimelineMoments(momentType) {
    var timelineIterable = null;
    var timelineLabel = '';
    if (momentType === 'Work') {
      timelineIterable = this.props.works;
      timelineLabel = 'Doświadczenie'
    }
    else { // Education
      timelineIterable = this.props.educations;
      timelineLabel = 'Edukacja'
    }
    return (
      <div className="menu-category list-group" id="education">
        <h3>{ timelineLabel }</h3>
        <div className="timeline-wrap">
          <div className="timeline-before"></div>
          <ul className="timeline">
            {
              timelineIterable.map((moment, idx) => (
                <TimelineMoment key={idx} momentType={momentType} moment={moment} />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

  renderAwards() {
    return (
      <div className="menu-category list-group" id="awards">
        <h3>NAGRODY</h3>
        <ul>
          { this.props.awards.map((award, idx) => (
              <Award key={idx} award={award} />
            ))
          }
        </ul>
      </div>
    );
  }

  renderCertifications() {
    return (
      <div className="menu-category list-group" id="certifications">
        <h3>CERTYFIKATY</h3>
        <ul>
          {
            this.props.certifications.map((cert, idx) => (
              <Certification key={idx} cert={cert} />
            ))
          }
        </ul>
      </div>
    );
  }

  renderLanguages() {
    return (
      <div className="menu-category list-group" id="languages">
        <h3>JĘZYKI</h3>
        {
          this.props.languages.map((lang, idx) => (
            <Language key={idx} id={idx} lang={lang} />
          ))
        }
      </div>
    );
  }

  renderInterests() {
    return (
      <div className="menu-category list-group" id="interests">
        <h3>ZAINTERESOWANIA</h3>
        {
          this.props.interests.map((interest, idx) => (
            <Interest key={idx} interest={interest} />
          ))
        }
      </div>
    );
  }

  render() {
    return (
      <div className="content menu row">
        { this.renderSkills() }

        { this.renderTimelineMoments('Work') }

        { this.props.awards ? this.renderAwards() : "" }

        { this.renderTimelineMoments('Education') }

        { this.props.certifications ? this.renderCertifications() : "" }

        { this.props.languages ? this.renderLanguages() : "" }

        { this.renderInterests() }
      </div>
    );
  }
}

Content.propTypes = {
  skills: PropTypes.array.isRequired,
  awards: PropTypes.array,
  works: PropTypes.array.isRequired,
  educations: PropTypes.array.isRequired,
  certifications: PropTypes.array,
  languages: PropTypes.array,
  interests: PropTypes.array.isRequired
};
