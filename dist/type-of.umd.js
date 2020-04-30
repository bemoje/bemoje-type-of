(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@bemoje/is-number')) :
	typeof define === 'function' && define.amd ? define(['@bemoje/is-number'], factory) :
	(global = global || self, global['type-of'] = factory(global.isNumber));
}(this, (function (isNumber) { 'use strict';

	isNumber = isNumber && isNumber.hasOwnProperty('default') ? isNumber['default'] : isNumber;

	/**
	 * Returns a string corresponding to the name of the constructor of the passed value, 'v'.
	 * @method typeOf
	 * @param {*} value - The value to evaluate
	 * @return {string}
	 */
	function typeOf(value) {
		if (typeof value === 'number') {
			if (Number.isNaN(value)) {
				return 'NaN'
			}

			if (!Number.isFinite(value)) {
				return 'Infinity'
			}
		}

		if (isNumber(value)) {
			return 'Number'
		}

		const type = Object.prototype.toString.call(value).slice(8, -1);

		if (type === 'Object') {
			return value.constructor.name
		}

		return type
	}

	return typeOf;

})));
