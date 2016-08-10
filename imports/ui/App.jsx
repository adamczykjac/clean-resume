import React, { Component } from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Content from './Content.jsx';

export default class App extends Component {
  renderHeader() {
    return <Header />;
  }
  renderContent() {
    return <Content />;
  }
  renderFooter() {
    return <Footer />;
  }

  render() {
    return (
      <div className="container">
        {this.renderHeader()}
        {this.renderContent()}
        {this.renderFooter()}
      </div>
    );
  }
}
