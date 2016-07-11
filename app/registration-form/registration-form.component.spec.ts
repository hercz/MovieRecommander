import {Control} from "@angular/common";
import {
    describe,
    expect,
    it,
} from '@angular/core/testing';


describe("Test registration form first name length", () => {
    it("should test the first name of length, with incorrect data (more than 30 chars) ", function() {
        var firstName : Control = new Control('Lakatos Armando Ronaldo Neymarka');
        expect(30).toBeLessThan(firstName.value.toString().length);
    });
    it("should test the first name of length, with correct data (no longer than 30 character)", function() {
        var firstName : Control = new Control('Lakatos Armando Ronaldo');
        expect(30).not.toBeLessThan(firstName.value.toString().length);
    });
});

describe("Test registration form last name length", () => {
    it("should test the last name of length, with incorrect data (more than 50 chars)", function() {
        var lastName : Control = new Control('Lakatos Armando Ronaldo Neymarka Józska Pista Kutya');
        expect(50).toBeLessThan(lastName.value.toString().length);
    });
    it("should test the last name of length, with correct data (no longer than 50 character)", function() {
        var lastName : Control = new Control('Lakatos Armando Ronaldo Neymar');
        expect(50).not.toBeLessThan(lastName.value.toString().length);
    });
});

describe("Test registration form nick name length", () => {
    it("should test the nick name of length, with incorrect data (more than 20 chars)", function() {
        var nickName : Control = new Control('apacukafundaluka12345');
        expect(20).toBeLessThan(nickName.value.toString().length);
    });
    it("should test the nick name of length, with correct data (no longer than 20 character)", function() {
        var nickName : Control = new Control('apacuka');
        expect(20).not.toBeLessThan(nickName.value.toString().length);
    });
});

describe("Test registration form address length", () => {
    it("should test the address of length, with incorrect data (more than 150 chars)", function() {
        var address : Control = new Control('sixteencharacter'.repeat(10));
        expect(150).toBeLessThan(address.value.toString().length);
    });
    it("should test the address of length, with correct data (no longer than 150 character)", function() {
        var address : Control = new Control('sixteencharacter');
        expect(150).not.toBeLessThan(address.value.toString().length);
    });
});

describe("Test registration form password length", () => {
    it("should test the password of length,  with incorrect data (more than 50 chars)", function() {
        var password : Control = new Control('apacukaSDDSADfdfdfdfdfdfdfdfdfdfdfafundaluka123452222');
        expect(50).toBeLessThan(password.value.toString().length);
    });
    it("should test the password of length, with correct data (no longer than 50 character)", function() {
        var password : Control = new Control('apSfdfd3452222');
        expect(50).not.toBeLessThan(password.value.toString().length);
    });
    // it("should test the password of length, at least 6 character", function() {
    //     var password : Control = new Control('asdfdf');
    //     expect(5).toBeGreaterThan(password.value.toString().length);
    // });
});

describe('Smoke-tester method for configure Jasmine from registration-form.component.spec.ts', () => {
    it(" is a 'test' test : true = true", function() {
        expect(true).toEqual(true);
    });
});

