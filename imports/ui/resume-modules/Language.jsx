import React, { Component, PropTypes } from 'react';
import { Line, Circle } from 'rc-progress';

// Language component
export default class Language extends Component {
  render() {
    return (
      <div className="col-xs-6 col-sm-3">
        <div className="lang-label-wrapper">
          <label htmlFor="lang-bar">
            <span>{ this.props.lang.language }</span>
            <span>{ this.props.lang.fluency }</span>
          </label>
        </div>
        <Circle percent={ this.props.lang.level } strokeWidth="2" strokeColor="#eb4b52" trailWidth="0" id="lang-bar"/>
      </div>
    );
  }
}

Language.propTypes = {
  lang: PropTypes.object.isRequired
};
