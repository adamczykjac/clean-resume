import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InlineCss from 'react-inline-css';

export default class Skill extends Component {
  static styles() {
    return `
      #skills .list-group-item {
        border: 0;
        background-color: transparent;
      }

      #skills .list-group-item .skill-caption {
        padding: 0;
      }

      .progress {
        background: transparent;
        border: 1px solid #aaa;
        border-radius: 0px;
        height: 13px;
        margin-top: 3px;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
        padding: 0;
      }

      .progress-bar-custom {
        background: rgba(66, 139, 202, 0);
        border: 1px solid #16a085;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
      }

      #skills .label-wrapper {
        display: inline-block;
      }

      #skills .label-wrapper .keyword {
        border: 1px solid #16a085;
        background-color: transparent;
        color: #16a085;
        font-size: 1em;
        line-height: 2;
        margin: 0 1px;
      }
    `
  }

  render() {
    return (
      <InlineCss stylesheet={ Skill.styles() }>
        <div className="list-group-item">
          <div className="col-xs-4 col-md-4 skill-caption">
            { this.props.skill.name }
          </div>
          <div className="col-xs-8 col-md-5">
          { this.props.skill.level &&
            <div className="progress">
              <div className="progress-bar progress-bar-custom"
                role="progressbar"
                aria-valuenow={ this.props.skill.level }
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: this.props.skill.level+'%' }}>
              </div>
            </div>
          }
          { this.props.skill.keywords &&
            this.props.skill.keywords.map( (keyword, idx) => (
              <div className="label-wrapper" key={idx}>
                <span className="label label-info keyword">{ keyword }</span>
              </div>
            ))
          }
          </div>
        </div>
      </InlineCss>
    );
  }
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};
