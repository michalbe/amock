module.exports = (function(){
  'use strict';

  var mocks = {};
  var init = function(name, schema){
    mocks[name] = schema;
  };


  init.get = function(){
    return 'hej';
  };

  return init;
})();
