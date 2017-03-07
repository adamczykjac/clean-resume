import React, { Component, PropTypes } from 'react';
import AutoForm from 'uniforms-bootstrap3/AutoForm';
import { ResumeSchema } from '../../lib/ResumeSchema.js'

export default class EntryFom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ResumeSchema: ResumeSchema
    };
  }

  render() {
    return (
      <div className="container">
        <AutoForm schema={ this.state.ResumeSchema } onSubmit={doc => console.log(doc)} />
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
