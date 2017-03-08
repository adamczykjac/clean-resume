import { insert } from '../../imports/api/resumes/methods.js'
import { Meteor } from 'meteor/meteor';
import { Resumes } from '../../imports/api/resumes/resumes.js'
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import React, { Component, PropTypes } from 'react';

export default class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResumeSchema: Resumes.schema
    };
  }

  render() {
    return (
      <div className="container">
        <AutoForm schema={ this.state.ResumeSchema } onSubmit={ data => insert.call(data) } />
      </div>
    );
  }
}

// Content.propTypes = {
//   skills: PropTypes.array,
//   awards: PropTypes.array,
//   works: PropTypes.array,
//   educations: PropTypes.array,
//   languages: PropTypes.array,
//   certifications: PropTypes.array,
//   interests: PropTypes.array
// };
