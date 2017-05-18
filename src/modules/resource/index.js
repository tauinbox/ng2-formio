"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var index_1 = require("../../index");
var grid_1 = require("../grid");
var router_1 = require("@angular/router");
var resource_component_1 = require("./resource.component");
var view_component_1 = require("./view.component");
var edit_component_1 = require("./edit.component");
var delete_component_1 = require("./delete.component");
var create_component_1 = require("./create.component");
var index_component_1 = require("./index.component");
var FormioResource = (function () {
    function FormioResource() {
    }
    return FormioResource;
}());
FormioResource.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    index_1.FormioModule,
                    grid_1.FormioGrid,
                    router_1.RouterModule.forChild([])
                ],
                declarations: [
                    resource_component_1.FormioResourceComponent,
                    create_component_1.FormioResourceCreateComponent,
                    index_component_1.FormioResourceIndexComponent,
                    view_component_1.FormioResourceViewComponent,
                    edit_component_1.FormioResourceEditComponent,
                    delete_component_1.FormioResourceDeleteComponent
                ]
            },] },
];
/** @nocollapse */
FormioResource.ctorParameters = function () { return []; };
exports.FormioResource = FormioResource;
var resource_routes_1 = require("./resource.routes");
exports.FormioResourceRoutes = resource_routes_1.FormioResourceRoutes;
var resource_config_1 = require("./resource.config");
exports.FormioResourceConfig = resource_config_1.FormioResourceConfig;
exports.FormioResources = resource_config_1.FormioResources;
var resource_component_2 = require("./resource.component");
exports.FormioResourceComponent = resource_component_2.FormioResourceComponent;
var view_component_2 = require("./view.component");
exports.FormioResourceViewComponent = view_component_2.FormioResourceViewComponent;
var edit_component_2 = require("./edit.component");
exports.FormioResourceEditComponent = edit_component_2.FormioResourceEditComponent;
var delete_component_2 = require("./delete.component");
exports.FormioResourceDeleteComponent = delete_component_2.FormioResourceDeleteComponent;
var create_component_2 = require("./create.component");
exports.FormioResourceCreateComponent = create_component_2.FormioResourceCreateComponent;
var index_component_2 = require("./index.component");
exports.FormioResourceIndexComponent = index_component_2.FormioResourceIndexComponent;
var resource_service_1 = require("./resource.service");
exports.FormioResourceService = resource_service_1.FormioResourceService;
