import { base64ToBlob } from '../modules/base64-to-blob.js';
import { Meteor } from 'meteor/meteor';
import { Resumes } from '../../imports/api/resumes/resumes.js';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import fileSaver from 'file-saver';
import InlineCss from 'react-inline-css';
import React, { Component, PropTypes } from 'react';
import wkhtmltopdf from 'wkhtmltopdf';

import getModelFixtures from '../startup/modelFixtures.js'

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryForm: {}
    };
  }

  static styles() {
    return `
      .logo {
        text-align: center;
      }

      .logo img {
        height: 40px;
      }
    `
  }

  handleForm(data) {
    console.log(data);
    Meteor.call('resumes.insert', data , (error, _id) => {
      if (error) {
        console.log(error);
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Your data has reached our team and we are processing them now to provide you some beautiful Earrly resume, thank you!', 'success');
      }
    });
    return true;
  }

  render() {
    return (
      <InlineCss stylesheet={ EntryForm.styles() }>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <div className="logo">
                <img src="img/earrly_beta_logo.png"/>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-md-offset-3">
              <AutoForm ref={ref => this.state.entryForm = ref}
                schema={ Resumes.schema }
                onSubmit={ data => this.handleForm(data) }
                model = { getModelFixtures() } />
            </div>
          </div>
        </div>
      </InlineCss>
    );
  }
}
