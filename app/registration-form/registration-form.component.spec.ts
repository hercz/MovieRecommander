import {Control} from "@angular/common";
import {
    describe,
    expect,
    it,
    beforeEachProviders,
} from '@angular/core/testing';
import {RegistrationFieldComponent} from "./registration-form.component";

describe("Test registration form first name length", () => {
    beforeEachProviders(() => [RegistrationFieldComponent]);
    it("should test the first name of length, no longer than 30 character", function() {
        var firstName : Control = new Control('Lakatos Armando Ronaldo Neymarka');
        expect(30).toBeLessThan(firstName.value.toString().length);
    });
});

describe("Test registration form last name length", () => {
    beforeEachProviders(() => [RegistrationFieldComponent]);
    it("should test the last name of length, no longer than 50 character", function() {
        var lastName : Control = new Control('Lakatos Armando Ronaldo Neymarka Józska Pista Kutya');
        expect(50).toBeLessThan(lastName.value.toString().length);
    });
});

describe("Test registration form nick name length", () => {
    beforeEachProviders(() => [RegistrationFieldComponent]);
    it("should test the nick name of length, no longer than 20 character", function() {
        var nickName : Control = new Control('apacukafundaluka12345');
        expect(20).toBeLessThan(nickName.value.toString().length);
    });
});

describe("Test registration form address length", () => {
    beforeEachProviders(() => [RegistrationFieldComponent]);
    it("should test the nick name of length, no longer than 150 character", function() {
        var address : Control = new Control('sixteencharacter'.repeat(10));
        expect(150).toBeLessThan(address.value.toString().length);
    });
});

describe("Test registration form password length", () => {
    beforeEachProviders(() => [RegistrationFieldComponent]);
    it("should test the password of length, no longer than 50 character", function() {
        var password : Control = new Control('apacukaSDDSADfdfdfdfdfdfdfdfdfdfdfafundaluka123452222');
        expect(50).toBeLessThan(password.value.toString().length);
    });
    // it("should test the password of length, at least 6 character", function() {
    //     var password : Control = new Control('asdfdf');
    //     expect(5).toBeGreaterThan(password.value.toString().length);
    // });
});


