module.exports = (function(){
  'use strict';

  var mocks = {};
  var init = function(name, schema){
    mocks[name] = schema;
  };

  var parseElement = function(element) {
    console.log('parsing', element);
    var args = element.split(':');
    var name = args[0];
    args = args[1];

    console.log(name, args);
  };

  init.get = function(){
    return 'hej';
  };

//  return init;

var e = {
  id: 'id',
  age: 'random-number:10-20',
  login: 'words:1',
  name: 'names:2',
  description: 'sentences:5'
};

for (var key in e) {
  parseElement(e[key]);
}
})();
