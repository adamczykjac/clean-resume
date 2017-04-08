import { Meteor } from 'meteor/meteor';
import { Resumes } from '../resumes';

Meteor.publish('resumes', () => Resumes.find());
