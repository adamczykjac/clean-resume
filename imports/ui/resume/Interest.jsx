import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Interest extends Component {
  render() {
    return (
      <div className={"col-xs-" + this.props.colWidth + " lang-wrapper"}>
        <figure>
          <span className={"flaticon-" + this.props.data.icon + " big"}></span>
          <figcaption>{ this.props.data.name }</figcaption>
        </figure>
      </div>
    );
  }
}

Interest.propTypes = {
  data: PropTypes.object.isRequired
};
