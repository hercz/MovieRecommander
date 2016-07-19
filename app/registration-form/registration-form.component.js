"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var custom_validators_1 = require("./custom-validators");
var registration_form_httpService_1 = require("./registration-form.httpService");
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var user_1 = require("../user");
var RegistrationFieldComponent = (function () {
    //TODO: kiszervezes
    //TODO: magic numbers kiszervezes
    //TODO: fuggvenyhivasok ksizervezese - validators.compose best practise?
    function RegistrationFieldComponent(router, registrationFormHttpService, builder) {
        this.router = router;
        this.registrationFormHttpService = registrationFormHttpService;
        this.mode = 'Observable';
        this.user = new user_1.User;
        this.firstName = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.maxLength(30), custom_validators_1.CustomValidators.nameFormat]));
        this.lastName = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.maxLength(50), custom_validators_1.CustomValidators.nameFormat]));
        this.nickName = new common_1.Control('', common_1.Validators.maxLength(20));
        this.email = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, custom_validators_1.CustomValidators.emailFormat]));
        this.address = new common_1.Control('', common_1.Validators.maxLength(150));
        this.birthDate = new common_1.Control('', common_1.Validators.required);
        this.gender = new common_1.Control('', common_1.Validators.required);
        this.password = new common_1.Control('', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6), common_1.Validators.maxLength(50), custom_validators_1.CustomValidators.passwordFormat]));
        this.confirmPassword = new common_1.Control('', common_1.Validators.required);
        this.group = builder.group({
            firstName: this.firstName,
            lastName: this.lastName,
            nickName: this.nickName,
            email: this.email,
            gender: this.gender,
            birthDate: this.birthDate,
            address: this.address,
            password: this.password,
            confirmPassword: this.confirmPassword
        }, { validator: custom_validators_1.matchingPasswords('password', 'confirmPassword') });
    }
    RegistrationFieldComponent.prototype.sendRegistrationData = function (user) {
        var _this = this;
        this.registrationFormHttpService.sendRegistrationData(user)
            .subscribe(function (error) { return _this.errorMessage = error; });
    };
    RegistrationFieldComponent.prototype.instantiatesUserObject = function () {
        this.user.firstName = this.firstName.value;
        this.user.lastName = this.lastName.value;
        this.user.nickName = this.nickName.value;
        this.user.email = this.email.value;
        this.user.address = this.address.value;
        this.user.birthDate = this.birthDate.value;
        this.user.gender = this.gender.value;
        this.user.password = this.password.value;
    };
    RegistrationFieldComponent.prototype.onSubmit = function () {
        //instantiates a user object
        this.instantiatesUserObject();
        //send that user object
        this.sendRegistrationData(this.user);
    };
    RegistrationFieldComponent.prototype.gotToProfileFromReg = function () {
        //navigate to Profile
        this.router.navigate(['/profile']);
    };
    RegistrationFieldComponent = __decorate([
        core_1.Component({
            selector: 'reg',
            directives: [common_1.FORM_DIRECTIVES, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            providers: [registration_form_httpService_1.RegistrationFormHttpService],
            templateUrl: 'app/registration-form/registration-form.component.html',
            styleUrls: ['app/registration-form/registration-form.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, registration_form_httpService_1.RegistrationFormHttpService, common_1.FormBuilder])
    ], RegistrationFieldComponent);
    return RegistrationFieldComponent;
}());
exports.RegistrationFieldComponent = RegistrationFieldComponent;
//# sourceMappingURL=registration-form.component.js.map