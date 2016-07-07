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
describe("CustomValidator test nameFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'nameFormat' method with false value(number)", function() {
        var message: Control = new Control('Balazs3');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test nameFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'nameFormat' method with blank field", function() {
        var message: Control = new Control('');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test nameFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'nameFormat' method with special character", function() {
        var message: Control = new Control('balazs!');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
});

describe("CustomValidator test nameFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'nameFormat' method with correct value", function() {
        var message: Control = new Control('Balazs');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(null);
    });
});

describe("CustomValidator test nameFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'nameFormat' method with correct value(using dash)", function() {
        var message: Control = new Control('Kis-Nagy');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(null);
    });
});

// In this case we have to test the true case with false value (the production code is correct the test is correct)
describe("CustomValidator test  emailFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'emailFormat' method with blank field", function() {
        var message: Control = new Control('');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
});

// In this case we have to test the true case with false value (the production code is correct the test is correct)
describe("CustomValidator test  emailFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'emailFormat' method with false value(without @)", function() {
        var message: Control = new Control('balazsgmail.com');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
});

// In this case we have to test the true case with false value (the production code is correct the test is correct)
describe("CustomValidator test  emailFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'emailFormat' method with false value(without dot)", function() {
        var message: Control = new Control('balazs@gmail');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
});

describe("CustomValidator test emailFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'emailFormat' method with correct value", function() {
        var message: Control = new Control('balazs@gmail.com');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(null);
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with blank field", function() {
        var message: Control = new Control('');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with short value", function() {
        var message: Control = new Control('a');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with just letters", function() {
        var message: Control = new Control('aaaaaaaaaaaaaaaa');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with numbers", function() {
        var message: Control = new Control('11111111111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with lowercase letters and numbers", function() {
        var message: Control = new Control('aaaaaa11111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});

// In this case we have to test the false case with true value (the production code is correct the test is correct)
describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with uppercase letters and numbers", function() {
        var message: Control = new Control('AAAA1111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
});

describe("CustomValidator test passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with correct value", function() {
        var message: Control = new Control('AAAa1111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(null);
    });
});

describe('1st tests', () => {
    it(" is a 'test' test - Eredeti File", function() {
        var message = "Balazs3";
        expect(message).not.toMatch(/quux/);
    });
});

