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
    return (
      <header className="row">
              <div className="col-md-6 col-xs-5">
                  <div className="row">
                      <div className="col-xs-2 col-md-3 col-lg-2 col-md-offset-0">
                        <img className="img-circle avatar" src="img/profilepic.png" />
                      </div>
                      <div className="col-xs-8 col-xs-offset-2 col-sm-offset-2">
                        <h2 className="main-lead">{ this.props.basics.name }</h2>
                        <h5 className="sub-lead">{ this.props.basics.label }</h5>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 col-xs-7">
                  <table className="table contact">
                    <tbody>
                      <tr>
                          <td>Mail</td>
                          <td><a href="#" target="_blank">{ this.props.basics.website }</a></td>
                      </tr>
                      <tr>
                          <td>Web</td>
                          <td><a href="#" target="_blank">{ this.props.basics.email }</a></td>
                      </tr>
                      <tr>
                          <td>Tel</td>
                          <td>{ this.props.basics.phone }</td>
                      </tr>
                      <tr>
                          <td>Lokalizacja</td>
                          <td>{ this.renderLocation() }</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
      </header>
    );
  }
}
