import React, { Component, PropTypes } from 'react';

export default class Skill extends Component {
  render() {
    return (
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
    );
  }
}

Skill.propTypes = {
  skill: PropTypes.object.isRequired
};
