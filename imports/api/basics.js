import { Mongo } from 'meteor/mongo';

export const Basics = new Mongo.Collection('resumes');

if (Meteor.isServer) {
  Meteor.publish('basics', ( resumeId ) => {
    return Basics.find({});
  });
}
