#!/usr/bin/env node
'use strict';

var fs = require('fs');
var amock = require('./..');
var file = process.argv[2];
var qty = process.argv[3] || 20;

if (file) {
  fs.readFile(file, 'utf8', function(err, data){
    if (err){
      console.log(err);
      return;
    }

    amock(file, JSON.parse(data));
    console.log(amock.get(qty));
  });
} else {
  console.log('Nope. I need at least the file name...');
}
