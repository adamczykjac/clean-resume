import React, { Component } from 'react';

// Header component
export default class Header extends Component {
  render() {
    return (
      <header className="row">
              <div className="col-md-6">
                  <div className="row">
                      <div className="col-xs-2 col-md-3 col-lg-2 col-xs-offset-1 col-md-offset-0">
                          <img className='img-circle avatar push-down' src='img/eda.jpg' />
                      </div>
                      <div className="col-xs-7 col-xs-offset-1 col-sm-offset-2">
                        <div className="push-down">
                          <h2 className="main-lead">Jacek Adamczyk</h2>
                          <h5 className="sub-lead">LEAN PRODUCT & PROCESS MANAGER / <br /> WEB DEVELOPMENT</h5>
                        </div>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 push-down">
                  <table className="table contact">
                    <tbody>
                      <tr>
                          <td>Mail</td>
                          <td><a href="#">jacek.adamczyk.me</a></td>
                      </tr>
                      <tr>
                          <td>Web</td>
                          <td><a href="#">jacek@adamczyk.me</a></td>
                      </tr>
                      <tr>
                          <td>Mobile</td>
                          <td>+48 514 716 760</td>
                      </tr>
                      <tr>
                          <td>Nationality</td>
                          <td>Polish</td>
                      </tr>
                      <tr>
                          <td>Location</td>
                          <td>Tilburg, Netherlands</td>
                      </tr>
                    </tbody>
                  </table>
              </div>
              <div className="col-sm-6 col-md-3 push-down">
                  <table className="table social">
                    <tbody>
                      <tr>
                          <td><i className="flaticon-linkedin"></i></td>
                          <td><a href="#">in/adamczykjac</a></td>
                      </tr>
                      <tr>
                          <td><i className="flaticon-twitter"></i></td>
                          <td><a href="#">@adamczykjac</a></td>
                      </tr>
                      <tr>
                          <td><i className="flaticon-github"></i></td>
                          <td><a href="#">adamczykjac</a></td>
                      </tr>
                    </tbody>
                  </table>
              </div>
      </header>
    );
  }
}