import React, {Component} from 'react';
import reduxify from '../util/reduxify';
import {StyleSheet, css} from 'aphrodite';
import CircularProgress from 'material-ui/CircularProgress';
import {routeTo} from '../store/configureStore';
import {resourcesRequested, resourcesReceived, resourcesRequestFailed} from '../actions/resources';
import {orderRequested, orderReceived, orderRequestFailed} from '../actions/order';
import {clone} from 'lodash';
import {getResources, getOrder} from '../util/api'
import {Navigation} from './Navigation',

// define the default styles for the element.
const defaultStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    color: '#1d2d2b',
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    height: '100%',
    width: '100%'
  },
  welcome: {
    fontFamily: 'Roboto, Helvetica Neue, Helvetica, Arial, sans',
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '30px'
  }
}



class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<div>
      <div>Main is not yet defined</div>)
      <Navigation />
    </div>
  }
}

export default reduxify({
  orderRequested,
  orderReceived,
  orderRequestFailed,
  resourcesRequested,
  resourcesReceived,
  resourcesRequestFailed
}, [
  'styles'
], Main); // note the 4th parameter. This allows us to bind additional methods to props.
