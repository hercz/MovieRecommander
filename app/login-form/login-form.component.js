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
/**
 * Created by herczkumihalybalazs on 2016.06.21..
 */
var core_1 = require("@angular/core");
var user_1 = require("../user");
var router_1 = require("@angular/router");
var login_form_service_1 = require("./login-form.service");
var LoginFieldComponent = (function () {
    function LoginFieldComponent(router, loginHttpService) {
        this.router = router;
        this.loginHttpService = loginHttpService;
        this.user = new user_1.User;
        this.submitted = false;
        this.mode = 'Observable';
        this.active = true;
    }
    LoginFieldComponent.prototype.onSubmit = function () {
        this.sendLoginData(this.user);
        this.submitted = true;
    };
    LoginFieldComponent.prototype.sendLoginData = function (user) {
        var _this = this;
        this.loginHttpService.sendLoginData(user)
            .then(function (error) { return _this.errorMessage = error; });
    };
    LoginFieldComponent.prototype.gotToRegistration = function () {
        this.router.navigate(['/registration']);
    };
    LoginFieldComponent = __decorate([
        core_1.Component({
            selector: 'log',
            templateUrl: 'app/login-form/login-form.component.html',
            styleUrls: ['app/login-form/login-form.component.css'],
            providers: [login_form_service_1.LoginService]
        }), 
        __metadata('design:paramtypes', [router_1.Router, login_form_service_1.LoginService])
    ], LoginFieldComponent);
    return LoginFieldComponent;
}());
exports.LoginFieldComponent = LoginFieldComponent;
//# sourceMappingURL=login-form.component.js.map