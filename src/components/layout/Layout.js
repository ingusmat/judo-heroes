'use strict';

import React from 'react';
import { Link } from 'react-router';
require('./layout.scss');

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header className="pageHeader">

          {/*<Link to="/">*/}
            {/**/}
          {/*</Link>*/}
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
        </footer>
      </div>
    );
  }
}
