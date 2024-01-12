// commonModuleLoader.js
function commonModuleLoader(root, factory, moduleName, dependencies) {
    if (typeof define === 'function' && define.amd) {
      // AMD. Register as an anonymous module.
      define(dependencies, factory);
    } else if (typeof module === 'object' && module.exports) {
      // CommonJS-like environments that support module.exports, like Node.
      module.exports = factory(require('../ApiClient'));
    } else {
      // Browser globals (root is window)
      if (!root.Hume) {
        root.Hume = {};
      }
      root.Hume[moduleName] = factory(root.Hume.ApiClient);
    }
  }
  
  module.exports = commonModuleLoader;
  