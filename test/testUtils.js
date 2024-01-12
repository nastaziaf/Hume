// testUtils.js
const expect = require('chai').expect;

function generateInstanceTests(className, properties) {
  let instance;

  // Test suite for the class
  describe('(package)', function() {
    describe(className, function() {

      // Setup a new instance before each test
      beforeEach(function() {
        instance = new Hume[className]();
      });

      // Test case to check if it creates an instance of the class
      it(`should create an instance of ${className}`, function() {
        expect(instance).to.be.a(Hume[className]);
      });

      // Generate property test cases
      properties.forEach((property) => {
        it(`should have the property ${property} (base name: "${property}")`, function() {
          expect(instance).to.have.property(property);
          // TODO: You might want to add an expectation for the property value.
          // expect(instance[property]).to.be(expectedValueLiteral);
        });
      });

    });
  });
}

module.exports = {
  generateInstanceTests,
};
