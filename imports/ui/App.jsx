import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import InlineCss from 'react-inline-css';
import i18n from 'meteor/universe:i18n';

import { Resumes } from '../api/resumes/resumes.js';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export class App extends Component {
  // constructor(props) {
  //   super(props);
  //   i18n.setLocale('pl');
  // }

  // Take it out to the separate module
  static getFont(fontPath) {
    if(Meteor.isServer){
      return Assets.absoluteFilePath(fontPath);
    }
    // client
    return fontPath
  }

  static loadFontFaces() {
    return `
      @font-face {
        font-family: 'MontRgl';
        src: url('${ App.getFont('fonts/montserrat/MontRgl.ttf') }') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'MontLt';
        src: url('${ App.getFont('fonts/montserrat/MontLt.ttf') }') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: 'MontBld';
        src: url('${ App.getFont('fonts/montserrat/MontBld.ttf') }') format('truetype');
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "Flaticon";
        src: url('${ App.getFont('fonts/flaticon/Flaticon.ttf') }') format("truetype");
        font-weight: normal;
        font-style: normal;
      }

      @media screen and (-webkit-min-device-pixel-ratio:0) {
        @font-face {
          font-family: "Flaticon";
          src: url('${ App.getFont('fonts/flaticon/Flaticon.svg') }#Flaticon') format("svg");
        }
      }
      `
    }

    static externalStyles() {
      if(Meteor.isServer){
        return Assets.getText('stylesheets/bootstrap.min.css')
      }
    }

    static componentStyles() {
      return `
      html, body {
        margin: 1.5em 0.8em 0 0;
        padding: 0;
        font-family: "MontLt";
      }

      a, a:visited, a:active {
        font-family: "MontRgl";
        color: #16a085;
      }

      a:hover {
        color: #16a085;
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
        line-height: 1.2;
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

      h3 {
        padding-bottom: 1em !important;
      }

      h4, h5 {
        padding-bottom: 0.5em !important;
      }

      [class^="flaticon-"]:before, [class*=" flaticon-"]:before,
      [class^="flaticon-"]:after, [class*=" flaticon-"]:after {
        font-family: Flaticon;
        font-size: 20px;
        font-style: normal;
        margin-left: 20px;
      }

      .flaticon-monitor:before { content: "\\f100"; }
      .flaticon-guitar:before { content: "\\f101"; }
      .flaticon-saw:before { content: "\\f102"; }
      .flaticon-luxury:before { content: "\\f103"; }
      .flaticon-music-1:before { content: "\\f104"; }
      .flaticon-women:before { content: "\\f105"; }
      .flaticon-fashion:before { content: "\\f106"; }
      .flaticon-diploma:before { content: "\\f107"; }
      .flaticon-airplane:before { content: "\\f108"; }
      .flaticon-bulb:before { content: "\\f109"; }
      .flaticon-raquet:before { content: "\\f10a"; }
      .flaticon-basketball:before { content: "\\f10b"; }
      .flaticon-trophy:before { content: "\\f10c"; }
      .flaticon-oscar:before { content: "\\f10d"; }
      .flaticon-book:before { content: "\\f10e"; }
      .flaticon-open-book:before { content: "\\f10f"; }
      .flaticon-music:before { content: "\\f110"; }
      .flaticon-people:before { content: "\\f111"; }

      *[class^='flaticon-'].big {
        color: #16a085;
      }

      *[class^='flaticon-'].big:before {
        font-size: 3em;
        margin-left: 0;
      }

      .col-xs-15,
      .col-sm-15,
      .col-md-15,
      .col-lg-15 {
        position: relative;
        min-height: 1px;
        padding-right: 5px;
        padding-left: 5px;
      }

      .col-xs-15 {
        width: 20%;
        float: left;
      }

      figure, figure figcaption {
        text-align: center;
      }

      figure span[class^="flaticon-"], figure span[class*=" flaticon-"] {
        vertical-align: top;
        display: inline-block;
        float: none;
        padding-right: 0
      }

      *, *:before, *:after {box-sizing:  border-box !important;}

      .content.row {
        -webkit-columns: 0 0;
                  /* This is the strange way to define the number of columns:
                     50% = 2 columns, 33% = 3 columns 25% = 4 columns */
        -webkit-column-gap: 30px;
        width: 50%;
        height: 1410px;
      }

      .menu-category {
        display: inline-block;
        padding: 1em 1.5em;
        width:  100%;
      }

      /* Common Awards & Certifications section */

      #awards [class^="flaticon-"], #awards [class*=" flaticon-"],
      #certifications [class^="flaticon-"], #certifications [class*=" flaticon-"] {
        float: left;
      }

      #awards ul, #certifications ul {
        list-style: none;
        padding: 0;
      }

      #awards li, #certifications li {
        padding-bottom: 1em;
      }

      #awards li:last-child, #certifications li:last-child {
        padding-bottom: 0;
      }

      #awards .award-content, #certifications .certification-content {
        padding: 10px 0 0 60px;
      }

      #awards h4, #certifications h4 {
        margin-bottom: 20px !important;
      }

      /* Common Skills & Languages */

      .progress {
        background: transparent;
        border: 1px solid #aaa;
        border-radius: 0px;
        height: 13px;
        margin-top: 3px;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
        padding: 0;
      }

      .progress-bar-custom {
        background: rgba(66, 139, 202, 0);
        border: 1px solid #16a085;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
      }
    `
  }

  static styles() {
    return App.loadFontFaces() +
           App.externalStyles() +
           App.componentStyles()
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
      <InlineCss namespace="App" stylesheet={ App.styles() }>
        <div className="top-wrapper">
          <div className="container">
            {this.renderHeader()}
            {this.renderContent()}
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
