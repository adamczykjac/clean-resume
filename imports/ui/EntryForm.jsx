import { Meteor } from 'meteor/meteor';
import { Resumes } from '../../imports/api/resumes/resumes.js'
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import React, { Component, PropTypes } from 'react';
import { base64ToBlob } from '../modules/base64-to-blob.js'
import fileSaver from 'file-saver'

import wkhtmltopdf from 'wkhtmltopdf';

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResumeSchema: Resumes.schema
    };
  }

  handleForm(data) {
    Meteor.call('resumes.insert', { name: data.name }, (error, response) => {
      if (error) {
      console.log(error);
      Bert.alert(error.reason, 'danger');
    } else {
      Meteor.call('resumes.download', { resumeId: 'gmtqR7NHiQPEK56z2'}, (error, response) => {
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

  render() {
    return (
      <div className="container">
        <AutoForm schema={ this.state.ResumeSchema } onSubmit={ data => this.handleForm(data) }/>
      </div>
    );
  }
}
