import {
  bindActionCreators
} from 'redux';
import {
  connect
} from 'react-redux';
import {pick} from 'lodash';

/**
 * This binds actions, dispatch, and optionalmethods into a single object for binding
 *   to the dispatch in the connect function of react-redux.
 * @method prepareActions
 * @param  {object}       actions         actions to bind.
 * @param  {object}       optionalMethods
 *    Any other methods to bind - including functions, metadata, etc.
 * @param  {function}     dispatch
 *    For convenience, dispatch is included.
 * @return {object}
 *    The keys of this object will evenually be bound to props.
 */
export const prepareActions = (actions, optionalMethods, dispatch) => {
  if (actions.hasOwnProperty('default') && Object.keys(actions.length) === 1) {
    actions = actions.default;
  }
  let output = {
    action: bindActionCreators(actions, dispatch),
    dispatch,
  };
  if (optionalMethods && typeof (optionalMethods) === 'object') {
    for (let key in optionalMethods) {
      output[key] = optionalMethods[key];
    }
  }
  return output;
};

/**
 * Reduxify: a method to easily bind action creators, dispatch and state to props.
 * @function default
 * @param  {object} actionsToBind - an object containing all the actions to bind
 * @param  {String[]} reducerKeyList - a list (strings) of the reducer keys to bind
 *   to this specific component
 *   Because we do not want to bind any more reducers than necessary to prevent
 *   unnecessary rerendering, you can specify them here.
 * @param  {Component} component - the React component to bind.
 * @param  {object} optionalMethods - any additional methods that you would like
 *   to add to this.props in the binding phase.
 * @return {Component} - A connected component
 *   @property {object} props - Reducers are bound to component.props[reducer name]
 *     @property {function} dispatch - the dispatch function is (for convenience)
 *       bound to this.props.dispatch
 *     @property {object} action - an object with all the actions, already bound to dispatch.
 */
export default (actionsToBind, reducerKeyList, component, optionalMethods) => {
  const mapStateToProps = (state) => pick(state, reducerKeyList);
  const mapDispatchToProps = (dispatch) => prepareActions(actionsToBind, optionalMethods, dispatch);

  return connect(mapStateToProps, mapDispatchToProps)(component);
};
