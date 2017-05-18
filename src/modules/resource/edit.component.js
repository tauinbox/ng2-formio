"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var resource_config_1 = require("./resource.config");
var FormioResourceEditComponent = (function () {
    function FormioResourceEditComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
    }
    FormioResourceEditComponent.prototype.onSubmit = function (submission) {
        var _this = this;
        var edit = this.service.resource;
        edit.data = submission.data;
        this.service.save(edit).then(function () {
            _this.router.navigate(['../', 'view'], { relativeTo: _this.route });
        });
    };
    return FormioResourceEditComponent;
}());
FormioResourceEditComponent.decorators = [
    { type: core_1.Component, args: [{
                template: '<formio [form]="service.form" [submission]="service.resource" [refresh]="service.refresh" [hideComponents]="config.parents" (submit)="onSubmit($event)"></formio>'
            },] },
];
/** @nocollapse */
FormioResourceEditComponent.ctorParameters = function () { return [
    { type: resource_service_1.FormioResourceService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
    { type: resource_config_1.FormioResourceConfig, },
]; };
exports.FormioResourceEditComponent = FormioResourceEditComponent;
