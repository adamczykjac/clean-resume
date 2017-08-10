import React, { Component, PropTypes } from 'react';

export default class Award extends Component {
  render() {
    const HTTP_PROTOCOL = 'http://'

    return (
      <li>
        <span className="flaticon-trophy big"></span>
        <div className="award-content">
          <h4>{ this.props.award.title }</h4>
          <h5>{ this.props.award.awarder.name } | { this.props.award.awarder.location.city } <span className={"flag-icon flag-icon-" + this.props.award.awarder.location.countryCode}></span> | { this.props.award.date }</h5>
          <a href={this.props.award.awarder.website} className="company-link" target="_blank">
            { this.props.award.awarder.website.replace(HTTP_PROTOCOL, "") }
          </a>
          <p>{ this.props.award.summary }</p>
        </div>
      </li>
    );
  }
}

Award.propTypes = {
  award: PropTypes.object.isRequired
};
