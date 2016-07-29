import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Skills } from '../api/skills.js';
import Skill from './resume-modules/Skill.jsx';
import { Awards } from '../api/awards.js';
import Award from './resume-modules/Award.jsx';
import { Works } from '../api/works.js';
import Work from './resume-modules/Work.jsx';

// Content component
export default class Content extends Component {
  renderSkills() {
    return this.props.skills.map((skill) => (
      <Skill key={skill._id} skill={skill} />
    ));
  }
  renderWorks() {
    return this.props.works.map((work) => (
      <Work key={work._id} work={work} />
    ));
  }
  renderAwards() {
    return this.props.awards.map((award) => (
      <Award key={award._id} award={award} />
    ));
  }

  render() {
    return (
      <div className="content menu row">
          <div className="menu-category list-group" id="skills">
            <h3>SKILLS</h3>
            { this.renderSkills() }
          </div>

          <div className="menu-category list-group" id="experience">
            <h3>WORK</h3>
            <ul className="timeline">
              { this.renderWorks() }
            </ul>
          </div>

          <div className="menu-category list-group" id="awards">
              <h3>AWARDS</h3>
              <ul>
                { this.renderAwards() }
              </ul>
          </div>
          <div className="menu-category list-group">
              <h3>EDUCATION</h3>
          </div>

          <div className="menu-category list-group" id="languages">
              <h3>LANGUAGES</h3>
          </div>
          <div className="menu-category list-group" id="certificates">
              <h3>CERTIFICATES</h3>
          </div>
          <div className="menu-category list-group" id="hobbies">
              <h3>UMIEJĘTNOŚCI</h3>
          </div>
      </div>
    );
  }
}

Content.propTypes = {
  skills: PropTypes.array.isRequired,
  awards: PropTypes.array.isRequired,
  works: PropTypes.array.isRequired,
};

export default ContentContainer = createContainer(() => {
  return {
    skills: Skills.find({}).fetch(),
    awards: Awards.find({}).fetch(),
    works: Works.find({}).fetch()
  };
}, Content);
