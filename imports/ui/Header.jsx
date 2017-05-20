import React, { Component, PropTypes } from 'react';
import InlineCss from 'react-inline-css';
import i18n from 'meteor/universe:i18n';

const T = i18n.createComponent();

export default class Header extends Component {
  // Take it out to the separate module
  static getAsset(assetPath) {
    if(Meteor.isServer){
      return Assets.absoluteFilePath(assetPath);
    }
    // client
    return assetPath
  }

  static styles() {
    return `
      .contact {
        position: relative;
        left: -7px;
      }

      .contact td:first-child {
        text-transform: uppercase;
        font-family: 'MontBld';
        font-size: 0.8em;
        text-align: right;
        vertical-align: text-bottom;
        margin-top: 0.28em;
        padding-right: 2.5em;
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
        color: #16a085;
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
        width: 7em;
        float: left;
      }
    `
  }

  renderLocation() {
    let city = this.props.basics.location.city;
    let region = this.props.basics.location.region;
    let countryCode = this.props.basics.location.countryCode;
    let out = []
    if (city != undefined || city != null) out.push(city)
    if (region != undefined || region != null) out.push(region)
    if (countryCode != undefined || countryCode != null) out.push(countryCode)
    return out.join(', ')
  }

  render() {
    const HTTP_PROTOCOL = 'http://'

    return (
      <InlineCss stylesheet={ Header.styles() }>
        <header className="row">
          <div className="col-md-6 col-xs-5">
            <div className="row">
              <div className="col-xs-2 col-md-3 col-lg-2 col-md-offset-0">
                <img className="img-circle avatar" src={ Header.getAsset('img/profilepic.png') } />
              </div>
              <div className="col-xs-8 col-xs-offset-2 col-sm-offset-2">
                <h2 className="main-lead">{ this.props.basics.name }</h2>
                <h5 className="sub-lead">{ this.props.basics.label }</h5>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-6">
            <table className="table contact">
              <tbody>
                { this.props.basics.email &&
                  <tr>
                    <td>Email</td>
                    <td><a href="#" target="_blank">{ this.props.basics.email }</a></td>
                  </tr>
                }
                { this.props.basics.website &&
                  <tr>
                    <td><T>Header.web</T></td>
                    <td><a href={this.props.basics.website} target="_blank">{ this.props.basics.website.replace(HTTP_PROTOCOL, "") }</a></td>
                  </tr>
                }
                { this.props.basics.phone &&
                  <tr>
                    <td><T>Header.phone</T></td>
                    <td>{ this.props.basics.phone }</td>
                  </tr>
                }
                { this.props.basics.location &&
                  <tr>
                    <td><T>Header.location</T></td>
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
