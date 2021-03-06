module.exports = (function() {
  'use strict';
  var helpers = require('./utils/helpers');

  var specialActions = {
    image: function(res) {
      return 'http://lorempixel.com/' + res + '?' + ~~(Math.random()*999999);
    },
    id: function() {
      return id++;
    },
    date: function() {
      return new Date(Math.random() * (new Date()).getTime());
    }
  };

  var mocks = {};
  var id = 0;
  var init = function(name, schema) {
    var parsedSchema = {};
    for (var key in schema) {
      parsedSchema[key] = parseElement(schema[key]);
    }

    mocks[name] = parsedSchema;
  };

  var parseElement = function(element) {

    if (typeof element === 'object') {
      var parsedSubschema = {};
      for (var key in element) {
        parsedSubschema[key] = parseElement(element[key]);
      }
      return parsedSubschema;
    }

    var args = element.split(':');
    var name = args[0];
    args = args[1];

    if (name in specialActions) {
      return {
        fn: specialActions[name],
        args: args
      };
    } else if (name in helpers) {
      return {
        fn: helpers[name],
        args: args
      };
    } else {
      var fn = function(name) { return function() { return name; }; }(name);
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
        if (!schema[key].fn) {
          singleObject[key] = {};
          for (var key2 in schema[key]) {
            singleObject[key][key2] = schema[key][key2].fn(schema[key][key2].args);
          }
        } else {
          singleObject[key] = schema[key].fn(schema[key].args);
        }
      }

      output.push(singleObject);
    }

    return output;
  };

  init.getJSON = function(name, quantity) {
    return JSON.stringify(init.get(name, quantity), null, 2);
  };

  return init;
})();
