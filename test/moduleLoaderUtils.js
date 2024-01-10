// moduleLoaderUtils.js
function configureModule(factory, root) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(['expect.js', '../../src/index'], factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.js
      factory(require('expect.js'), require('../../src/index'));
    } else {
      // Browser globals (root is window)
      factory(root.expect, root.Hume);
    }
  }
  
  module.exports = configureModule;
  