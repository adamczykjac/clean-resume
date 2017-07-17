import { Meteor } from 'meteor/meteor';
import { Resumes } from '../../imports/api/resumes/resumes.js'
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import React, { Component, PropTypes } from 'react';
import { base64ToBlob } from '../modules/base64-to-blob.js'
import fileSaver from 'file-saver'
import wkhtmltopdf from 'wkhtmltopdf';

import getModelFixtures from '../startup/modelFixtures.js'

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryForm: {}
    };
  }

  componentDidMount() {
    this.state.entryForm.submit();
  }

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

  render() {
    return (
      <div className="container">
        <AutoForm ref={ref => this.state.entryForm = ref}
                  schema={ Resumes.schema }
                  onSubmit={ data => this.handleForm(data) }
                  model = { getModelFixtures() } />
      </div>
    );
  }
}
