
/**
 * A function (meant to go onto the Function.prototype)
 * which curries arguments.
 *
 * keep in mind, fat arrow declaration binds "this" and cannot be
 * used here.
 * @param  {Array} ...curriedArgs the arguments that we are going to curry
 * @return {function} a function which will take the new arguments
 *   and combine them with the old arguments to run the function.
 *   @param {Array} ...newArgs the arguments passed to our now curried function
 *     returned from curry();
 *     @return {varies}
 */
export const curry = function (...curriedArgs) {
  // nothing to curry.
  if(curriedArgs.length < 1){
    return this;
  }
  // method is the function we intend to curry.
  let originalFunction = this;
  return function(...newArgs){
    // "this", in this scope, will refer to the new function
    // that we create.
    return originalFunction.apply(this, curriedArgs.concat(newArgs))
  }
}
