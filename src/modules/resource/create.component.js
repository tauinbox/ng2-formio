"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var resource_config_1 = require("./resource.config");
var FormioResourceCreateComponent = (function () {
    function FormioResourceCreateComponent(service, route, router, config) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
    }
    FormioResourceCreateComponent.prototype.onSubmit = function (submission) {
        var _this = this;
        this.service.save(submission).then(function () {
            _this.router.navigate(['../', _this.service.resource._id, 'view'], { relativeTo: _this.route });
        });
    };
    return FormioResourceCreateComponent;
}());
FormioResourceCreateComponent.decorators = [
    { type: core_1.Component, args: [{
                styles: ['.back-button { font-size: 0.8em; }'],
                template: '<h3 *ngIf="service.form" style="margin-top:0;"><a routerLink="../" class="back-button"><span class="glyphicon glyphicon-chevron-left"></span></a> | New {{ service.form.title }}</h3>' +
                    '<formio [form]="service.form" [submission]="service.resource" [refresh]="service.refresh" [hideComponents]="config.parents" (submit)="onSubmit($event)"></formio>'
            },] },
];
/** @nocollapse */
FormioResourceCreateComponent.ctorParameters = function () { return [
    { type: resource_service_1.FormioResourceService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
    { type: resource_config_1.FormioResourceConfig, },
]; };
exports.FormioResourceCreateComponent = FormioResourceCreateComponent;
