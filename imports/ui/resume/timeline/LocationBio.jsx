import { getPeriod, getFlagSpan } from './utils.js';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineCss from 'react-inline-css';

export default class LocationBio extends Component {
  // Take it out to the separate module
  static externalStyles() {
    if(Meteor.isServer){
      return Assets.getText('stylesheets/flag-icon.css')
    }
  }

  getBioTokens(workData) {
    let bioTokens = []
    let separator = ' | '
    let locationData = this.props.locationData

    if(locationData.authority)
      if(locationData.website)
        bioTokens.push(<a href={ locationData.website } target="_blank">{ locationData.authority }</a>);
      else bioTokens.push(locationData.authority);
    if(locationData.location.city)
      if(locationData.location.countryCode)
        bioTokens.push(separator);
        bioTokens.push(
          <span>
            { locationData.location.city } { getFlagSpan(locationData.location.countryCode) }
          </span>
        );
    if(locationData.startDate) {
      bioTokens.push(separator);
      dateBoundaries = { startDate: locationData.startDate };
      if(locationData.endDate) dateBoundaries['endDate'] = locationData.endDate;
      bioTokens.push(getPeriod(dateBoundaries));
    }
    return bioTokens;
  }

  render() {
    return (
      <InlineCss stylesheet={ LocationBio.externalStyles() }>
        <h5>
          {
            this.getBioTokens().map((token, idx) => (
              <span key={idx}>{ token }</span>
            ))
          }
        </h5>
      </InlineCss>
    );
  }
}

LocationBio.propTypes = {
  locationData: PropTypes.object.isRequired
};
