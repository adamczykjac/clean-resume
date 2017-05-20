import React, { Component, PropTypes } from 'react';
import CircularProgressBar from './language/CircularProgressBar.jsx';
import InlineCss from 'react-inline-css';

export default class Language extends Component {
  static styles() {
    return `
      #languages > [class*=' col-'] {
        padding: 15px;
      }

      #languages .menu-category {
        padding-top: 0;
      }

      #languages .lang-wrapper {
        text-align: center;
        margin-bottom: -35px;
      }

      #languages .lang-label-wrapper {
        position: relative;
        top: -68px;
      }

      #languages .lang-label-wrapper label{
        text-transform: uppercase;
      }

      #languages .lang-label-wrapper label > span {
        display: block;
      }
      `
  }

  render() {
    return (
      <InlineCss stylesheet={ Language.styles() }>
        <div className={"col-xs-" + this.props.colWidth + " lang-wrapper"}>
          <CircularProgressBar level={ this.props.data.level } id={ this.props.id } />
          <div className="lang-label-wrapper">
            <label>
              <span>{ this.props.data.language }</span>
              <span className="fluency">
                { this.props.data.fluency }
                { this.props.data.certificate ? "*" : "" }
              </span>
            </label>
          </div>
        </div>
      </InlineCss>
    );
  }
}

Language.propTypes = {
  data: PropTypes.object.isRequired
};
