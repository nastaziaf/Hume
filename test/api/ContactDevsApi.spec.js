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

// Import the module loader utility function
const configureModule = require('../moduleLoaderUtils');

// Use the module loader utility function to configure the module
configureModule(function () {
  'use strict';

  // Variable to hold an instance of the ContactDevsApi
  var instance;

  // Setup a new instance before each test
  beforeEach(function() {
    instance = new Hume.ContactDevsApi();
  });

  // Test suite for the ContactDevsApi
  describe('(package)', function() {
    describe('ContactDevsApi', function() {
      // Test case for the contactDevs method
      describe('contactDevs', function() {
        it('should call contactDevs successfully', function(done) {
          // TODO: uncomment, update parameter values for contactDevs call, and complete assertions
          /*
          var fullname = "fullname_example";
          var email = "email_example";
          var textMessage = "textMessage_example";
          var username = "username_example";

          instance.contactDevs(fullname, email, textMessage, username, function(error, data, response) {
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
    });
  });

});
