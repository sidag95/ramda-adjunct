import { type } from 'ramda';
import curry1 from 'ramda/src/internal/_curry1';

/**
 * Checks if input value is a Symbol.
 *
 * @func isSymbol
 * @memberOf RA
 * @since {@link https://char0n.github.io/ramda-adjunct/2.22.0|v2.22.0}
 * @category Type
 * @sig * -> Boolean
 * @param {*} val The value to test
 * @return {boolean}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol|MDN Symbol}
 * @example
 *
 * RA.isSymbol(Symbol('1')); //=> true
 * RA.isSymbol(Symbol(1)); //=> true
 * RA.isSymbol('string'); //=> false
 * RA.isSymbol(undefined); //=> false
 * RA.isSymbol(null); //=> false
 */
const isSymbol = curry1(val => {
  return (
    typeof val === 'symbol' ||
    (typeof val === 'object' && type(val) === 'Symbol')
  );
});

export default isSymbol;
