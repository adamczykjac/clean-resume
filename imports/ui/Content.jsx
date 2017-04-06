import React, { Component, PropTypes } from 'react';
import InlineCss from 'react-inline-css';

import Skill from './resume-modules/Skill.jsx';
import Award from './resume-modules/Award.jsx';
import Language from './resume-modules/Language.jsx';
import TimelineMoment from './resume-modules/TimelineMoment.jsx';
import Certification from './resume-modules/Certification.jsx';
import Interest from './resume-modules/Interest.jsx';

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
        width: 2px;
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
        width: 95%;
        border: 0px;
        left: 50px;
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
        // border-radius: 15px;
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
        color: #6b6d70;
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
      <Language key={idx} lang={lang} />
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
      <InlineCss namespace="Content" stylesheet={ Content.styles() }>
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
        </div>
        
      </InlineCss>
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
