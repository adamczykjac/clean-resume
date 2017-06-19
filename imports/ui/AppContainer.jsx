import { Meteor } from 'meteor/meteor';
import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import AppLayout from './AppLayout'
import { Resumes } from '../api/resumes/resumes.js';

// Fetch data from minimongo and pass it to React component
export const AppContainer = createContainer(({ params }) => {
  let basics = {};
  let content = {};

  const resumesSub = Meteor.subscribe('resumes.get');
  const loading = !resumesSub.ready();

  let resume = Resumes.findOne({ _id: '58d2d48d945f3a9097406a68' });
  if(!loading && resume) basics = resume.basics
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
  return { loading, basics };
}, AppLayout);
