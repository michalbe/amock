'use strict';

var assert = require('assert');
var amock = require('../');

// test 1
amock('users', {
  id: 'number:0-',
  login: 'words:1',
  name: 'names:2',
  description: 'sentences:5'
});

// simple test;
var result = amock.get(5);
assert.equal(result, 5);
assert.equal(typeof result[0], 'object');
assert.equal(typeof result[0].id, 'number');
assert(result[0].id >= 0);
assert.equal(typeof result[0].name, 'string');
assert.equal(result[0].name.split(' ').length, 2);
