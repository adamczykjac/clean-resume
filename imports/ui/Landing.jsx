import React, { Component } from 'react';

export default class Landing extends Component {
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
                  <h1>earrl<div className="reverse">,y</div></h1>
                  <h2>The very first impression, done right.</h2>
                  <h4 className="thinner">We want to beautify your resume, <br />
                    tell us about your needs (and fill the survey)!</h4>
                  <a href="https://goo.gl/forms/ZGd4p1AoSHpjktj53" className="btn btn-lg col-md-5 col-md-offset-1 col-xs-10" target="_blank">I'm an applicant</a>
                  <a href="https://goo.gl/forms/k6gLEbeAM0BvedPi1" className="btn btn-lg col-md-5 col-md-offset-1 col-xs-10" target="_blank">I'm a recruiter</a>
                </div>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </header>
          <footer className="col-xs-12">
            &copy; earrly.com, 2017
          </footer>
        </div>
      </div>
    );
  }
}
