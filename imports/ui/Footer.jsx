import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import InlineCss from 'react-inline-css';
import { createContainer } from 'meteor/react-meteor-data';
import { Resumes } from '../api/resumes/resumes.js'

export class Footer extends Component {
  static styles() {
    return `
      footer {
        text-align: center;
        font-size: 1em;
        padding: 0;
      }

      footer a.regular-text {
        color: inherit;
        font-family: 'MontRgl';
      }
    `
  }

  render() {
    return this.props.loading ? null : (
      <InlineCss stylesheet={ Footer.styles() }>
        <footer>
          <hr />
          Crafted with <a href="http://earrly.com">earrly.com</a> &copy; 2017 - Icon credits:&nbsp;
          <a href="http://flaticon.com" target="_blank" className="regular-text">flaticon.com</a>
        </footer>
      </InlineCss>
    );
  }
};

export const FooterContainer = createContainer(({ params }) => {
  let basics = {};
  let content = {};

  const resumesSub = Meteor.subscribe('resumes.get');
  const loading = !resumesSub.ready();

  let resume = Resumes.findOne({ _id: '58d2d48d945f3a9097406a68' });

  // if(resume) {
  //   basics = resume.basics,
  //   content = {
  //     skills: resume.skills,
  //     awards: resume.awards,
  //     languages: resume.languages,
  //     works: resume.work,
  //     educations: resume.education,
  //     certifications: resume.certifications,
  //     interests: resume.interests
  //   }
  // }
  return { loading, resume };
}, Footer);
