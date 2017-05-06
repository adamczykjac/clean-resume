import React, { Component, PropTypes } from 'react';
import i18n from 'meteor/universe:i18n';
import { renderWorkPeriod } from './utils.js'

const T = i18n.createComponent()

export default class Work extends Component {
  render() {
    const HTTP_PROTOCOL = 'http://'

    return (
      <div className="timeline-body">
        <h4>{ this.props.work.position }</h4>
        <h5>{ this.props.work.company } | { renderWorkPeriod(this.props.work.startDate, this.props.work.endDate) }</h5>
        { this.props.work.summary ? (<p>{ this.props.work.summary }</p>) : null }
        { this.props.work.websites ?
          this.props.work.websites.map( (website) => (
            <a href={website} className="company-link" target="_blank">
              { website.replace(HTTP_PROTOCOL, "") }
            </a>
          ))
          : null }
      </div>
    );
  }
}

Work.propTypes = {
  work: PropTypes.object.isRequired
};
