import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';

import { Basics } from '../api/basics.js';
// Header component
export default class Header extends Component {
  render() {
    // TODO Create a loading spinner
    // TODO Create a 'Social' component
    return this.props.loading ? null : (
      <header className="row">
              <div className="col-md-6">
                  <div className="row">
                      <div className="col-xs-2 col-md-3 col-lg-2 col-xs-offset-1 col-md-offset-0">
                          <img className='img-circle avatar push-down' src='img/profilepic.jpg' />
                      </div>
                      <div className="col-xs-7 col-xs-offset-1 col-sm-offset-2">
                        <div className="push-down">
                          <h2 className="main-lead">{ this.props.basics.basics.name }</h2>
                          <h5 className="sub-lead">{ this.props.basics.basics.label }</h5>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 push-down">
                  <table className="table contact">
                    <tbody>
                      <tr>
                          <td>Mail</td>
                          <td><a href="#">{ this.props.basics.basics.website }</a></td>
                      </tr>
                      <tr>
                          <td>Web</td>
                          <td><a href="#">{ this.props.basics.basics.email }</a></td>
                      </tr>
                      <tr>
                          <td>Phone</td>
                          <td>{ this.props.basics.basics.phone }</td>
                      </tr>
                      <tr>
                          <td>Location</td>
                          <td>{ this.props.basics.basics.location.city },
                            { this.props.basics.basics.location.region },
                            { this.props.basics.basics.location.countryCode }</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              <div className="col-sm-6 col-md-3 push-down">
                  <table className="table social">
                    <tbody>
                      <tr>
                          <td><i className="flaticon-twitter"></i></td>
                          <td><a href="#">@theRealJohn</a></td>
                      </tr>
                    </tbody>
                  </table>
              </div>
      </header>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string,
};

export default createContainer(({ params }) => {
  const subscription = Meteor.subscribe('basics', '581b93481c0dc022fdf3a5f8');
  const loading = !subscription.ready();
  basics = Basics.findOne({}, {fields: {'basics': 1}});
  return { loading, basics };
}, Header);
