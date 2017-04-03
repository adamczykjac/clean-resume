import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import InlineCss from 'react-inline-css';

import { Resumes } from '../api/resumes/resumes.js';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export class App extends Component {
  static getFont(fontPath) {
    let assetFontPath = 'fonts/' + fontPath
    if(Meteor.isServer){
      return Assets.absoluteFilePath(assetFontPath);
    }
    return assetFontPath
  }
  
  static externalStyles() {
    if(Meteor.isServer){
      return Assets.getText('stylesheets/bootstrap/bootstrap.min.css')
    }
  }
  
  static componentStyles() {
    return `
      @font-face {
          font-family: 'MontRgl';
          src: url('${ App.getFont('montserrat/MontRgl.ttf') }') format('truetype');
          font-weight: normal;
          font-style: normal;
      }
      
      @font-face {
          font-family: 'MontLt';
          src: url('${ App.getFont('montserrat/MontLt.ttf') }') format('truetype');
          font-weight: normal;
          font-style: normal;
      }
      
      @font-face {
          font-family: 'MontBld';
          src: url('${ App.getFont('montserrat/MontBld.ttf') }') format('truetype');
          font-weight: normal;
          font-style: normal;
      }
  
      html, body {
        margin: 1em 0.8em 0 0;
        padding: 0;
        font-family: "MontLt";
      }
  
      a, a:visited, a:active {
        font-family: "MontRgl";
        color: #EB5757;
      }
  
      a:hover {
        color: #EB5757;
        text-decoration: none;
      }
  
      p {
        text-align: justify;
        text-justify: inter-word;
      }
  
      h1, h2, h3, h4, h5, h6 {
        font-family: 'MontBld', "Helvetica Neue", Helvetica, Arial, sans-serif;
        letter-spacing: normal !important;
        text-transform: uppercase;
      }
  
      h5 {
        letter-spacing: normal !important;
      }
  
      .table > tbody > tr > td {
        line-height: normal;
        vertical-align: inherit;
        border-top: 0;
      }
  
      td {
        padding: 0.4em 0.5em;
      }
  
      tr:first-child>td {
        margin-top: 0;
        padding-top: 0;
      }
    `
  }
  
  static styles() {
    return App.externalStyles() + App.componentStyles()
  }

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
      <InlineCss stylesheet={ App.styles() }>
        <div className="top-wrapper">
          <div className="container">
            {this.renderHeader()}
            {this.renderFooter()}
          </div>
        </div>
    </InlineCss>
    );
  }
}

// Validation of this.props.* types
// App.propTypes = {
//   basics: PropTypes.object.isRequired
//   // content: PropTypes.object.isRequired,
// };

// Fetch data from minimongo and pass it to React component
// export default createContainer(({ params }) => {
//   const subscription = Meteor.subscribe('resumes.get');
//   const loading = !subscription.ready();
//   let basics = {};
//   let content = {};
// 
//   resume = Resumes.findOne({_id: '58d2d48d945f3a9097406a68'});
//   console.log(res);
//   if(resume) {
//     basics = resume.basics,
//     content = {
//       skills: resume.skills,
//       awards: resume.awards,
//       languages: resume.languages,
//       works: resume.work,
//       educations: resume.education,
//       certifications: resume.certifications,
//       interests: resume.interests
//     }
//   }
//   return { loading, basics, content };
// }, App);
