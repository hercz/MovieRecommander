import {CustomValidators, matchingPasswords} from './custom-validators';
import {Control, ControlGroup} from "@angular/common";
import {
    describe,
    expect,
    it,
    beforeEachProviders,
} from '@angular/core/testing';


describe("CustomValidator test: nameFormat method", () => {
    beforeEachProviders(() => [CustomValidators]);
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'nameFormat' method with incorrect value(number)", function() {
        var message: Control = new Control('Balazs3');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'nameFormat' method with blank field", function() {
        var message: Control = new Control('');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'nameFormat' method with special character", function() {
        var message: Control = new Control('balazs!');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(Object({ nameFormat: true }));
    });
    it("should test the validation of the 'nameFormat' method with correct value", function() {
        var message: Control = new Control('Balazs');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(null);
    });
    it("should test the validation of the 'nameFormat' method with correct value(using dash)", function() {
        var message: Control = new Control('Kis-Nagy');
        var testName = CustomValidators.nameFormat(message);
        expect(testName).toEqual(null);
    });
});

describe("CustomValidator test: emailFormat method", () => {
    beforeEachProviders(() => [CustomValidators]);
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'emailFormat' method with blank field", function() {
        var message: Control = new Control('');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'emailFormat' method with incorrect value(without @)", function() {
        var message: Control = new Control('balazsgmail.com');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'emailFormat' method with incorrect value(without dot)", function() {
        var message: Control = new Control('balazs@gmail');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(Object({ emailFormat: true }));
    });
    it("should test the validation of the 'emailFormat' method with correct value", function() {
        var message: Control = new Control('balazs@gmail.com');
        var testName = CustomValidators.emailFormat(message);
        expect(testName).toEqual(null);
    });
});

describe("CustomValidator test: passwordFormat method", () => {
    beforeEachProviders(() => [CustomValidators]);
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'passwordFormat' method with blank field", function() {
        var message: Control = new Control('');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'passwordFormat' method with short value", function() {
        var message: Control = new Control('a');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'passwordFormat' method with just letters", function() {
        var message: Control = new Control('aaaaaaaaaaaaaaaa');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'passwordFormat' method with numbers", function() {
        var message: Control = new Control('11111111111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'passwordFormat' method with lowercase letters and numbers", function() {
        var message: Control = new Control('aaaaaa11111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
    // In this case we have to test the false case with true value (the production code is correct the test is correct)
    it("should test the validation of the 'passwordFormat' method with uppercase letters and numbers", function() {
        var message: Control = new Control('AAAA1111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(Object({ passwordFormat: true }));
    });
    beforeEachProviders(() => [CustomValidators])
    it("should test the validation of the 'passwordFormat' method with correct value", function() {
        var message: Control = new Control('AAAa1111');
        var testName = CustomValidators.passwordFormat(message);
        expect(testName).toEqual(null);
    });
});

describe("CustomValidator test matchingPassword method", () => {
    beforeEachProviders(() => [CustomValidators])
    it("should test the matching of the two given passwords in case of different passwords" , function() {
        var passwordObject: Control = new Control('AAAa1111');
        var confirmPasswordObject: Control = new Control('Kutya1');
        var group: ControlGroup = new  ControlGroup({
            password: passwordObject,
            confirmPassword: confirmPasswordObject
        })
        var passwordTester = matchingPasswords("password","confirmPassword");
        var result = passwordTester(group);
        expect(result["mismatchedPasswords"]).toEqual(true);
    });
    it("should test the matching of the two given passwords in case of same passwords" , function() {
        var passwordObject: Control = new Control('AAAa1111');
        var confirmPasswordObject: Control = new Control('AAAa1111');
        var group: ControlGroup = new  ControlGroup({
            password: passwordObject,
            confirmPassword: confirmPasswordObject
        })
        var passwordTester = matchingPasswords("password","confirmPassword");
        var result = passwordTester(group);
        expect(result).not.toEqual(true);
    });
});


describe('1st tests for configure Jasmine', () => {
    it(" is a 'test' test - Eredeti File", function() {
        var message = "Balazs3";
        expect(message).not.toMatch(/quux/);
    });
});

