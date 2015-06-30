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
    var parsedSchema = {};
    for (var key in schema) {
      parsedSchema[key] = parseElement(schema[key]);
    }

    mocks[name] = parsedSchema;
  };

  var parseElement = function(element) {
    var args = element.split(':');
    var name = args[0];
    args = args[1];

    if (name in specialActions) {
      return {
        fn: specialActions[name],
        args: args
      };
    } else if (name in helpers){
      return {
        fn: helpers[name],
        args: args
      };
    } else {
      var fn = function(name){ return function(){ return name; }; }(name);
      return {
        fn: fn,
        args: args
      };
    }
  };

  init.get = function(name, quantity) {
    if (typeof name === 'number') {
      quantity = name;
      name = Object.keys(mocks)[0];
    } else {
      name = name || Object.keys(mocks)[0];
      quantity = quantity || 20;
    }

    var output = [];
    var singleObject = {};
    var schema = mocks[name];

    while(quantity--) {
      singleObject = {};
      for (var key in schema) {
        singleObject[key] = schema[key].fn(schema[key].args);
      }
      output.push(singleObject);
    }

    return JSON.stringify(output, null, 2);
  };

//  return init;
  //
  var e = {
    id: 'id',
    age: 'random-number:10-20',
    login: 'words:1',
    name: 'names:2',
    description: 'sentences:2'
  };

init('clients', e);
console.log(init.get());

})();
