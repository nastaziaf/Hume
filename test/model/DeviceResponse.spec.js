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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Hume);
  }
}(this, function(expect, Hume) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('DeviceResponse', function() {
      beforeEach(function() {
        instance = new Hume.DeviceResponse();
      });

      it('should create an instance of DeviceResponse', function() {
        // TODO: update the code to test DeviceResponse
        expect(instance).to.be.a(Hume.DeviceResponse);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property deviceType (base name: "deviceType")', function() {
        // TODO: update the code to test the property deviceType
        expect(instance).to.have.property('deviceType');
        // expect(instance.deviceType).to.be(expectedValueLiteral);
      });

      it('should have the property brand (base name: "brand")', function() {
        // TODO: update the code to test the property brand
        expect(instance).to.have.property('brand');
        // expect(instance.brand).to.be(expectedValueLiteral);
      });

      it('should have the property zone (base name: "zone")', function() {
        // TODO: update the code to test the property zone
        expect(instance).to.have.property('zone');
        // expect(instance.zone).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

    });
  });

}));
