Node-Objectify
=========

A small library that manipulate arrays and objects

## Installation

  `npm install @stallkid/node-objectify`

## Usage

  let handler = require('./index');

let name = 'awesome-object';
let array1 = [1,2,3,4];
let array2 = ['1', 4];
let array3 = [3, '4'];
let array4 = [1, 2, '9',];

console.log(handler.objectify(name, array1, array2));
Output = { 'awesome-object': [[1, 2, 3, 4], ['1', 4]] }

console.log(handler.mergeArrayToObject(array3, array4, array1))
Output = { object: [[3, '4'], [1, 2, '9'], [1, 2, 3, 4]] }

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.