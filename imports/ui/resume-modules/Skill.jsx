import React, { Component, PropTypes } from 'react';
import InlineCss from 'react-inline-css';

// Skill component
export default class Skill extends Component {
  static styles() {
    return `
      #skills .list-group-item {
        border: 0;
        padding: 0.4em 0.5em 0.4em 0;
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
        border: 1px solid #EB5757;
        -webkit-box-shadow: inset 0 0px 0px;
        box-shadow: inset 0 0px 0px;
      }
    `
  }
  
  render() {
    return (
      <InlineCss stylesheet={ Skill.styles() }>
        <div className="list-group-item">
          <div className="col-xs-6 col-md-4 skill-caption">
            { this.props.skill.name }
          </div>
          <div className="col-xs-6 col-md-5 progress">
            <div className="progress-bar progress-bar-custom"
              role="progressbar"
              aria-valuenow={ this.props.skill.level }
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: this.props.skill.level+'%' }}>
            </div>
          </div>
        </div>
      </InlineCss>
    );
  }
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};
