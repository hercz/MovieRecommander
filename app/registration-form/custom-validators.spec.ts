///<reference path="../../node_modules/@angular/core/testing/testing.d.ts"/>
import {CustomValidators} from './custom-validators';
import {Control} from "@angular/common";
import {
    describe,
    expect,
    it,
    beforeEachProviders,
} from '@angular/core/testing';
// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'nameFormat' method", function() {
        var message: Control = new Control('Balazs3');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
});
// In this case we have to test the true case with false value (the production code is correct the test is correct)
describe("CustomValidator test", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'emailFormat' method", function() {
        var message: Control = new Control('balazsgmail.com');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method", function() {
        var message: Control = new Control('a');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});


describe('1st tests', () => {
    it("The 'toMatch' matcher is for regular expressions- Eredeti File", function() {
        var message = "Balazs3";
        expect(message).not.toMatch(/quux/);
    });
});

