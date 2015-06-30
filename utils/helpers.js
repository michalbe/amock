'use strict';

// +number
// +random number
// +words
// +names
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

  var getWords = function(length){
    var word = getGivenNumberOfElements(' ', length)
      .replace(/[^a-zA-Z ]/g, '');
    if (word.length < 4) {
      word = getWords(1);
    }

    return word.toLowerCase();
  };

  var generateName = function() {
    var title = getWords(1);
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  var getName = function(length) {
    var output = [];
    for (var i=0; i<length; i++){
      output.push(generateName());
    }

    return output.join( );
  };
  //
  // var getEmail = function(){
  //   return getString() + '@' + getString() + '.com';
  // };
  //
  // var getPhone = function(){
  //   var output = '+';
  //   for (var i=0; i<10; i++) {
  //     output += ~~(Math.random()*9);
  //   }
  //
  //   return output;
  // };

  return {
    randomNumber: getRandomNumber,
    words: getWords,
    name: getName
  };
}();
