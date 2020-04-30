import isNumber from '@bemoje/is-number';

/**
 * Returns a string representing a value's constructor's name property, except for 'NaN', infinite values, 'Infinity', 'Null' and 'Undefined'.
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

export default typeOf;
