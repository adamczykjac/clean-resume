import React, { Component, PropTypes } from 'react';

// Interest component
export default class Interest extends Component {
  render() {
    return (
      <div className="col-xs-4 col-sm-15">
        <figure>
          <span className={this.props.interest.icon + " big"}></span>
          <figcaption>{ this.props.interest.name }</figcaption>
        </figure>
      </div>
    );
  }
}

Interest.propTypes = {
  interest: PropTypes.object.isRequired
};
