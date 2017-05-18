"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var FormioResourceDeleteComponent = (function () {
    function FormioResourceDeleteComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
    }
    FormioResourceDeleteComponent.prototype.onDelete = function () {
        var _this = this;
        this.service.remove().then(function () {
            _this.router.navigate(['../../'], { relativeTo: _this.route });
        });
    };
    FormioResourceDeleteComponent.prototype.onCancel = function () {
        this.router.navigate(['../', 'view'], { relativeTo: this.route });
    };
    return FormioResourceDeleteComponent;
}());
FormioResourceDeleteComponent.decorators = [
    { type: core_1.Component, args: [{
                template: '<h3>Are you sure you wish to delete this record?</h3>' +
                    '<div class="btn-toolbar">' +
                    '<button (click)="onDelete()" class="btn btn-danger">Yes</button>' +
                    '<button (click)="onCancel()" class="btn btn-danger">No</button>' +
                    '</div>'
            },] },
];
/** @nocollapse */
FormioResourceDeleteComponent.ctorParameters = function () { return [
    { type: resource_service_1.FormioResourceService, },
    { type: router_1.ActivatedRoute, },
    { type: router_1.Router, },
]; };
exports.FormioResourceDeleteComponent = FormioResourceDeleteComponent;
