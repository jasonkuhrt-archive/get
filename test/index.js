'use strict';
/* globals describe, it */

var assert = require('assert');
var get = require('../');
var isPlainObject = require('lodash.isplainobject');



describe('get', function(){
  var o = { a: 'a', b: 'b', c: { c1: 'c1', c2: 'c2' } };

  it('returns given object if path lookup totally fails', function(){
    assert.equal(get('d', o), o);
  });

  it('returns last found value if path lookup partially succeeds and then fails', function(){
    assert.equal(get('c.c3', o), o.c);
  });

  it('returns {} if given object isn\'t actually an object', function(){
    assert(isPlainObject(get('foobar', 5)));
  });

  it('path as String', function(){
    assert.equal(get('b', o), 'b');
  });

  it('path as String with keys separated by dots', function(){
    assert.equal(get('c.c2', o), 'c2');
  });

  it('path as [String]', function(){
    assert.equal(get(['c', 'c2'], o), 'c2');
  });

  it('is curried', function(){
    assert.equal(get('d')(o), o);
  });

});