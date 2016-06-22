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
var router_deprecated_1 = require("@angular/router-deprecated");
var login_form_component_1 = require('./login-form/login-form.component');
var registration_form_component_1 = require('./registration-form/registration-form.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Movie Recommender';
    }
    AppComponent = __decorate([
        router_deprecated_1.RouteConfig([
            {
                path: '/Login',
                name: 'Login',
                component: login_form_component_1.LoginFieldComponent,
                useAsDefault: true
            },
            {
                path: '/Register',
                name: 'Register',
                component: registration_form_component_1.RegistrationFieldComponent,
            }
        ]),
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/app.component.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, login_form_component_1.LoginFieldComponent],
            providers: [
                router_deprecated_1.ROUTER_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map