"use strict";
var common_1 = require("@angular/common");
var testing_1 = require('@angular/core/testing');
var registration_form_component_1 = require("./registration-form.component");
testing_1.describe("Test registration form first name length", function () {
    testing_1.beforeEachProviders(function () { return [registration_form_component_1.RegistrationFieldComponent]; });
    testing_1.it("should test the first name of length, no longer than 30 character", function () {
        var firstName = new common_1.Control('Lakatos Armando Ronaldo Neymarka');
        testing_1.expect(30).toBeLessThan(firstName.value.toString().length);
    });
});
testing_1.describe("Test registration form last name length", function () {
    testing_1.beforeEachProviders(function () { return [registration_form_component_1.RegistrationFieldComponent]; });
    testing_1.it("should test the last name of length, no longer than 50 character", function () {
        var lastName = new common_1.Control('Lakatos Armando Ronaldo Neymarka Józska Pista Kutya');
        testing_1.expect(50).toBeLessThan(lastName.value.toString().length);
    });
});
testing_1.describe("Test registration form nick name length", function () {
    testing_1.beforeEachProviders(function () { return [registration_form_component_1.RegistrationFieldComponent]; });
    testing_1.it("should test the nick name of length, no longer than 20 character", function () {
        var nickName = new common_1.Control('apacukafundaluka12345');
        testing_1.expect(20).toBeLessThan(nickName.value.toString().length);
    });
});
testing_1.describe("Test registration form address length", function () {
    testing_1.beforeEachProviders(function () { return [registration_form_component_1.RegistrationFieldComponent]; });
    testing_1.it("should test the nick name of length, no longer than 150 character", function () {
        var address = new common_1.Control('sixteencharacter'.repeat(10));
        testing_1.expect(150).toBeLessThan(address.value.toString().length);
    });
});
testing_1.describe("Test registration form password length", function () {
    testing_1.beforeEachProviders(function () { return [registration_form_component_1.RegistrationFieldComponent]; });
    testing_1.it("should test the password of length, no longer than 50 character", function () {
        var password = new common_1.Control('apacukaSDDSADfdfdfdfdfdfdfdfdfdfdfafundaluka123452222');
        testing_1.expect(50).toBeLessThan(password.value.toString().length);
    });
    // it("should test the password of length, at least 6 character", function() {
    //     var password : Control = new Control('asdfdf');
    //     expect(5).toBeGreaterThan(password.value.toString().length);
    // });
});
//# sourceMappingURL=registration-form.component.spec.js.map