import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Resumes = new Mongo.Collection('resumes');

Resumes.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

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
  "basics.location": {
    type: Object
  },
  "basics.location.address": {
    type: String,
    optional: true
  },
  "basics.location.postalCode": {
    type: String,
    optional: true
  },
  "basics.location.city": {
    type: String
  },
  "basics.location.countryCode": {
    type: String
  },
  "basics.location.region": {
    type: String,
    optional: true
  },
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
      min: 0,
      max: 100
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
      type: String
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
  'work.$.website': {
      type: String,
      optional: true
  },
  'work.$.startDate': {
      type: String
  },
  'work.$.endDate': {
      type: String,
      optional: true
  },
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
  'education.$.institution': {
      type: String
  },
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
