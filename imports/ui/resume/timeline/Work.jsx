import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import LocationBio from './LocationBio'

const T = i18n.createComponent()

export default class Work extends Component {
  renderWorkplaceBio() {
    let workplaceData = this.props.work
    if(workplaceData.company) {
      workplaceData['authority'] = workplaceData.company
      delete workplaceData.company
    }
    return <LocationBio locationData={ workplaceData } />
  }

  render() {
    return (
      <div className="timeline-body">
        <h4>{ this.props.work.position }</h4>
        { this.renderWorkplaceBio() }
        { this.props.work.summary &&
          <p>{ this.props.work.summary }</p>
        }
      </div>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
