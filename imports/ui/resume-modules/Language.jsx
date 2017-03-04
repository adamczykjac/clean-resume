import React, { Component, PropTypes } from 'react';
import CircularProgressBar from './language/CircularProgressBar.jsx';

// Language component
export default class Language extends Component {
  render() {
    console.log(this.props.key);

    return (
      <div className="col-xs-3 lang-wrapper">
        <CircularProgressBar level={ this.props.lang.level } id={ this.props.id } />
        <div className="lang-label-wrapper">
          <label>
            <span>{ this.props.lang.language }</span>
            <span>{ this.props.lang.fluency }</span>
          </label>
        </div>
      </div>
    );
  }
}

Language.propTypes = {
  lang: PropTypes.object.isRequired
};
