Node-Objectify
=========

A small library that mani
pulate arrays and objects

## Installation

  `npm install @stallkid/node-objectify`

## Usage

  let handler = require('@stallkid/node-objectify');

  let name = 'awesome-object';

  let array1 = [1, 2, 3, 4];

  let array2 = ['1', 4];

  let array3 = [3, '4'];
  
  let array4 = [1, 2, '9',];

  **nameObjectify function to put arrays into an object and name it**

  console.log(handler.nameObjectify(name, array1, array2));

Output should be  '{ 'awesome-object': [[1, 2, 3, 4], ['1', 4]] }'

  **mergeArrayInObject function to put arrays into an object with generic name 'object'**

  console.log(handler.mergeArrayInObject(array3, array4, array1));

Output should be '{ object: [[3, '4'], [1, 2, '9'], [1, 2, 3, 4]] }'

  **mergeToObject function convert arrays to object and put them inside another object with generic name**

  console.log(handler.mergeToObject(array3, array4, array1));

Output should be '{ object: {'0': {'0': 3,'1': '4'},'1': {'0': 1,'1': 2,'2': '9'},'2': {'0': 1,'1': 2,'2': 3,'3': 4}} }'

## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.