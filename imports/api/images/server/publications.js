import Images from '../images'

Meteor.publish('files.images.all', () => Images.find().cursor);
