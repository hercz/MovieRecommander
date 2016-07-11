"use strict";
var common_1 = require("@angular/common");
var testing_1 = require('@angular/core/testing');
testing_1.describe("Test registration form first name length", function () {
    testing_1.it("should test the first name of length, with incorrect data (more than 30 chars) ", function () {
        var firstName = new common_1.Control('Lakatos Armando Ronaldo Neymarka');
        testing_1.expect(30).toBeLessThan(firstName.value.toString().length);
    });
    testing_1.it("should test the first name of length, with correct data (no longer than 30 character)", function () {
        var firstName = new common_1.Control('Lakatos Armando Ronaldo');
        testing_1.expect(30).not.toBeLessThan(firstName.value.toString().length);
    });
});
testing_1.describe("Test registration form last name length", function () {
    testing_1.it("should test the last name of length, with incorrect data (more than 50 chars)", function () {
        var lastName = new common_1.Control('Lakatos Armando Ronaldo Neymarka Józska Pista Kutya');
        testing_1.expect(50).toBeLessThan(lastName.value.toString().length);
    });
    testing_1.it("should test the last name of length, with correct data (no longer than 50 character)", function () {
        var lastName = new common_1.Control('Lakatos Armando Ronaldo Neymar');
        testing_1.expect(50).not.toBeLessThan(lastName.value.toString().length);
    });
});
testing_1.describe("Test registration form nick name length", function () {
    testing_1.it("should test the nick name of length, with incorrect data (more than 20 chars)", function () {
        var nickName = new common_1.Control('apacukafundaluka12345');
        testing_1.expect(20).toBeLessThan(nickName.value.toString().length);
    });
    testing_1.it("should test the nick name of length, with correct data (no longer than 20 character)", function () {
        var nickName = new common_1.Control('apacuka');
        testing_1.expect(20).not.toBeLessThan(nickName.value.toString().length);
    });
});
testing_1.describe("Test registration form address length", function () {
    testing_1.it("should test the address of length, with incorrect data (more than 150 chars)", function () {
        var address = new common_1.Control('sixteencharacter'.repeat(10));
        testing_1.expect(150).toBeLessThan(address.value.toString().length);
    });
    testing_1.it("should test the address of length, with correct data (no longer than 150 character)", function () {
        var address = new common_1.Control('sixteencharacter');
        testing_1.expect(150).not.toBeLessThan(address.value.toString().length);
    });
});
testing_1.describe("Test registration form password length", function () {
    testing_1.it("should test the password of length,  with incorrect data (more than 50 chars)", function () {
        var password = new common_1.Control('apacukaSDDSADfdfdfdfdfdfdfdfdfdfdfafundaluka123452222');
        testing_1.expect(50).toBeLessThan(password.value.toString().length);
    });
    testing_1.it("should test the password of length, with correct data (no longer than 50 character)", function () {
        var password = new common_1.Control('apSfdfd3452222');
        testing_1.expect(50).not.toBeLessThan(password.value.toString().length);
    });
    // it("should test the password of length, at least 6 character", function() {
    //     var password : Control = new Control('asdfdf');
    //     expect(5).toBeGreaterThan(password.value.toString().length);
    // });
});
testing_1.describe('Smoke-tester method for configure Jasmine from registration-form.component.spec.ts', function () {
    testing_1.it(" is a 'test' test : true = true", function () {
        testing_1.expect(true).toEqual(true);
    });
});
//# sourceMappingURL=registration-form.component.spec.js.map