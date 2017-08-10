import { Resumes } from '../resumes';

Meteor.publish('resumes', () => Resumes.find());
