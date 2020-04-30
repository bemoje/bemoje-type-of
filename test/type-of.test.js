import typeOf from '../src/type-of'

describe('typeOf', () => {
	test('works', () => {
		expect(typeOf(new Number(3))).toBe('Number')
		expect(typeOf(NaN)).toBe('NaN')
		expect(typeOf(Infinity)).toBe('Infinity')
		expect(typeOf(Number.POSITIVE_INFINITY)).toBe('Infinity')
		expect(typeOf(Number.NEGATIVE_INFINITY)).toBe('Infinity')
		expect(typeOf('asdf')).toBe('String')
		expect(typeOf(new String('asdf'))).toBe('String')
		expect(typeOf(1)).toBe('Number')
		expect(typeOf(Number(1))).toBe('Number')
		expect(typeOf(new Object())).toBe('Object')
		expect(typeOf({})).toBe('Object')
		expect(typeOf([])).toBe('Array')
		class Custom {}
		expect(typeOf(new Custom())).toBe('Custom')
		expect(typeOf(null)).toBe('Null')
		expect(typeOf(undefined)).toBe('Undefined')
	})
})
