import curry from './curry'
import isFunction from '../lang/isFunction'
import isGenerator from '../lang/isGenerator'
import isOp from './isOp'
import isPromise from '../lang/isPromise'

/**
 * Determines if the value is a resolvable value.
 *
 * @function
 * @since 0.0.11
 * @category common
 * @param {*} value
 * @returns {boolean}
 * @example
 *
 * isResolved({
 *   ['@@redux-saga/IO']: 'op'
 * })
 * //=> false
 *
 * isResolved((function* () {})())
 * //=> false
 *
 * isResolved(new Promise(() => {})))
 * //=> false
 *
 * isResolved({ resolve: () => 'foo' })
 * //=> false
 *
 * isResolved(null)
 * //=> true
 *
 * isResolved(undefined)
 * //=> true
 *
 * isResolved('abc')
 * //=> true
 */
const isResolved = curry(
  (value) =>
    !isGenerator(value) &&
    !isPromise(value) &&
    !isOp(value) &&
    !(value != null && isFunction(value.resolve))
)

export default isResolved
