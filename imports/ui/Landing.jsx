import React, { Component } from 'react';

export class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <div className="cleanresume-side-big">
          <header>
            <div className="col-sm-6 col-xs-12 slogan">
              <div className="col-xs-1 timeline-wrapper">
                <div className="timeline">
                  <div className="timeline-before"></div>
                  <div className="timeline-badge primary"><a><div className="circle"></div></a></div>
                </div>
              </div>
              <div className="col-xs-11">
                <h1>Clean Resume,</h1>
                <h2>At your service.</h2>
                <div className="btn btn-lg">Get One</div>
              </div>
            </div>
            <div className="col-sm-6"></div>
          </header>
        </div>
      </div>
    );
  }
}
