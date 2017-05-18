"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var resource_service_1 = require("./resource.service");
var resource_config_1 = require("./resource.config");
var FormioResourceViewComponent = (function () {
    function FormioResourceViewComponent(service, config) {
        this.service = service;
        this.config = config;
    }
    return FormioResourceViewComponent;
}());
FormioResourceViewComponent.decorators = [
    { type: core_1.Component, args: [{
                template: '<formio [form]="service.form" [submission]="service.resource" [hideComponents]="config.parents" [readOnly]="true"></formio>'
            },] },
];
/** @nocollapse */
FormioResourceViewComponent.ctorParameters = function () { return [
    { type: resource_service_1.FormioResourceService, },
    { type: resource_config_1.FormioResourceConfig, },
]; };
exports.FormioResourceViewComponent = FormioResourceViewComponent;
