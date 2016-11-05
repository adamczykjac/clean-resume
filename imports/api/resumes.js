import { Mongo } from 'meteor/mongo';

export const Resumes = new Mongo.Collection('resumes');

if (Meteor.isServer) {
  Meteor.publish('resumes.get', ( resumeId ) => {
    oid = {}
    if(resumeId && resumeId != {}) {
      let oid = new Meteor.Collection.ObjectID(resumeId);
    }
    return Resumes.find(oid);
  });
}
