import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Resumes = new Mongo.Collection('resumes');

Resumes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Resumes.schema = new SimpleSchema({
  "basics": {
    type: Object,
  },
  "basics.name": {
    type: String,
    label: 'Name'
  },
  "basics.label": {
    type: String,
    label: 'Label'
  },
  "basics.email": {
    type: String,
    label: 'email'
  },
  "basics.website": {
    type: String,
    label: 'Website'
  },
  "basics.phone": {
    type: String,
    label: 'Phone'
  },
  "basics.location": {
    type: Object
  },
  "basics.location.address": {
    type: String
  },
  "basics.location.postalCode": {
    type: String
  },
  "basics.location.city": {
    type: String
  },
  "basics.location.countryCode": {
    type: String
  },
  "basics.location.region": {
    type: String
  },
  skills: {
      type: Array,
      minCount: 1
  },
  'skills.$': Object,
  'skills.$.name': {
      type: String
  },
  'skills.$.level': {
      type: Number,
      min: 0,
      max: 100
  },
  awards: {
      type: Array,
      minCount: 1
  },
  'awards.$': Object,
  'awards.$.title': {
      type: String
  },
  'awards.$.date': {
      type: String
  },
  'awards.$.awarder': {
      type: String
  },
  'awards.$.summary': {
      type: String
  }
})

Resumes.attachSchema(Resumes.schema)
