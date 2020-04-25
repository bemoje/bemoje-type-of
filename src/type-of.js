/**
 * Returns a string corresponding to the name of the constructor of the passed value, 'v'.
 * @method typeOf
 * @param {*} value - The value to evaluate
 * @return {string}
 */
export default function typeOf(value) {
	if (typeof value === 'number') {
		if (Number.isNaN(value)) {
			return 'NaN'
		}

		if (!Number.isFinite(value)) {
			return 'Infinity'
		}
	}

	const name = Object.prototype.toString.call(value).slice(8, -1)

	if (name === 'Object') {
		return value.constructor.name
	}

	return name
}
