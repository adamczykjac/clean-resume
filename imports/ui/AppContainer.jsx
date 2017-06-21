import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import AppLayout from './AppLayout'
import { Resumes } from '../api/resumes/resumes.js';

// Fetch data from minimongo and pass it to React component
export const AppContainer = createContainer(({ params }) => {
  let basics = {};
  let details = {};

  const resumesSub = Meteor.subscribe('resumes.get');
  const loading = !resumesSub.ready();

  let resume = Resumes.findOne({ _id: 'A5EpRdiG2scfWkFKu' });
  if(!loading && resume) {
    basics = resume.basics,
    details = {
      skills: resume.skills,
      awards: resume.awards,
      languages: resume.languages,
      works: resume.work,
      educations: resume.education,
      certifications: resume.certifications,
      interests: resume.interests
    }
  }
  return { loading, basics, details };
}, AppLayout);
