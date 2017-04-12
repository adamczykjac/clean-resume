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
