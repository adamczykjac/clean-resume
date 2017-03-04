import React, { Component, PropTypes } from 'react';
import { Line, Circle } from 'rc-progress';

// Language component
export default class Language extends Component {
  render() {
    return (
      <div className="col-xs-3 lang-wrapper">
        <img src={"img/circular-progress-bar-" + this.props.lang.level + "-8.svg"}/>
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
