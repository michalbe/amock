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

  var getRandomNumber = function(range) {
    range = range.split('-');
    var min = range[0] || 0;
    min = parseInt(min, 10);
    var max = range[1] || 10;
    max = parseInt(max, 10);

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

  var getSentences = function(length){
    length = length || 1;
    var sentence = getGivenNumberOfElements('.', length)
      .replace(/[^a-zA-Z\. ]/g, '');

    return sentence + '.';
  };

  var getWords = function(length){
    length = length || 1;

    var word = getGivenNumberOfElements(' ', length)
      .replace(/[^a-zA-Z ]/g, '');
    while(word.length < 4) {
      word = getWords(1);
    }

    return word.toLowerCase();
  };

  var generateName = function() {
    var title = getWords(1);
    return title.charAt(0).toUpperCase() + title.slice(1);
  };

  var getName = function(length) {
    length = length || 2;
    var output = [];
    for (var i=0; i<length; i++){
      output.push(generateName());
    }

    return output.join(' ');
  };

  var getRandom = function(data){
    data = JSON.parse(data);
    return data.sort(function(){
      return 0.5 - Math.random();
    }).pop();
  };

  return {
    'random-number': getRandomNumber,
    random: getRandom,
    words: getWords,
    names: getName,
    sentences: getSentences
  };
}();
