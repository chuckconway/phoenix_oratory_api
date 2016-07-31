import React from 'react';
import { Component } from 'react';

import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
      <section id="main" className="middle wrapper">
          <div className="row row-fluid">
            {this.props.children}
          </div>
         </section>
         <footer className="site-footer wrapper" role="contentinfo">
           <div className="row">
             <div id="supplementary" className="row-fluid"></div>
             <div className="site-info">Chuck Conway - 2016</div>
           </div>
         </footer>

      </div>
    );
  }
}
