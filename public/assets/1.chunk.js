webpackJsonpng_seed__name_([1],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPONENTS", function() { return COMPONENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recordingRoutes", function() { return recordingRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecordingModule", function() { return RecordingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__imports_core_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recording_component__ = __webpack_require__(371);





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
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["RouterModule"].forChild(recordingRoutes);
var RecordingModule = (function () {
    function RecordingModule() {
    }
    return RecordingModule;
}());
RecordingModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: __WEBPACK_IMPORTED_MODULE_3__imports_core_module__["a" /* COMMON_MODULES */].concat([
            routing
        ]),
        declarations: COMPONENTS,
        exports: COMPONENTS
    })
], RecordingModule);



/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);


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
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostListener"])('document:click', ['$event']),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Function),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object]),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:returntype", void 0)
], RecordingComponent.prototype, "onClick", null);
RecordingComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'bc-recording',
        template: __webpack_require__(372),
        styles: [__webpack_require__(373)]
    })
], RecordingComponent);



/***/ }),

/***/ 372:
/***/ (function(module, exports) {

module.exports = "<div class=\"record-wrapper\">\n    <header>\n        <a md-button>⏺️</a>\n        <a md-button>⏸</a>\n    </header>\n\n    <div class=\"event-wrapper\">\n        <span *ngFor=\"let e of events\">{{ e.label }}</span>\n    </div>\n</div>\n";

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(374);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, ":host .record-wrapper {\n  display: flex;\n  flex-direction: column; }\n  :host .record-wrapper a {\n    padding: 5px;\n    font-size: 30px;\n    line-height: 30px;\n    z-index: 100;\n    height: 40px;\n    width: 40px; }\n  :host .record-wrapper .event-wrapper {\n    display: flex;\n    flex-wrap: wrap; }\n", ""]);

// exports


/***/ })

});
//# sourceMappingURL=1.map