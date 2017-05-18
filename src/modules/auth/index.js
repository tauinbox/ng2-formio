"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var index_1 = require("../../index");
var auth_component_1 = require("./auth.component");
var login_component_1 = require("./login.component");
var register_component_1 = require("./register.component");
function FormioAuthRoutes(config) {
    config = config || {};
    return [
        {
            path: '',
            component: config.auth || auth_component_1.FormioAuthComponent,
            children: [
                {
                    path: '',
                    redirectTo: 'login',
                    pathMatch: 'full'
                },
                {
                    path: 'login',
                    component: config.login || login_component_1.FormioAuthLoginComponent
                },
                {
                    path: 'register',
                    component: config.register || register_component_1.FormioAuthRegisterComponent
                }
            ]
        }
    ];
}
exports.FormioAuthRoutes = FormioAuthRoutes;
;
var FormioAuth = (function () {
    function FormioAuth() {
    }
    return FormioAuth;
}());
FormioAuth.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    index_1.FormioModule,
                    router_1.RouterModule.forChild([])
                ],
                declarations: [
                    auth_component_1.FormioAuthComponent,
                    login_component_1.FormioAuthLoginComponent,
                    register_component_1.FormioAuthRegisterComponent
                ]
            },] },
];
/** @nocollapse */
FormioAuth.ctorParameters = function () { return []; };
exports.FormioAuth = FormioAuth;
var auth_config_1 = require("./auth.config");
exports.FormioAuthConfig = auth_config_1.FormioAuthConfig;
var auth_service_1 = require("./auth.service");
exports.FormioAuthService = auth_service_1.FormioAuthService;
var auth_component_2 = require("./auth.component");
exports.FormioAuthComponent = auth_component_2.FormioAuthComponent;
var login_component_2 = require("./login.component");
exports.FormioAuthLoginComponent = login_component_2.FormioAuthLoginComponent;
var register_component_2 = require("./register.component");
exports.FormioAuthRegisterComponent = register_component_2.FormioAuthRegisterComponent;
