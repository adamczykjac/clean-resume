import React, { Component, PropTypes } from 'react';
import CircularProgressBar from './language/CircularProgressBar.jsx';

export default class Language extends Component {
  render() {
    return (
      <div className={"col-xs-" + this.props.colWidth + " lang-wrapper"}>
        <CircularProgressBar level={ this.props.data.level } id={ this.props.id } />
        <div className="lang-label-wrapper">
          <label>
            <span>{ this.props.data.language }</span>
            <span>
              { this.props.data.fluency }
              { this.props.data.certificate ? "*" : "" }
            </span>
          </label>
        </div>
      </div>
    );
  }
}

Language.propTypes = {
  data: PropTypes.object.isRequired
};
