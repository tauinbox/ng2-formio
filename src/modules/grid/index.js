"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var index_1 = require("../../index");
var grid_component_1 = require("./grid.component");
var pagination_1 = require("ng2-bootstrap/pagination");
var FormioGrid = (function () {
    function FormioGrid() {
    }
    return FormioGrid;
}());
FormioGrid.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule,
                    forms_1.FormsModule,
                    index_1.FormioModule,
                    pagination_1.PaginationModule.forRoot()
                ],
                declarations: [
                    grid_component_1.FormioGridComponent
                ],
                exports: [
                    grid_component_1.FormioGridComponent
                ]
            },] },
];
/** @nocollapse */
FormioGrid.ctorParameters = function () { return []; };
exports.FormioGrid = FormioGrid;
