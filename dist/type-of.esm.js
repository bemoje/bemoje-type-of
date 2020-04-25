/**
 * Returns a string corresponding to the name of the constructor of the passed value, 'v'.
 * @method typeOf
 * @param {any} value - The value to evaluate
 * @return {string} string
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
	const strType = Object.prototype.toString.call(value).slice(8, -1);
	if (strType === 'Object') {
		return value.constructor.name
	}
	return strType
}

export default typeOf;
