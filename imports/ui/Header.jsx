import React, { Component, PropTypes } from 'react';
import InlineCss from 'react-inline-css';

// Header component
export default class Header extends Component {
  static styles() {
    return `
      .contact {
        position: relative;
        left: -4px;
      }

      .contact td:first-child {
        text-transform: uppercase;
        float: right;
        font-family: 'MontBld';
        font-size: 0.8em;
        vertical-align: text-bottom;
        margin-top: 0.28em;
      }

      .social {
        position: relative;
        left: 11px;
      }

      .social td:first-child {
        float: right;
        font-size: 1.5em;
      }

      .social td {
        vertical-align: middle;
        padding: 0.1em 0.375em;
      }

      .main-lead {
        color: #EB5757;
        margin: 0;
        letter-spacing: normal;
      }

      .sub-lead {
        font-family: 'MontLt';
        letter-spacing: 0.2em;
        color: #6b6d70;
        margin: 0.3em 0 0 0;
        text-transform: uppercase;
        font-size: 0.9em
      }

      .avatar {
        margin: 0;
        width: 6em;
        float: left;
      }
    `
  }

  renderLocation() {
    let city = this.props.basics.location.city;
    let region = this.props.basics.location.region;
    let countryCode = this.props.basics.location.countryCode;
    let out = []
    out.push(typeof(city) == undefined ? null : city)
    out.push(typeof(region) == undefined ? null : region)
    out.push(typeof(countryCode) == undefined ? null : countryCode)
    return out.join(', ')
  }

  render() {
    return (
      <InlineCss stylesheet={ Header.styles() }>
        <header className="row">
          <div className="col-md-6 col-xs-5">
            <div className="row">
              <div className="col-xs-2 col-md-3 col-lg-2 col-md-offset-0">
                <img className="img-circle avatar" src="img/profilepic.jpg" />
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
                { this.props.basics.email &&
                  <tr>
                    <td>Mail</td>
                    <td><a href="#" target="_blank">{ this.props.basics.email }</a></td>
                  </tr>
                }
                { this.props.basics.web &&
                  <tr>
                    <td>Web</td>
                    <td><a href="#" target="_blank">{ this.props.basics.web }</a></td>
                  </tr>
                }
                { this.props.basics.phone &&
                  <tr>
                    <td>Phone</td>
                    <td>{ this.props.basics.phone }</td>
                  </tr>
                }
                { this.props.basics.location &&
                  <tr>
                    <td>Location</td>
                    <td>{ this.renderLocation() }</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </header>
      </InlineCss>
    );
  }
}

Header.propTypes = {
  basics: PropTypes.object.isRequired,
};
