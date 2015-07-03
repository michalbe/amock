'use strict';

var assert = require('assert');
var amock = require('../');

var codes = ['en-US', 'PL', 'fr', 'de'];

amock('users', {
  id: 'id',
  age: 'random-number:10-20',
  login: 'words:1',
  name: 'names:2',
  description: 'sentences:5',
  code: 'random:' + JSON.stringify(codes)
});

// general tests
var result = amock.get(5);
assert.equal(result.length, 5, 'five results should be generated');
assert.equal(typeof result[0], 'object', 'each result should be an object');

// id tests
assert.equal(typeof result[0].id, 'number', '`id` should have `number` type');
assert.equal(result[0].id+1,  result[1].id, '`id` should be unique');

// random numbers tests
assert.equal(typeof result[0].age, 'number',
  '`random number` should have `number` type'
);
assert(result[0].age >= 10,
  '`random number` value should be higher than minimum value'
);
assert(result[0].age <= 20,
  '`random number` value should be lower than maximum value'
);

// words
assert.equal(typeof result[0].login, 'string',
  '`word` should have `string` type'
);

// name
assert.equal(typeof result[0].name, 'string',
  '`name` should have `string` type'
);
assert.equal(result[0].name.split(' ').length, 2,
  'proper number of `names` should be generated'
);

// sentences
assert.equal(typeof result[0].description, 'string',
  '`sentence` should have `string` type'
);
assert.equal(result[0].description.split('.').length, 5+1,
  'proper number of `sentences` should be generated'
);

// random sequence
assert.equal(typeof result[0].code, 'string',
  'proper number of `sentences` should be generated'
);
