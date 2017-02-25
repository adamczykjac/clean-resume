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
                  <h1>Ear<div className="reverse">r</div>ly,</h1>
                  <h2>The very first impression, done right.</h2>
                  <h4 className="thinner">We want to beautify your resume, <br />
                    tell us about your needs.</h4>
                  <a href="https://goo.gl/forms/ZGd4p1AoSHpjktj53" className="btn btn-lg" target="_blank">Fill the survey</a>
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
