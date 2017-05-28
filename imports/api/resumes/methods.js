import { Resumes } from './resumes.js'
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import SimpleSchema from 'simpl-schema';

export const insert = new ValidatedMethod({
  name: 'resumes.insert',
  validate: Resumes.schema.validator(),
  run(resume) {
    return Resumes.insert(resume);
  }
});

export const get = new ValidatedMethod({
  name: 'resumes.get',
  validate: new SimpleSchema({
    resumeId: { type: String }
  }).validator(),
  run({ resumeId }) {
    let resume = Resumes.findOne({ _id: resumeId })
    return resume
  }
});
