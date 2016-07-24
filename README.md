# update an item of an array

[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)

Just a simple function to update an item of an Array. Works well in both, the browser & node.

### install

```bash
npm i -S array-update-item
```

### and use it

```javascript
import updateItemInArray from 'array-update-item'
// OR
const updateItemInArray = require('array-update-item')

const abcde = updateItemInArray(['a', 'b', 'b', 'd'], 'c', 2)
console.log(abcde) // ['a', 'b', 'c', 'd']
```

*NOTE*: it requires the [rest operator](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/Spread_operator) to work. If you are not transpiling your code with Babel's `es2015` preset (to work on the browser) or are using a node version older than 5, you will have to use the compiled version: `require(array-update-item/dist/array-update-item.js)`.

### behavior

- `updateItemInArray` is a pure function, it does not mutate the provided array.
- the item is not updated if:
  - the index is out of the range of the array (grater than `arr.length` or less than 0)
  - the index is not a number or is a float number.

### FAQ

- *Why such small module?*: [Sindre](https://github.com/sindresorhus/) gives a [good answer](https://github.com/sindresorhus/ama/issues/10#issuecomment-117766328) to this.
