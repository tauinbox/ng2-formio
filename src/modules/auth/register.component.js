"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_service_1 = require("./auth.service");
var FormioAuthRegisterComponent = (function () {
    function FormioAuthRegisterComponent(service) {
        this.service = service;
    }
    return FormioAuthRegisterComponent;
}());
FormioAuthRegisterComponent.decorators = [
    { type: core_1.Component, args: [{
                template: '<formio [src]="service.registerForm" (submit)="service.onRegisterSubmit($event)"></formio>'
            },] },
];
/** @nocollapse */
FormioAuthRegisterComponent.ctorParameters = function () { return [
    { type: auth_service_1.FormioAuthService, },
]; };
exports.FormioAuthRegisterComponent = FormioAuthRegisterComponent;
