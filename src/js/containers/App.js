import React, { Component } from 'react';
// import Menu from './Menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import reduxify from '../util/reduxify';
import {StyleSheet, css} from 'aphrodite';

const App = (props) =>
  (<MuiThemeProvider muiTheme={getMuiTheme()}>
      <div className={'App'}>
          <div>
            {props.children}
          </div>
      </div>
    </MuiThemeProvider>)

export default reduxify({}, [], App)
