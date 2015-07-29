/**
 * Module Dependencies
 */

var is_obj = require('is-plain-object');
var clone = require('component-clone');
var assign = require('object-assign');
var sliced = require('sliced');

/**
 * Export `Accessorize`
 */

module.exports = Accessorize;

/**
 * Initialize `Accessorize`
 *
 * @param {Object} initial
 * @return {Function}
 */

function Accessorize(initial) {
  var data = initial ? clone(initial) : {};

  function access() {
    var args = sliced(arguments);

    var is_string = 'string' == typeof args[0];
    var is_object = is_obj(args[0]);

    switch (args.length) {
      case 0:
        return all();
      case 1:
        if (is_string) return get(args[0]);
        else if (is_object) return set_many(args[0]);
        else if (args[0] === null) return data = {};
      case 2:
        if (is_string) return set(args[0], args[1]);
        else return set_many(assign(args[0], args[1]));
      default:
        return set_many(assign.apply(null, args));
    }
  }

  function all() {
    return clone(data);
  }

  function get(key) {
    return clone(data[key]);
  }

  function set_many(obj) {
    for (var k in obj) {
      set(k, obj[k], true);
    }
    return clone(data);
  }

  function set(key, value, batch) {
    if (value === null) {
      delete data[key];
    } else {
      data[key] = value;
    }

    if (!batch) {
      return clone(data);
    }
  }

  return access;
}
