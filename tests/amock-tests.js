'use strict';

var assert = require('assert');
var amock = require('../');

// test 1
amock('cities', {
  id: 'number:0-',
  name: 'words:1'
});

// simple test;
var result = amock.get(5);
assert.equal(result, 5);
