import { Meteor } from 'meteor/meteor';
import { Resumes } from './resumes.js'
import { ValidatedMethod } from 'meteor/mdg:validated-method';

export const insert = new ValidatedMethod({
  name: 'resumes.insert',
  validate: () => {
    console.log('Hello');
  },
  run(resume) {
    // const list = Lists.findOne(listId);
    //
    // if (list.isPrivate() && list.userId !== this.userId) {
    //   throw new Meteor.Error('todos.insert.accessDenied',
    //     'Cannot add todos to a private list that is not yours');
    // }
    //
    // const todo = {
    //   listId,
    //   text,
    //   checked: false,
    //   createdAt: new Date(),
    // };

    Resumes.insert(resume);
  }
});
