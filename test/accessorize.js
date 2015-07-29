/**
 * Module Dependencies
 */

var accessorize = require('../')
var assert = require('assert');

/**
 * Tests
 */

describe('accessorize', function() {
  it('should support initial values', function() {
    var access = accessorize({ hi: 'hello' });
    de(access(), { hi: 'hello' });
  })

  it('should support simple getters', function() {
    var access = accessorize({ hi: 'hello' });
    de(access('hi'), 'hello');
  })

  it('should support a simple setter', function() {
    var access = accessorize();
    access('hi', 'hello');
    de(access('hi'), 'hello');
  })

  it('should support object setters', function() {
    var access = accessorize();
    de(access({ 'hola': 'howdy' }, { hi: 'hello'}), { hi: 'hello', 'hola': 'howdy' });
    de(access(), { hi: 'hello', 'hola': 'howdy' });
  })

  it('should support multiple object setters', function() {
    var access = accessorize();
    de(access({ hi: 'hello'}), { hi: 'hello' });
    de(access({ 'hola': 'howdy' }), { hi: 'hello', 'hola': 'howdy' });
    de(access(), { hi: 'hello', 'hola': 'howdy' });
  })

  it('should support 3 or more object setters', function() {
    var access = accessorize();
    de(access({ 'hola': 'howdy' }, { hi: 'hello'}, { wahoo: 'ok'} ),
              { hi: 'hello', 'hola': 'howdy', wahoo: 'ok' });
  })

  it('should support removing properties', function() {
    var access = accessorize();
    de(access({ hi: 'hello' }), { hi: 'hello' });
    de(access({ hi: null }), {});
  })

  it('should be clone properties that come in', function() {
    var obj = { a: 'b' };
    var access = accessorize(obj);
    obj.a = 'c'
    de(access('a'), 'b');

    obj = { c: 'd' }
    access(obj);
    obj.c = 'f';
    de(access(), { a: 'b', c: 'd' });
  })

  it('should clear all the data', function() {
    var access = accessorize();
    de(access({ hi: 'hello'}), { hi: 'hello' });
    de(access({ 'hola': 'howdy' }), { hi: 'hello', 'hola': 'howdy' });
    de(access(), { hi: 'hello', 'hola': 'howdy' });
    de(access(null), {})
  })
})

function de(a, b) {
  assert.deepEqual(a, b);
}
