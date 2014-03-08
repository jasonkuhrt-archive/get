'use strict';
/* globals describe, it */

var assert = require('assert');
var get = require('../');
var isPlainObject = require('lodash.isplainobject');



describe('get', function(){
  var o = { a: 'a', b: 'b', c: { c1: 'c1', c2: 'c2' } };

  it('returns the original object if path lookup completely fails', function(){
    assert.equal(get('d', o), o);
  });

  it('returns the last successful value if path lookup partially succeeds and then fails', function(){
    assert.equal(get('c.c3', o), o.c);
  });

  it('returns an empty object if given object isn\'t actually an object', function(){
    assert(isPlainObject(get('foobar', 5)));
  });

  it('accesses a path given as string with keys separated by dots', function(){
    assert.equal(get('c.c2', o), 'c2');
  });

  it('is curried', function(){
    // Redo the above tests in curreid form.
    assert.equal(get('d')(o), o);
    assert.equal(get('c.c3')(o), o.c);
    assert(isPlainObject(get('foobar')(5)));
    assert.equal(get('c.c2')(o), 'c2');
  });

});