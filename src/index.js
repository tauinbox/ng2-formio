"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var formio_component_1 = require("./formio.component");
var formio_alerts_1 = require("./formio.alerts");
var formio_loader_1 = require("./formio.loader");
var FormioModule = (function () {
    function FormioModule() {
    }
    return FormioModule;
}());
FormioModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                declarations: [
                    formio_component_1.FormioComponent,
                    formio_loader_1.FormioLoaderComponent,
                    formio_alerts_1.FormioAlertsComponent
                ],
                exports: [
                    formio_component_1.FormioComponent,
                    formio_loader_1.FormioLoaderComponent,
                    formio_alerts_1.FormioAlertsComponent
                ],
                providers: [
                    formio_loader_1.FormioLoader,
                    formio_alerts_1.FormioAlerts
                ]
            },] },
];
/** @nocollapse */
FormioModule.ctorParameters = function () { return []; };
exports.FormioModule = FormioModule;
var formio_config_1 = require("./formio.config");
exports.FormioAppConfig = formio_config_1.FormioAppConfig;
var formio_loader_2 = require("./formio.loader");
exports.FormioLoader = formio_loader_2.FormioLoader;
