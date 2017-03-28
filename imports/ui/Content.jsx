import React, { Component, PropTypes } from 'react';

import Skill from './resume-modules/Skill.jsx';
import Award from './resume-modules/Award.jsx';
import Language from './resume-modules/Language.jsx';
import TimelineMoment from './resume-modules/TimelineMoment.jsx';
import Certification from './resume-modules/Certification.jsx';
import Interest from './resume-modules/Interest.jsx';

let spliceIntoArraysWithLength = ( array, spliceLen, result ) => {
  if(!result) result = [];
  if(array.length > spliceLen) {
    result.push(array.splice(0, spliceLen));
    return spliceIntoArraysWithLength( array, spliceLen, result );
  }
  result.push(array);
  return result;
}

// Content component
export default class Content extends Component {
  static getConstant(constant) {
    const constants = {
      MAX_COLUMNS: 4, // up to four columns look pleasant in one columnn of the template
      TWT_BOOTSTRAP_GRID_COLUMNS: 12
    }
    return constants[constant]
  }

  renderRowsWithComponents(rows, Component) {
    // calculate Bootstrap column width
    let bootstrapColWidth;
    if( rows.length > 1 ) bootstrapColWidth = Math.floor(Content.getConstant("TWT_BOOTSTRAP_GRID_COLUMNS") /
                                                         Content.getConstant("MAX_COLUMNS"));
    else bootstrapColWidth = Math.floor(Content.getConstant("TWT_BOOTSTRAP_GRID_COLUMNS") / rows[0].length);
    return (
      rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {
            row.map((rowElement, rowElementIndex) => (
              <Component key={rowElementIndex}
                                  id={rowElementIndex}
                                  colWidth={bootstrapColWidth}
                                  data={rowElement} />
            ))
          }
        </div>
      ))
    );
  }

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
        <h3>DOKUMENTY</h3>
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

  renderCertificateConfirmation(data) {
    let hasCertificate = data.some((element) => element.certificate);
    if(hasCertificate) return (
      <span>* potwierdzony certyfikatem</span>
    )
  }

  renderLanguages() {
    let rows = spliceIntoArraysWithLength(this.props.languages, Content.getConstant("MAX_COLUMNS"));
    return (
      <div className="menu-category list-group" id="languages">
        <h3>JĘZYKI</h3>
        { this.renderRowsWithComponents(rows, Language) }
        { this.renderCertificateConfirmation(this.props.languages) }
      </div>
    );
  }

  renderInterests() {
    let rows = spliceIntoArraysWithLength(this.props.interests, Content.getConstant("MAX_COLUMNS"));
    return (
      <div className="menu-category list-group" id="interests">
        <h3>ZAINTERESOWANIA</h3>
        { this.renderRowsWithComponents(rows, Interest) }
      </div>
    );
  }

  // fluid empty element to fill up the remaining part of a document and to prevent wkhtmltopdf
  // zoom effect
  renderFillUp(height) {
    const fillUpStyle = {
      height: height
    }
    return (
      <div style={fillUpStyle}></div>
    )
  }

  render() {
    return (
      <div className="content menu row">
        { this.renderSkills() }

        { this.renderTimelineMoments('Work') }

        { this.props.awards ? this.renderAwards() : "" }

        { this.renderTimelineMoments('Education') }

        { this.renderFillUp('300px') }

        { this.props.certifications ? this.renderCertifications() : "" }

        { this.props.languages ? this.renderLanguages() : "" }

        { this.renderInterests() }

        { this.renderFillUp('1000px') }
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
