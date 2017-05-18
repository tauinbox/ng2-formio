"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var resource_config_1 = require("./resource.config");
var _each = require('lodash/each');
var FormioResourceIndexComponent = (function () {
    function FormioResourceIndexComponent(service, route, router, config) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.router = router;
        this.config = config;
        this.gridQuery = {};
        if (this.config.parents && this.config.parents.length) {
            // Wait for the parents to load before loading this grid.
            this.service.onParents.subscribe(function (parents) {
                _each(parents, function (parent) {
                    _this.gridQuery['data.' + parent.name + '._id'] = parent.resource._id;
                });
                // Set the source to load the grid.
                _this.gridSrc = _this.service.formUrl;
            });
        }
        else if (this.service.formUrl) {
            this.gridSrc = this.service.formUrl;
        }
    }
    FormioResourceIndexComponent.prototype.onSelect = function (row) {
        this.router.navigate([row._id, 'view'], { relativeTo: this.route });
    };
    return FormioResourceIndexComponent;
}());
FormioResourceIndexComponent.decorators = [
    { type: core_1.Component, args: [{
                template: '<formio-grid [src]="gridSrc" [query]="gridQuery" [onForm]="service.formLoaded" (select)="onSelect($event)" (error)="service.onError($event)"></formio-grid>' +
                    '<button class="btn btn-primary" *ngIf="service.form" routerLink="new"><span class="glyphicon glyphicon-plus"></span> New {{ service.form.title }}</button>'
            },] },
];
/** @nocollapse */
FormioResourceIndexComponent.ctorParameters = function () { return [
    { type: resource_service_1.FormioResourceService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
    { type: resource_config_1.FormioResourceConfig, },
]; };
exports.FormioResourceIndexComponent = FormioResourceIndexComponent;
