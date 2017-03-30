import React, { Component, PropTypes } from 'react';
import InlineCss from 'react-inline-css';

// Header component
export default class Header extends Component {
  // static getFont(fontPath) {
  //   let assetFontPath = 'fonts/' + fontPath
  //   if(Meteor.isServer){
  //     return Assets.absoluteFilePath(assetFontPath);
  //   }
  //   return assetFontPath
  // }
  // 
  // static styles() {
  //   return `
  //     @font-face {
  //         font-family: 'MontRgl';
  //         src: url('${ Header.getFont('montserrat/MontRgl.ttf') }') format('truetype');
  //         font-weight: normal;
  //         font-style: normal;
  //     }
  //     
  //     @font-face {
  //         font-family: 'MontLt';
  //         src: url('${ Header.getFont('montserrat/MontLt.ttf') }') format('truetype');
  //         font-weight: normal;
  //         font-style: normal;
  //     }
  //     
  //     @font-face {
  //         font-family: 'MontBld';
  //         src: url('${ Header.getFont('montserrat/MontBld.ttf') }') format('truetype');
  //         font-weight: normal;
  //         font-style: normal;
  //     }
  //   
  //     .main-lead {
  //       color: #EB5757;
  //       margin: 0;
  //       letter-spacing: normal;
  //     }
  // 
  //     .sub-lead {
  //       font-family: 'MontLt';
  //       letter-spacing: 0.2em;
  //       color: #6b6d70;
  //       margin: 0.3em 0 0 0;
  //       text-transform: uppercase;
  //       font-size: 0.9em
  //     }
  // 
  //     .avatar {
  //       margin: 0;
  //       width: 6em;
  //       float: left;
  //     }
  //     
  //     .contact {
  //       position: relative;
  //       left: -4px;
  //     }
  // 
  //     .contact td:first-child {
  //       text-transform: uppercase;
  //       float: right;
  //       font-family: 'MontBld';
  //       font-size: 0.8em;
  //       vertical-align: text-bottom;
  //       margin-top: 0.28em;
  //     }
  // 
  //     .social {
  //       position: relative;
  //       left: 11px;
  //     }
  // 
  //     .social td:first-child {
  //       float: right;
  //       font-size: 1.5em;
  //     }
  // 
  //     .social td {
  //       vertical-align: middle;
  //       padding: 0.1em 0.375em;
  //     }
  //   `
  // } 
  
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
