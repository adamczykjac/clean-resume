import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Resumes } from '../resumes.js'
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';
import { generateComponentAsPDF } from '../../../modules/server/generate-pdf.js';
import Footer from '../../../ui/Footer.jsx';
import { Bert } from 'meteor/themeteorchef:bert';

export const downloadResume = new ValidatedMethod({
  name: 'resumes.download',
  validate: new SimpleSchema({
    resumeId: { type: String },
  }).validator(),
  run({ resumeId }) {
    const resume = Resumes.findOne({ _id: resumeId });
    const fileName = `resume_${resume._id}.pdf`;
    return generateComponentAsPDF({ component: <Footer resume={ resume }/>, fileName })
    .then((result) => result)
    .catch((error) => {
      console.log(error);
      throw new Meteor.Error('500', error);
    });
  },
});
