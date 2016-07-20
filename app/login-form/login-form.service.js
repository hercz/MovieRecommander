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
 * Created by herczkumihalybalazs on 2016.07.05..
 */
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var router_1 = require("@angular/router");
var LoginService = (function () {
    function LoginService(router, http) {
        this.router = router;
        this.http = http;
        this.serverLoginUrl = 'http://localhost:8081/login'; // URL to web API
    }
    LoginService.prototype.sendLoginData = function (user) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.serverLoginUrl, user, options)
            .toPromise()
            .then(function () {
            _this.gotToProfileFromLog();
        })
            .catch(this.handleError);
    };
    LoginService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        if (error.status == 401) {
            alert("Bad username or password!");
        }
        else {
            alert("Server Error");
        }
        console.log(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    LoginService.prototype.gotToProfileFromLog = function () {
        this.router.navigate(['/profile']);
    };
    LoginService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login-form.service.js.map