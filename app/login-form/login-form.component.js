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
var user_1 = require("./user");
var router_1 = require("@angular/router");
var LoginFieldComponent = (function () {
    function LoginFieldComponent(router) {
        this.router = router;
        this.user = new user_1.User('', '');
        this.submitted = false;
        this.active = true;
    }
    LoginFieldComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    LoginFieldComponent.prototype.userLogin = function () {
        var _this = this;
        this.user = new user_1.User('', '');
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    LoginFieldComponent.prototype.gotToRegistration = function () {
        this.router.navigate(['/registration']);
    };
    LoginFieldComponent.prototype.gotToProfile = function () {
        this.router.navigate(['/profile']);
    };
    LoginFieldComponent = __decorate([
        core_1.Component({
            selector: 'log',
            templateUrl: 'app/login-form/login-form.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginFieldComponent);
    return LoginFieldComponent;
}());
exports.LoginFieldComponent = LoginFieldComponent;
//# sourceMappingURL=login-form.component.js.map