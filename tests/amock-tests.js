'use strict';

var assert = require('assert');
var amock = require('../');

// test 1
amock('users', {
  id: 'id',
  age: 'random-number:10-20',
  login: 'words:1',
  name: 'names:2',
  description: 'sentences:5'
});

// general tests
var result = amock.get(5);
assert.equal(result.length, 5);
assert.equal(typeof result[0], 'object');

// id tests
assert.equal(typeof result[0].id, 'number');
assert.equal(result[0].id+1,  result[1].id);

// random numbers tests
assert.equal(typeof result[0].age, 'number');
assert(result[0].age >= 10);
assert(result[0].age <= 20);

// words
assert.equal(typeof result[0].login, 'string');

// name
assert.equal(typeof result[0].name, 'string');
assert.equal(result[0].name.split(' ').length, 2);

// sentences
assert.equal(typeof result[0].description, 'string');
assert.equal(result[0].description.split('.').length, 5+1);
