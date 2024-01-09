/**
 * This function creates an 'assertEquals' utility for comparing expected and actual values,
 * and throwing an error if they are not equal.
 *
 * @param {Object} root - The global object (e.g., 'window' in a browser or 'global' in Node.js).
 * @param {Function} factory - A function that returns the 'assertEquals' utility.
 */
(function(root, factory) {
  // Check if define is a function and define.amd is available (AMD module loader)
  if (typeof define === 'function' && define.amd) {
    // AMD module loader
    define(factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.js
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.assertEquals = factory();
  }
}(this, function() {
  'use strict';

   /**
   * Asserts that two values are equal and throws an error if they are not.
   *
   * @param {*} expected - The expected value.
   * @param {*} actual - The actual value.
   * @param {String} ptr - Pointer to track the nested properties during recursion.
   */
  var assertEquals = function(expected, actual, ptr) {
    // If ptr is not provided, initialize it as an empty string
    if (!ptr)
      ptr = "";

    // Check if actual is equal to expected
    if (actual === expected)
      return;

    // If expected or actual is a Date object, convert to ISO date string
    if (expected instanceof Date || actual instanceof Date) {
      expected = toISODateString(expected);
      actual = toISODateString(actual);
      if (actual !== expected)
        fail(expected, actual, ptr, "date value incorrect;");
    }

    // If expected or actual is not an object, compare values
    if (!expected || !actual || typeof expected != 'object' && typeof actual != 'object') {
      if (typeof actual != typeof expected)
        fail(typeof expected, typeof actual, ptr, "value type incorrect;");
      if (actual != expected)
        fail(expected, actual, ptr, "value incorrect;");
    }

    // Recursively check object properties
    return checkObject(expected, actual, ptr);
  }

   /**
   * Converts a Date object to an ISO date string, stripping out milliseconds.
   *
   * @param {Date} value - The Date object to be converted.
   * @returns {String} - The ISO date string.
   */
  function toISODateString(value) {
    // Convert Date object to ISO date string, stripping out milliseconds
    if (value instanceof Date) {
      value = value.toISOString().replace('.000', '');
    }
    return value;
  }

   /**
   * Recursively checks the properties of two objects for equality.
   *
   * @param {Object} expected - The expected object.
   * @param {Object} actual - The actual object.
   * @param {String} ptr - Pointer to track the nested properties during recursion.
   */
  function checkObject(expected, actual, ptr) {
    // Check for missing values
    if (undefOrNull(expected) || undefOrNull(actual))
      fail(expected, actual, ptr, "missing value;");

    // Check if expected and actual have the same type and prototype
    if (typeof expected !== typeof actual)
      fail(typeof expected, typeof actual, ptr, "wrong type;");
    if (expected.prototype !== actual.prototype)
      fail(expected.prototype, actual.prototype, ptr, "wrong prototype;");

    // Try getting keys of expected and actual objects
    try {
      var expectedKeys = Object.keys(expected);
      var actualKeys = Object.keys(actual);
    } catch (e) {
      fail(expectedKeys, actualKeys, ptr, "wrong keys;");
    }

    // Check if the number of keys is the same
    if (actualKeys.length != expectedKeys.length)
      fail(expectedKeys.length, actualKeys.length, ptr, "key count incorrect;");

    // Sort keys and compare them
    expectedKeys.sort();
    actualKeys.sort();
    for (var i = 0; i < expectedKeys.length; i++) {
      if (actualKeys[i] != expectedKeys[i])
        fail(expectedKeys, actualKeys, ptr, "wrong keys;");
    }

    // Recursively check each property
    for (i = 0; i < expectedKeys.length; i++) {
      var key = expectedKeys[i];
      assertEquals(expected[key], actual[key], ptr + '/' + key);
    }
  }

   /**
   * Checks if a value is undefined or null.
   *
   * @param {*} v - The value to check.
   * @returns {Boolean} - True if the value is undefined or null, false otherwise.
   */
  function undefOrNull(v) {
    // Check if a value is undefined or null
    return v === undefined || v === null;
  }

  /**
   * Logs an error message and throws an error.
   *
   * @param {*} expected - The expected value.
   * @param {*} actual - The actual value.
   * @param {String} ptr - Pointer to track the nested properties during recursion.
   * @param {String} msg - The error message.
   */
  function fail(expected, actual, ptr, msg) {
    // Log an error message and throw an error
    var text = ptr + ' ' + msg + " expected: " + expected + ", actual: " + actual;
    console.log(text);
    throw new Error(text);
  }

  // Return the assertEquals function
  return assertEquals;
}));
