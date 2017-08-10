import React, { Component } from 'react';
import PropTypes from 'prop-types';
import i18n from 'meteor/universe:i18n';
import { renderWorkPeriod } from './utils.js'

const T = i18n.createComponent()

export default class Work extends Component {
  renderCompany(name, url) {
    if(url) {
      return (
        <a href={url} target="_blank">
          { name }
        </a>
      )
    }
    else {
      return name
    }
  }

  render() {
    return (
      <div className="timeline-body">
        <h4>{ this.props.work.position }</h4>
        <h5>{ this.renderCompany(this.props.work.company, this.props.work.websites[0]) } | { this.props.work.location.city } <span className={"flag-icon flag-icon-" + this.props.work.location.countryCode}></span> | { renderWorkPeriod(this.props.work.startDate, this.props.work.endDate) }</h5>
        { this.props.work.summary ? (<p>{ this.props.work.summary }</p>) : null }
      </div>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
