exports.ids = [1];
exports.modules = {

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordingRoutes", function() { return recordingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingModule", function() { return RecordingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imports_core_module__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recording_component__ = __webpack_require__(681);





var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_4__recording_component__["a" /* RecordingComponent */]
];
var recordingRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__recording_component__["a" /* RecordingComponent */],
        data: { roles: ['anonymous', 'user'] }
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(recordingRoutes);
var RecordingModule = (function () {
    function RecordingModule() {
    }
    return RecordingModule;
}());
RecordingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        imports: __WEBPACK_IMPORTED_MODULE_3__imports_core_module__["a" /* COMMON_MODULES */].concat([
            routing
        ]),
        declarations: COMPONENTS,
        exports: COMPONENTS
    })
], RecordingModule);

//# sourceMappingURL=recording.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);


var RecordingComponent = (function () {
    function RecordingComponent() {
        this.events = [];
    }
    RecordingComponent.prototype.onClick = function (event) {
        console.log(event);
        this.events.push({
            label: 'Another click!'
        });
    };
    return RecordingComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* HostListener */])('document:click', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["c" /* __metadata */]("design:returntype", void 0)
], RecordingComponent.prototype, "onClick", null);
RecordingComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["a" /* __decorate */]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'bc-recording',
        template: __webpack_require__(682),
        styles: [__webpack_require__(683)]
    })
], RecordingComponent);

//# sourceMappingURL=recording.component.js.map

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"record-wrapper\">\n    <header>\n        <a md-button>⏺️</a>\n        <a md-button>⏸</a>\n    </header>\n\n    <div class=\"event-wrapper\">\n        <span *ngFor=\"let e of events\">{{ e.label }}</span>\n    </div>\n</div>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(684);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 684:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(111)(undefined);
// imports


// module
exports.push([module.i, ":host .record-wrapper {\n  display: flex;\n  flex-direction: column; }\n  :host .record-wrapper a {\n    padding: 5px;\n    font-size: 30px;\n    line-height: 30px;\n    z-index: 100;\n    height: 40px;\n    width: 40px; }\n  :host .record-wrapper .event-wrapper {\n    display: flex;\n    flex-wrap: wrap; }\n", ""]);

// exports


/***/ })

};;
//# sourceMappingURL=server.bundle.map