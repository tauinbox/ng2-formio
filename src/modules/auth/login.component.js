"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var FormioAuthLoginComponent = (function () {
    function FormioAuthLoginComponent(service) {
        this.service = service;
    }
    return FormioAuthLoginComponent;
}());
FormioAuthLoginComponent.decorators = [
    { type: core_1.Component, args: [{
                template: '<formio [src]="service.loginForm" (submit)="service.onLoginSubmit($event)"></formio>'
            },] },
];
/** @nocollapse */
FormioAuthLoginComponent.ctorParameters = function () { return [
    { type: auth_service_1.FormioAuthService, },
]; };
exports.FormioAuthLoginComponent = FormioAuthLoginComponent;
