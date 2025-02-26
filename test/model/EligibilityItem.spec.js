/*
 * Simple GAIN API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: bill.hennessy@maritz.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.64
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
    factory(root.expect, root.SimpleGainApi);
  }
}(this, function(expect, SimpleGainApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('EligibilityItem', function() {
      beforeEach(function() {
        instance = new SimpleGainApi.EligibilityItem();
      });

      it('should create an instance of EligibilityItem', function() {
        // TODO: update the code to test EligibilityItem
        expect(instance).to.be.a(SimpleGainApi.EligibilityItem);
      });

      it('should have the property mkid (base name: "mkid")', function() {
        // TODO: update the code to test the property mkid
        expect(instance).to.have.property('mkid');
        // expect(instance.mkid).to.be(expectedValueLiteral);
      });

      it('should have the property product (base name: "product")', function() {
        // TODO: update the code to test the property product
        expect(instance).to.have.property('product');
        // expect(instance.product).to.be(expectedValueLiteral);
      });

      it('should have the property eligible (base name: "eligible")', function() {
        // TODO: update the code to test the property eligible
        expect(instance).to.have.property('eligible');
        // expect(instance.eligible).to.be(expectedValueLiteral);
      });

      it('should have the property releaseDate (base name: "releaseDate")', function() {
        // TODO: update the code to test the property releaseDate
        expect(instance).to.have.property('releaseDate');
        // expect(instance.releaseDate).to.be(expectedValueLiteral);
      });

    });
  });

}));
