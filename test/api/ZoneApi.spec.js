/*
 * Hume
 * This is an API for Hume
 *
 * OpenAPI spec version: 1.0.0
 *
 * NOTE: This class is auto-generated by the Swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.32
 *
 * Do not edit the class manually.
 *
 */

// Immediately Invoked Function Expression (IIFE) to encapsulate code and prevent global scope pollution
(function(root, factory) {
  // Check for AMD (Asynchronous Module Definition) support
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
}(this, function(expect, Hume) {
  'use strict';

  // Variable to hold an instance of the ZoneApi
  var instance;

  // Setup a new instance before each test
  beforeEach(function() {
    instance = new Hume.ZoneApi();
  });

  // Test suite for the ZoneApi
  describe('(package)', function() {
    describe('ZoneApi', function() {

      // Test case for the addZone method
      describe('addZone', function() {
        it('should call addZone successfully', function(done) {
          // TODO: uncomment, update parameter values for addZone call, and complete assertions
          /*
          var username = "username_example";
          var body = new Hume.AddZoneRequest();
          body.zoneId = 0;
          body.zoneName = "";
          body.zoneAlarm = false;
          body.zoneTemp = 0.0;

          instance.addZone(username, body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });

      // Test case for the deleteZone method
      describe('deleteZone', function() {
        it('should call deleteZone successfully', function(done) {
          // TODO: uncomment, update parameter values for deleteZone call
          /*
          var username = "username_example";
          var zoneId = 56;

          instance.deleteZone(username, zoneId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });

      // Test case for the getZone method
      describe('getZone', function() {
        it('should call getZone successfully', function(done) {
          // TODO: uncomment, update parameter values for getZone call and complete the assertions
          /*
          var username = "username_example";
          var zoneId = 56;

          instance.getZone(username, zoneId, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(Hume.ZoneResponse);
            expect(data.zoneId).to.be.a('number');
            expect(data.zoneId).to.be(0);
            expect(data.zoneName).to.be.a('string');
            expect(data.zoneName).to.be("");
            expect(data.zoneAlarm).to.be.a('boolean');
            expect(data.zoneAlarm).to.be(false);
            expect(data.zoneTemp).to.be.a('number');
            expect(data.zoneTemp).to.be(0.0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });

      // Test case for the getZones method
      describe('getZones', function() {
        it('should call getZones successfully', function(done) {
          // TODO: uncomment, update parameter values for getZones call and complete the assertions
          /*
          var username = "username_example";

          instance.getZones(username, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            let dataCtr = data;
            expect(dataCtr).to.be.an(Array);
            expect(dataCtr).to.not.be.empty();
            for (let p in dataCtr) {
              let data = dataCtr[p];
              expect(data).to.be.a(Hume.ZoneResponse);
              expect(data.zoneId).to.be.a('number');
              expect(data.zoneId).to.be(0);
              expect(data.zoneName).to.be.a('string');
              expect(data.zoneName).to.be("");
              expect(data.zoneAlarm).to.be.a('boolean');
              expect(data.zoneAlarm).to.be(false);
              expect(data.zoneTemp).to.be.a('number');
              expect(data.zoneTemp).to.be(0.0);
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
