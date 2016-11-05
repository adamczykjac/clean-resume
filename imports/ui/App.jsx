import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Resumes } from '../api/resumes.js';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export default class App extends Component {
  renderHeader() {
    return <Header basics={this.props.basics}/>;
  }
  renderContent() {
    return <Content
      skills={this.props.content.skills}
      awards={this.props.content.awards}
      languages={this.props.content.languages}
      works={this.props.content.works}
      educations={this.props.content.educations}
      certifications={this.props.content.certifications}
      interests={this.props.content.interests}
    />;
  }
  renderFooter() {
    return <Footer />;
  }

  render() {
    // TODO Create a loading spinner
    return this.props.loading ? null : (
      <div className="top-wrapper">
        <svg>
            <defs>
              <pattern id="basicPattern" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse">
                <polygon points="0,0 50,0"/>
                <polygon points="25,0 0,43.3 50,43.3"/>
                <polygon points="0,43.3 50,43.3 25,86.6"/>
                <polygon points="0,86.6 50,86.6"/>
              </pattern>
              <linearGradient id="fadeGrad" y2="1" x2="0">
                <stop offset="0" stopColor="white" stopOpacity="0.5"/>
                <stop offset="0.7" stopColor="white" stopOpacity="0"/>
              </linearGradient>
              <mask id="fade" maskContentUnits="objectBoundingBox">
                <rect width="1" height="1" fill="url(#fadeGrad)"/>
              </mask>
            </defs>

            <rect x="0" y="00" width="100%" height="100%" fill="url(#basicPattern)" mask="url(#fade)"/>
        </svg>
        <div className="container">
          {this.renderHeader()}
          {this.renderContent()}
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}

// Validation of this.props.* types
App.propTypes = {
  basics: PropTypes.object.isRequired,
  content: PropTypes.object.isRequired,
};

// Fetch data from minimongo and pass it to React component
export default createContainer(({ params }) => {
  const subscription = Meteor.subscribe('resumes.get', '581b93481c0dc022fdf3a5f8');
  const loading = !subscription.ready();
  let basics = {};
  let content = {};

  resume = Resumes.findOne({});
  if(resume) {
    basics = resume.basics,
    content = {
      skills: resume.skills,
      awards: resume.awards,
      languages: resume.languages,
      works: resume.work,
      educations: resume.education,
      certifications: resume.certifications,
      interests: resume.interests
    }
  }
  return { loading, basics, content };
}, App);
