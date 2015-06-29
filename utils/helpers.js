'use strict';

// number
// +random number
// words
// names
// sentences
// image
//
module.exports = function(){
  var descriptions = require('./descriptions')();

  var getRandomNumber = function(min, max) {
    return min + ~~(Math.random()*(max-min+1));
  };

  var getGivenNumberOfElements = function(separator, length) {
    var descs = descriptions.split(separator);
    var output = [];
    for (var i=0; i<length; i++) {
      output.push(descs[Math.floor(Math.random()*descs.length)]);
    }

    return output.join(separator).trim();
  };

  var getString = function(){
    var title = getGivenNumberOfElements(' ', 1).replace(/[^a-zA-Z ]/g, '');
    if (title.length < 4) {
      title = getName();
    }

    return title.toLowerCase();
  };

  var getName = function() {
    var title = getString();
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  var getEmail = function(){
    return getString() + '@' + getString() + '.com';
  };

  var getPhone = function(){
    var output = '+';
    for (var i=0; i<10; i++) {
      output += ~~(Math.random()*9);
    }

    return output;
  };

  return {
    randomNumber: getRandomNumber,
    getEmail: getEmail,
    getName: function(){
      return getName() + ' ' + getName();
    },
    getPhone: getPhone
  };
}();
