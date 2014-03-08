'use strict';

var curry = require('lodash.curry');
var reduce = require('lodash.reduce');
var has = require('lodash.has');
var isString = require('lodash.isstring');
var isObject = require('lodash.isobject');


// TODO:  check validity of arguments passed to get.
//        e.g. check that path_ is string or array

// get :: [String a] -> {*} -> b
// get :: String a -> {*} -> b
//
var get = curry(function get(path_, o){
  if (!isObject(o)) return {};
  var path = isString(path_) ? path_.split('.') : path_ ;
  return reduce(path, getValueAt, o);
});


// getValueAt :: {*}, String a -> b
//
function getValueAt(o, prop_name){
  return has(o, prop_name) ? o[prop_name] : o ;
}



module.exports = get;