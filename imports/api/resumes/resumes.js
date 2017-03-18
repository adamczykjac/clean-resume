import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Resumes = new Mongo.Collection('resumes');

Resumes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Resumes.schema = new SimpleSchema({
  name: {
    type: String,
    label: 'Name'
  }
})

Resumes.attachSchema(Resumes.schema)
