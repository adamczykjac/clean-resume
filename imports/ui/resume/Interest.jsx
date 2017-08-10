import React, { Component, PropTypes } from 'react';

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
