"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resource_service_1 = require("./resource.service");
var FormioResourceComponent = (function () {
    function FormioResourceComponent(service, route) {
        this.service = service;
        this.route = route;
        this.service.loadResource(this.route);
    }
    return FormioResourceComponent;
}());
FormioResourceComponent.decorators = [
    { type: core_1.Component, args: [{
                styles: [
                    'ul.nav.nav-tabs { margin-bottom: 20px; }',
                    '.resource-back-icon { font-size: 1.2em; padding: 0.6em; }'
                ],
                template: '<ul class="nav nav-tabs">' +
                    '<a routerLink="../" class="pull-left"><span class="glyphicon glyphicon-chevron-left resource-back-icon"></span></a>' +
                    '<li role="presentation" routerLinkActive="active"><a routerLink="view">View</a></li>' +
                    '<li role="presentation" routerLinkActive="active"><a routerLink="edit">Edit</a></li>' +
                    '<li role="presentation pull-right" routerLinkActive="active"><a routerLink="delete"><span class="glyphicon glyphicon-trash"></span></a></li>' +
                    '</ul>' +
                    '<router-outlet></router-outlet>'
            },] },
];
/** @nocollapse */
FormioResourceComponent.ctorParameters = function () { return [
    { type: resource_service_1.FormioResourceService, },
    { type: router_1.ActivatedRoute, },
]; };
exports.FormioResourceComponent = FormioResourceComponent;
