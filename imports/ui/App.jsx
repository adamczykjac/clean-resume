import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Resumes } from '../api/resumes.js';

import HelloBar from './HelloBar.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export class App extends Component {
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
        <HelloBar />
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
  const subscription = Meteor.subscribe('resumes.get');
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
