/*
 * Hume
 * This is an API for Hume
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

const commonModuleLoader = require('../commonModuleLoader');

commonModuleLoader(this, function(ApiClient) {
  'use strict';

  /**
   * The DeviceResponse model module.
   * @module model/DeviceResponse
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>DeviceResponse</code>.
   * @alias module:model/DeviceResponse
   * @class
   * @param name {String} 
   * @param deviceType {String} 
   * @param brand {String} 
   * @param zone {String} 
   * @param status {String} 
   * @param id {Number} 
   */
  var exports = function(name, deviceType, brand, zone, status, id) {
    this.name = name;
    this.deviceType = deviceType;
    this.brand = brand;
    this.zone = zone;
    this.status = status;
    this.id = id;
  };

  /**
   * Constructs a <code>DeviceResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeviceResponse} obj Optional instance to populate.
   * @return {module:model/DeviceResponse} The populated <code>DeviceResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (Object.prototype.hasOwnProperty.call(data, 'name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'deviceType'))
        obj.deviceType = ApiClient.convertToType(data['deviceType'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'brand'))
        obj.brand = ApiClient.convertToType(data['brand'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'zone'))
        obj.zone = ApiClient.convertToType(data['zone'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'status'))
        obj.status = ApiClient.convertToType(data['status'], 'String');
      if (Object.prototype.hasOwnProperty.call(data, 'id'))
        obj.id = ApiClient.convertToType(data['id'], 'Number');
    }
    return obj;
  };

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {String} deviceType
   */
  exports.prototype.deviceType = undefined;

  /**
   * @member {String} brand
   */
  exports.prototype.brand = undefined;

  /**
   * @member {String} zone
   */
  exports.prototype.zone = undefined;

  /**
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {Number} id
   */
  exports.prototype.id = undefined;

}, 'DeviceResponse', ['ApiClient']);
