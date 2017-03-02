import React, { Component, PropTypes } from 'react';

// Interest component
export default class Interest extends Component {
  render() {
    return (
      <div className="col-xs-3">
        <figure>
          <span className={"flaticon-" + this.props.interest.icon + " big"}></span>
          <figcaption>{ this.props.interest.name }</figcaption>
        </figure>
      </div>
    );
  }
}

Interest.propTypes = {
  interest: PropTypes.object.isRequired
};
