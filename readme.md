# @bemoje/type-of

Returns a string corresponding to the name of the constructor of the passed value, 'v'.

#### Version

<span><a href="https://npmjs.org/@bemoje/type-of" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/type-of" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/type-of" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-type-of.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/type-of" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-type-of.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/type-of" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/type-of" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-type-of/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-type-of" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/type-of
npm install --save @bemoje/type-of
npm install --save-dev @bemoje/type-of
```

## Usage

```javascript
import typeOf from '@bemoje/type-of'

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

typeOf(new Object())
//=> 'Object'

typeOf({})
//=> 'Object'

typeOf([])
//=> 'Array'

class Custom {}

typeOf(new Custom())
//=> 'Custom'

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### typeOf

##### Returns
a string corresponding to the name of the constructor of the passed value, 'v'.

##### Parameters

-   `value` **any** The value to evaluate

##### Returns
**[string][3]** string

[1]: #typeof

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String