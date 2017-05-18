"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var FormioAlerts = (function () {
    function FormioAlerts() {
        this.alerts = [];
    }
    FormioAlerts.prototype.setAlert = function (alert) {
        this.alerts = [alert];
    };
    FormioAlerts.prototype.addAlert = function (alert) {
        this.alerts.push(alert);
    };
    FormioAlerts.prototype.setAlerts = function (alerts) {
        this.alerts = alerts;
    };
    return FormioAlerts;
}());
FormioAlerts.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
FormioAlerts.ctorParameters = function () { return []; };
exports.FormioAlerts = FormioAlerts;
var FormioAlertsComponent = (function () {
    function FormioAlertsComponent(alerts) {
        this.alerts = alerts;
    }
    return FormioAlertsComponent;
}());
FormioAlertsComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'formio-alerts',
                template: '<div *ngFor="let alert of alerts.alerts" class="alert alert-{{ alert.type }}" role="alert">{{ alert.message }}</div>'
            },] },
];
/** @nocollapse */
FormioAlertsComponent.ctorParameters = function () { return [
    { type: FormioAlerts, },
]; };
exports.FormioAlertsComponent = FormioAlertsComponent;
