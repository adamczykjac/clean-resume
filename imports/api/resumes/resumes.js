import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Resumes = new Mongo.Collection('resumes');

Resumes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

let locationSchema = new SimpleSchema({
  "address": {
    type: String,
    optional: true
  },
  "postalCode": {
    type: String,
    optional: true,
  },
  "city": {
    type: String,
    // workaround
    optional: true
  },
  "countryCode": {
    type: String,
    // workaround
    optional: true
  },
  "region": {
    type: String,
    optional: true
  },
})

Resumes.schema = new SimpleSchema({
  // Basics
  "basics": {
    type: Object,
  },
  "basics.name": {
    type: String,
    label: 'Name'
  },
  "basics.label": {
    type: String,
    label: 'Label',
    optional: true
  },
  "basics.email": {
    type: String,
    label: 'email'
  },
  "basics.website": {
    type: String,
    label: 'Website',
    optional: true
  },
  "basics.phone": {
    type: String,
    label: 'Phone'
  },
  "basics.location": locationSchema,
  // Skills
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
      optional: true,
      min: 0,
      max: 100
  },
  'skills.$.keywords': {
      type: Array,
      optional: true
  },
  'skills.$.keywords.$': {
      type: String
  },
  // Awards
  awards: {
      type: Array,
      optional: true
  },
  'awards.$': Object,
  'awards.$.title': {
      type: String
  },
  'awards.$.date': {
      type: String
  },
  'awards.$.awarder': {
      type: Object
  },
  'awards.$.awarder.name': {
      type: String
  },
  'awards.$.awarder.website': {
      type: String,
      optional: true
  },
  'awards.$.awarder.location': {
    type: locationSchema
  },
  'awards.$.summary': {
      type: String
  },
  // Work
  work: {
      type: Array,
      minCount: 1
  },
  'work.$': Object,
  'work.$.company': {
      type: String
  },
  'work.$.position': {
      type: String
  },
  'work.$.websites': {
      type: Array,
      optional: true
  },
  'work.$.websites.$': {
      type: String
  },
  'work.$.startDate': {
      type: String
  },
  'work.$.endDate': {
      type: String,
      optional: true
  },
  'work.$.endDate': {
      type: String,
      optional: true
  },
  'work.$.location': locationSchema,
  'work.$.summary': {
      type: String,
      optional: true
  },
  // Education
  education: {
      type: Array,
      minCount: 1
  },
  'education.$': Object,
  'education.$.institution': Object,
  'education.$.institution.name': {
      type: String
  },
  'education.$.institution.location': locationSchema,
  'education.$.area': {
      type: String
  },
  'education.$.studyType': {
      type: String
  },
  'education.$.startDate': {
      type: String
  },
  'education.$.endDate': {
      type: String,
      optional: true
  },
  'education.$.gpa': {
      type: String,
      optional: true
  },
  'education.$.courses': {
      type: Array,
      optional: true
  },
  'education.$.courses.$': {
      type: String
  },
  // Languages
  languages: {
      type: Array,
      minCount: 1
  },
  'languages.$': Object,
  'languages.$.language': {
      type: String
  },
  'languages.$.fluency': {
      type: String
  },
  'languages.$.level': {
      type: Number
  },
  'languages.$.certificate': {
      type: Boolean,
      optional: true
  },
  // Certifications
  certifications: {
      type: Array,
      optional: true
  },
  'certifications.$': Object,
  'certifications.$.name': {
      type: String
  },
  'certifications.$.date': {
      type: String,
      optional: true
  },
  'certifications.$.expiryDate': {
      type: String,
      optional: true
  },
  'certifications.$.authority': {
      type: String,
      optional: true
  },
  // Interests
  interests: {
      type: Array,
      minCount: 1
  },
  'interests.$': Object,
  'interests.$.name': {
      type: String
  },
  'interests.$.icon': {
      type: String
  },
})

Resumes.attachSchema(Resumes.schema)
