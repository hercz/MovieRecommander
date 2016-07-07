"use strict";
///<reference path="../../node_modules/@angular/core/testing/testing.d.ts"/>
var custom_validators_1 = require('./custom-validators');
var common_1 = require("@angular/common");
var testing_1 = require('@angular/core/testing');
// In this case we have to test the false case with true value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test nameFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'nameFormat' method with false value(number)", function () {
        var message = new common_1.Control('Balazs3');
        var testName = custom_validators_1.CustomValidators.nameFormat(message);
        testing_1.expect(testName).toEqual(Object({ nameFormat: true }));
    });
});
// In this case we have to test the false case with true value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test nameFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'nameFormat' method with blank field", function () {
        var message = new common_1.Control('');
        var testName = custom_validators_1.CustomValidators.nameFormat(message);
        testing_1.expect(testName).toEqual(Object({ nameFormat: true }));
    });
});
// In this case we have to test the false case with true value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test nameFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'nameFormat' method with special character", function () {
        var message = new common_1.Control('balazs!');
        var testName = custom_validators_1.CustomValidators.nameFormat(message);
        testing_1.expect(testName).toEqual(Object({ nameFormat: true }));
    });
});
testing_1.describe("CustomValidator test nameFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'nameFormat' method with correct value", function () {
        var message = new common_1.Control('Balazs');
        var testName = custom_validators_1.CustomValidators.nameFormat(message);
        testing_1.expect(testName).toEqual(null);
    });
});
testing_1.describe("CustomValidator test nameFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'nameFormat' method with correct value(using dash)", function () {
        var message = new common_1.Control('Kis-Nagy');
        var testName = custom_validators_1.CustomValidators.nameFormat(message);
        testing_1.expect(testName).toEqual(null);
    });
});
// In this case we have to test the true case with false value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test  emailFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'emailFormat' method with blank field", function () {
        var message = new common_1.Control('');
        var testName = custom_validators_1.CustomValidators.emailFormat(message);
        testing_1.expect(testName).toEqual(Object({ emailFormat: true }));
    });
});
// In this case we have to test the true case with false value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test  emailFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'emailFormat' method with false value(without @)", function () {
        var message = new common_1.Control('balazsgmail.com');
        var testName = custom_validators_1.CustomValidators.emailFormat(message);
        testing_1.expect(testName).toEqual(Object({ emailFormat: true }));
    });
});
// In this case we have to test the true case with false value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test  emailFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'emailFormat' method with false value(without dot)", function () {
        var message = new common_1.Control('balazs@gmail');
        var testName = custom_validators_1.CustomValidators.emailFormat(message);
        testing_1.expect(testName).toEqual(Object({ emailFormat: true }));
    });
});
testing_1.describe("CustomValidator test emailFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'emailFormat' method with correct value", function () {
        var message = new common_1.Control('balazs@gmail.com');
        var testName = custom_validators_1.CustomValidators.emailFormat(message);
        testing_1.expect(testName).toEqual(null);
    });
});
// In this case we have to test the false case with true value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test passwordFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'passwordFormat' method with blank field", function () {
        var message = new common_1.Control('');
        var testName = custom_validators_1.CustomValidators.passwordFormat(message);
        testing_1.expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});
// In this case we have to test the false case with true value (the production code is correct the test is correct)
testing_1.describe("CustomValidator test passwordFormat method", function () {
    testing_1.beforeEachProviders(function () { return [custom_validators_1.CustomValidators]; });
    testing_1.it("should test the validation of the 'passwordFormat' method with short value", function () {
        var message = new common_1.Control('a');
        var testName = custom_validators_1.CustomValidators.passwordFormat(message);
        testing_1.expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});
testing_1.describe('1st tests', function () {
    testing_1.it("The 'toMatch' matcher is for regular expressions- Eredeti File", function () {
        var message = "Balazs3";
        testing_1.expect(message).not.toMatch(/quux/);
    });
});
//# sourceMappingURL=custom-validators.spec.js.map