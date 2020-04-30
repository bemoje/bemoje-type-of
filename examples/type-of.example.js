import typeOf from '../src/type-of'

typeOf(NaN)
//=> NaN

typeOf(Infinity)
//=> Infinity

typeOf(Number.POSITIVE_INFINITY)
//=> Infinity

typeOf(Number.NEGATIVE_INFINITY)
//=> Infinity

typeOf('asdf')
//=> 'String'

typeOf(new String('asdf'))
//=> 'String'

typeOf(1)
//=> 'Number'

typeOf(Number(1))
//=> 'Number'

typeOf(new Number(1))
//=> 'Number'

typeOf(new Object())
//=> 'Object'

typeOf({})
//=> 'Object'

typeOf([])
//=> 'Array'

class Custom {}

typeOf(new Custom())
//=> 'Custom'
