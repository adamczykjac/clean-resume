import React, { Component } from 'react';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="cleanresume-side-big">
          <header>
            <div className="col-sm-6 col-xs-12 slogan">
              <div className="col-md-1 col-xs-2 timeline-wrapper">
                <div className="timeline">
                  <div className="timeline-before"></div>
                  <div className="bullet"></div>
                </div>
              </div>
              <div className="col-md-11 col-xs-1-offset col-xs-10">
                <div className="slogan-texts">
                  <h1>Clean Resume,</h1>
                  <h2>At your service.</h2>
                  <div className="btn btn-lg">Get One</div>
                </div>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </header>
          <footer className="col-xs-12">
            &copy; Clean Resume, 2017
          </footer>
        </div>
      </div>
    );
  }
}
