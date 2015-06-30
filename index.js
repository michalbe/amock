module.exports = (function(){
  'use strict';
  var helpers = require('./utils/helpers');

  var specialActions = {
    image: function(res){
      return 'http://lorempixel.com/' + res + '?' + ~~(Math.random()*999999);
    },
    id: function(){
      return id++;
    }
  };

  var mocks = {};
  var id = 0;
  var init = function(name, schema){
    mocks[name] = schema;
  };

  var parseElement = function(element) {
    var args = element.split(':');
    var name = args[0];
    args = args[1];
    
    if (name in specialActions) {
      return specialActions[name](args);
    } else if (name in helpers){
      return helpers[name](args);
    } else {
      return name;
    }
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
  console.log(key, ': ', parseElement(e[key]));
}
})();
