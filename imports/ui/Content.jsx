import React, { Component, PropTypes } from 'react';
import InlineCss from 'react-inline-css';
import i18n from 'meteor/universe:i18n';

import Skill from './resume-modules/Skill.jsx';
import Award from './resume-modules/Award.jsx';
import Language from './resume-modules/Language.jsx';
import TimelineMoment from './resume-modules/TimelineMoment.jsx';
import Certification from './resume-modules/Certification.jsx';
import Interest from './resume-modules/Interest.jsx';

const T = i18n.createComponent();

let spliceIntoArraysWithLength = ( array, spliceLen, result ) => {
  if(!result) result = [];
  if(array.length > spliceLen) {
    result.push(array.splice(0, spliceLen));
    return spliceIntoArraysWithLength( array, spliceLen, result );
  }
  result.push(array);
  return result;
}

export default class Content extends Component {
  static styles() {
    return `
      .timeline {
        list-style: none;
        padding: 0;
        position: relative;
      }

      .timeline-wrap {
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      }

      .timeline-before {
        width: 1px;
        background-color: #eb4b52;
        position: relative;
        left: 9px;
      }

      #work .timeline-before {
        width: 5px;
      }

      .timeline > li {
        margin-bottom: 10px;
        position: relative;
        width: 100%;
        float: left;
        clear: left;
      }

      .timeline > li > .timeline-panel {
        width: 88%;
        border: 0px;
        left: 50px;
        top: -1px;
        position: relative;
      }

      .timeline > li > .timeline-badge {
        color: #fff;
        width: 23px;
        height: 23px;
        line-height: 50px;
        font-size: 1.4em;
        text-align: center;
        position: absolute;
        margin-left: 0;
        z-index: 100;
      }

      .timeline-badge > a > .circle {
        background-color: #eb4b52;
        border: 7px solid #fff;
        border-radius: 15px;
        height: 23px;
        width: 23px;
        margin-top: 12px;
        position: relative;
        left: -3px;
      }

      .timeline-title {
        margin-top: 0;
      }

      .timeline-body > ul {
        padding:20px;
        margin-bottom: 0;
      }

      .timeline-body > p {
        margin-top: 5px;
        color: #000;
      }

      .timeline-body > h4 {
        padding-top: 5px;
      }

      .timeline-body > h5 {
        text-transform: none;
      }

      .timeline-body > h4, .timeline-body > h5 {
        font-family: 'MontRgl';
        letter-spacing: 0.1em;
      }
    `
  }

  static getConstant(constant) {
    const constants = {
      MAX_COLUMNS: 4, // up to four columns look pleasant in one column of the template
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
        <h3><T>Content.skills</T></h3>
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
      timelineLabel = <T>Content.work</T>
    }
    else { // Education
      timelineIterable = this.props.educations;
      timelineLabel = <T>Content.education</T>
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
        <h3><T>Content.awards</T></h3>
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
        <h3><T>Content.certifications</T></h3>
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
      <span>* <T>Content.confirmed_by_a_certificate</T></span>
    )
  }

  renderLanguages() {
    let rows = spliceIntoArraysWithLength(this.props.languages, Content.getConstant("MAX_COLUMNS"));
    return (
      <div className="menu-category list-group" id="languages">
        <h3><T>Content.languages</T></h3>
        { this.renderRowsWithComponents(rows, Language) }
        { this.renderCertificateConfirmation(this.props.languages) }
      </div>
    );
  }

  renderInterests() {
    let rows = spliceIntoArraysWithLength(this.props.interests, Content.getConstant("MAX_COLUMNS"));
    return (
      <div className="menu-category list-group" id="interests">
        <h3><T>Content.interests</T></h3>
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
      <InlineCss namespace="Content" stylesheet={ Content.styles() }>
        <div className="content menu row">
          { this.renderSkills() }

          { this.renderTimelineMoments('Work') }

          { this.props.awards ? this.renderAwards() : "" }

          { this.renderFillUp('300px') }

          { this.renderTimelineMoments('Education') }

          { this.props.languages ? this.renderLanguages() : "" }

          { this.props.certifications ? this.renderCertifications() : "" }

          { this.renderInterests() }
        </div>
      </InlineCss>
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
