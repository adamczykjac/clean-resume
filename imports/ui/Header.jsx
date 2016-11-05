import React, { Component, PropTypes } from 'react';

// Header component
export default class Header extends Component {
  renderLocation() {
    let city = this.props.basics.location.city;
    let region = this.props.basics.location.region;
    let countryCode = this.props.basics.location.countryCode;
    out = []
    out.push(typeof(city) == undefined ? null : city)
    out.push(typeof(region) == undefined ? null : region)
    out.push(typeof(countryCode) == undefined ? null : countryCode)
    return out.join(', ')
  }

  render() {
    // TODO Create a 'Social' component
    return (
      <header className="row">
              <div className="col-md-6">
                  <div className="row">
                      <div className="col-xs-2 col-md-3 col-lg-2 col-xs-offset-1 col-md-offset-0">
                          <img className='img-circle avatar push-down' src='img/profilepic.jpg' />
                      </div>
                      <div className="col-xs-7 col-xs-offset-1 col-sm-offset-2">
                        <div className="push-down">
                          <h2 className="main-lead">{ this.props.basics.name }</h2>
                          <h5 className="sub-lead">{ this.props.basics.label }</h5>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 push-down">
                  <table className="table contact">
                    <tbody>
                      <tr>
                          <td>Mail</td>
                          <td><a href="#">{ this.props.basics.website }</a></td>
                      </tr>
                      <tr>
                          <td>Web</td>
                          <td><a href="#">{ this.props.basics.email }</a></td>
                      </tr>
                      <tr>
                          <td>Phone</td>
                          <td>{ this.props.basics.phone }</td>
                      </tr>
                      <tr>
                          <td>Location</td>
                          <td>{ this.renderLocation() }</td>
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
