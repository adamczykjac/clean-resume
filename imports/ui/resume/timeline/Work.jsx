import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import { getPeriod, getFlagSpan } from './utils.js'

const T = i18n.createComponent()

export default class Work extends Component {
  getWorkplaceBio(workData) {
    let bioTokens = []
    if(workData.company)
      if(workData.website)
        bioTokens.push(<a href={ workData.website } target="_blank">{ workData.company }</a>);
      else bioTokens.push(workData.company);
    if(workData.location.city)
      if(workData.location.countryCode)
        bioTokens.push(<span> | </span>);
        bioTokens.push(
          <span>
            { workData.location.city } { getFlagSpan(workData.location.countryCode) }
          </span>
        );
    if(workData.startDate) {
      bioTokens.push(<span> | </span>);
      dateBoundaries = { startDate: workData.startDate };
      if(workData.endDate) dateBoundaries['endDate'] = workData.endDate;
      bioTokens.push(getPeriod(dateBoundaries))
    }
    return (
      <h5>
        { bioTokens }
      </h5>
    )
  }

  render() {
    return (
      <div className="timeline-body">
        <h4>{ this.props.work.position }</h4>
        { this.getWorkplaceBio(this.props.work) }
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
