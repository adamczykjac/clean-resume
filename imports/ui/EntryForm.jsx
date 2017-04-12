import { Meteor } from 'meteor/meteor';
import { Resumes } from '../../imports/api/resumes/resumes.js'
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import React, { Component, PropTypes } from 'react';
import { base64ToBlob } from '../modules/base64-to-blob.js'
import fileSaver from 'file-saver'
import wkhtmltopdf from 'wkhtmltopdf';

import getModelFixtures from '../startup/modelFixtures.js'

// getModelFixtures = () => ({
//   basics: {
//     name: 'John Doe',
//     label: 'Consultant',
//     email: 'john@doe.com',
//     web: 'johndoe.com'
//   }
// })

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResumeSchema: Resumes.schema
    };
  }

  // // TEMP
  // componentDidMount() {
  //   Meteor.call('resumes.download', { resumeId: '58d2d48d945f3a9097406a68'}, (error, response) => {
  //     if (error) {
  //       console.log(error);
  //       Bert.alert(error.reason, 'danger');
  //     } else {
  //       const blob = base64ToBlob(response.base64);
  //       fileSaver.saveAs(blob, response.fileName);
  //     }
  //   })
  // }

  handleForm(data) {
    console.log(data);
    Meteor.call('resumes.insert', data , (error, _id) => {
      if (error) {
      console.log(error);
      Bert.alert(error.reason, 'danger');
    } else {
      Meteor.call('resumes.download', { resumeId: _id }, (error, response) => {
        if (error) {
          console.log(error);
          Bert.alert(error.reason, 'danger');
        } else {
          const blob = base64ToBlob(response.base64);
          fileSaver.saveAs(blob, response.fileName);
        }
      })
    }
    });
    return true;
  }

// TEMP
  render() {
    return (
      <div className="container">
        <AutoForm schema={ this.state.ResumeSchema }
                  onSubmit={ data => this.handleForm(data) }
                  onChangeModel = { model => console.log(model) }
                  model = { getModelFixtures() } />
      </div>
    );
  }
}
