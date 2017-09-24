var ng_seed_app =
webpackJsonpng_seed__name_([2],{

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(81);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(381);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(791);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(786);

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(401);

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(1);

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["main"] = main;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_zone_js_dist_zone__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angularclass_bootloader__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_browser_module__ = __webpack_require__(241);





function main() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_browser_module__["a" /* AppBrowserModule */]);
}
Object(__WEBPACK_IMPORTED_MODULE_3__angularclass_bootloader__["bootloader"])(main);


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(797);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(730);

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export searchClientFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_universal_state_transfer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_cache_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_cache_platform_browser__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__imports_location_service__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__imports_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__imports_core_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hidden_location_strategy__ = __webpack_require__(352);















function searchClientFactory(http) {
    return new (Object(__WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js__["sockifyClient"])(__WEBPACK_IMPORTED_MODULE_11__imports_search_service__["a" /* SearchService */], 'SearchService', window.SOCKIFY_SERVER || 'https://localhost:8000'))(http);
}
var AppBrowserModule = (function () {
    function AppBrowserModule() {
    }
    return AppBrowserModule;
}());
AppBrowserModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["BrowserAnimationsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["BrowserModule"].withServerTransition({
                appId: 'my-app-id'
            }),
            __WEBPACK_IMPORTED_MODULE_3__ngx_universal_state_transfer__["BrowserStateTransferModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_5__ngx_cache_platform_browser__["BrowserCacheModule"].forRoot([
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__ngx_cache_core__["CACHE"],
                    useClass: __WEBPACK_IMPORTED_MODULE_5__ngx_cache_platform_browser__["MemoryCacheService"]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__ngx_cache_platform_browser__["STATE_ID"],
                    useValue: __WEBPACK_IMPORTED_MODULE_3__ngx_universal_state_transfer__["DEFAULT_STATE_ID"]
                },
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["LocationStrategy"],
                    useClass: __WEBPACK_IMPORTED_MODULE_14__hidden_location_strategy__["a" /* HiddenLocationStrategy */]
                }
            ]),
            __WEBPACK_IMPORTED_MODULE_13__imports_core_module__["b" /* SharedModule */].forRoot(searchClientFactory),
            __WEBPACK_IMPORTED_MODULE_6__app_module__["a" /* AppModule */]
        ],
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["PlatformLocation"],
                useClass: __WEBPACK_IMPORTED_MODULE_10__imports_location_service__["a" /* MockPlatformLocation */],
                deps: []
            }
        ]
    })
], AppBrowserModule);



/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(774);

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configFactory */
/* unused harmony export metaFactory */
/* unused harmony export translateFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_universal_state_transfer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_cache_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_config_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_config_fs_loader__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_universal_config_loader__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routes__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__imports_core_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__change_language_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common__ = __webpack_require__(9);


















function configFactory(platformId, http) {
    var serverLoader = new __WEBPACK_IMPORTED_MODULE_8__ngx_config_fs_loader__["ConfigFsLoader"]('./public/assets/config.json');
    var browserLoader = {
        loadSettings: function () { return Promise.resolve((typeof window !== 'undefined' ? window : {}).CONFIG
            || {}); }
    };
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_universal_config_loader__["UniversalConfigLoader"](platformId, serverLoader, browserLoader);
}
function metaFactory(config, translate) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__["MetaStaticLoader"]();
}
function translateFactory(platformId, http) {
    return {
        getTranslation: function (lang) { return __WEBPACK_IMPORTED_MODULE_15_rxjs_Observable__["Observable"].of((typeof window !== 'undefined' ? window : {}).TRANSLATIONS); }
    };
}
var AppModule = (function () {
    function AppModule(platformId) {
        this.platformId = platformId;
    }
    return AppModule;
}());
AppModule = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__ngx_universal_state_transfer__["HttpTransferModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routes__["a" /* routes */], { initialNavigation: 'enabled', useHash: false }),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_cache_core__["CacheModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7__ngx_config_core__["ConfigModule"].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_7__ngx_config_core__["ConfigLoader"],
                useFactory: (configFactory),
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__["MetaModule"].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_10__ngx_meta_core__["MetaLoader"],
                useFactory: (metaFactory),
                deps: [__WEBPACK_IMPORTED_MODULE_7__ngx_config_core__["ConfigService"], __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["TranslateService"]]
            }),
            __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["TranslateModule"].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_11__ngx_translate_core__["TranslateLoader"],
                    useFactory: (translateFactory),
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]]
                }
            })
        ].concat(__WEBPACK_IMPORTED_MODULE_14__imports_core_module__["c" /* sharedModules */]),
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_17__angular_common__["APP_BASE_HREF"],
                useValue: '/'
            }
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__change_language_component__["a" /* ChangeLanguageComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* AppComponent */]]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [Object])
], AppModule);



/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(768);

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(784);

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_meta_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__change_language_component__ = __webpack_require__(44);


var routes = [
    {
        path: '',
        children: [
            {
                path: 'search',
                loadChildren: function() { return new Promise(function (resolve) {  __webpack_require__.e/* require.ensure */(0).then((function (require) {    resolve(__webpack_require__(353)['SearchModule']);  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);})}
            }
        ],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_0__ngx_meta_core__["MetaGuard"]],
        data: {
            i18n: {
                isRoot: true
            }
        }
    },
    {
        path: 'change-language/:languageCode',
        component: __WEBPACK_IMPORTED_MODULE_1__change_language_component__["a" /* ChangeLanguageComponent */]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ 248:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(592);

/***/ }),

/***/ 249:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(425);

/***/ }),

/***/ 250:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(581);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(114);

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(152);

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(411);

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(376);

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(688);

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(676);

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(568);

/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(609);

/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(695);

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(377);

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(37);

/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(496);

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(372);

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(365);

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(527);

/***/ }),

/***/ 266:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(415);

/***/ }),

/***/ 267:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(268);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(269)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./layout.scss", function() {
			var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/sass-loader/lib/loader.js!./layout.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip:not(.mat-basic-chip) {\n  font-size: 13px;\n  line-height: 16px; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-input-container {\n  font: 400 inherit/1.125 Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-input-wrapper {\n  padding-bottom: 1.29688em; }\n\n.mat-input-prefix .mat-icon,\n.mat-input-prefix .mat-datepicker-toggle,\n.mat-input-suffix .mat-icon,\n.mat-input-suffix .mat-datepicker-toggle {\n  font-size: 150%; }\n\n.mat-input-prefix .mat-icon-button,\n.mat-input-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-input-prefix .mat-icon-button .mat-icon,\n  .mat-input-suffix .mat-icon-button .mat-icon {\n    line-height: 1.5; }\n\n.mat-input-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333%; }\n\n.mat-input-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-input-placeholder {\n  top: 1.28125em; }\n  .mat-input-placeholder.mat-float:not(.mat-empty), .mat-focused .mat-input-placeholder.mat-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333%; }\n\n.mat-input-underline {\n  bottom: 1.29688em; }\n\n.mat-input-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.60417em;\n  top: calc(100% - 1.72917em); }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader {\n  font: 500 12px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\napp-root {\n  /**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n  /* Theme for the ripple elements.*/\n  /** The mixins below are shared between md-menu and md-select */\n  /**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n  /* stylelint-disable material/no-prefixes */\n  /* stylelint-enable */\n  /**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n  /**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n  /* Theme for the ripple elements.*/\n  /** The mixins below are shared between md-menu and md-select */\n  /**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n  /* stylelint-disable material/no-prefixes */\n  /* stylelint-enable */\n  /**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */ }\n  app-root {\n    all: initial; }\n  app-root, app-root *, app-root *:before, app-root *:after, app-root input, app-root button, app-root a {\n    /*\n    animation: none;\n    animation-delay: 0;\n    animation-direction: normal;\n    animation-duration: 0;\n    animation-fill-mode: none;\n    animation-iteration-count: 1;\n    animation-name: none;\n    animation-play-state: running;\n    animation-timing-function: ease;\n    backface-visibility: visible;\n    background: 0;\n    background-attachment: scroll;\n    background-clip: border-box;\n    background-color: transparent;\n    background-image: none;\n    background-origin: padding-box;\n    background-position: 0 0;\n    background-position-x: 0;\n    background-position-y: 0;\n    background-repeat: repeat;\n    background-size: auto auto;\n    border: 0;\n    border-style: none;\n    border-width: medium;\n    border-color: inherit;\n    border-bottom: 0;\n    border-bottom-color: inherit;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-style: none;\n    border-bottom-width: medium;\n    border-collapse: separate;\n    border-image: none;\n    border-left: 0;\n    border-left-color: inherit;\n    border-left-style: none;\n    border-left-width: medium;\n    border-radius: 0;\n    border-right: 0;\n    border-right-color: inherit;\n    border-right-style: none;\n    border-right-width: medium;\n    border-spacing: 0;\n    border-top: 0;\n    border-top-color: inherit;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top-style: none;\n    border-top-width: medium;\n    bottom: auto;\n    box-shadow: none;\n    box-sizing: content-box;\n    caption-side: top;\n    clear: none;\n    clip: auto;\n    color: inherit;\n    columns: auto;\n    column-count: auto;\n    column-fill: balance;\n    column-gap: normal;\n    column-rule: medium none currentColor;\n    column-rule-color: currentColor;\n    column-rule-style: none;\n    column-rule-width: none;\n    column-span: 1;\n    column-width: auto;\n    content: normal;\n    counter-increment: none;\n    counter-reset: none;\n    cursor: auto;\n    direction: ltr;\n    display: inline;\n    empty-cells: show;\n    float: none;\n    font: normal;\n    font-family: inherit;\n    font-size: medium;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: normal;\n    height: auto;\n    hyphens: none;\n    left: auto;\n    letter-spacing: normal;\n    line-height: normal;\n    list-style: none;\n    list-style-image: none;\n    list-style-position: outside;\n    list-style-type: disc;\n    margin: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    max-height: none;\n    max-width: none;\n    min-height: 0;\n    min-width: 0;\n    opacity: 1;\n    orphans: 0;\n    outline: 0;\n    outline-color: invert;\n    outline-style: none;\n    outline-width: medium;\n    overflow: visible;\n    overflow-x: visible;\n    overflow-y: visible;\n    padding: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: auto;\n    perspective: none;\n    perspective-origin: 50% 50%;\n    position: static;\n\n    quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n    right: auto;\n    tab-size: 8;\n    table-layout: auto;\n    text-align: inherit;\n    text-align-last: auto;\n    text-decoration: none;\n    text-decoration-color: inherit;\n    text-decoration-line: none;\n    text-decoration-style: solid;\n    text-indent: 0;\n    text-shadow: none;\n    text-transform: none;\n    top: auto;\n    transform: none;\n    transform-style: flat;\n    transition: none;\n    transition-delay: 0s;\n    transition-duration: 0s;\n    transition-property: none;\n    transition-timing-function: ease;\n    unicode-bidi: normal;\n    vertical-align: baseline;\n    visibility: visible;\n    white-space: normal;\n    widows: 0;\n    width: auto;\n    word-spacing: normal;\n    z-index: auto;\n\n    all: initial;\n    */\n    all: unset; }\n  app-root {\n    /* HTML5 display-role reset for older browsers */ }\n    app-root, app-root *, app-root *:before, app-root *:after, app-root input, app-root button, app-root a {\n      all: unset; }\n    app-root body, app-root div, app-root span, app-root applet, app-root object, app-root iframe, app-root h1, app-root h2, app-root h3, app-root h4, app-root h5, app-root h6, app-root p, app-root blockquote, app-root pre, app-root a, app-root abbr, app-root acronym, app-root address, app-root big, app-root cite, app-root code, app-root del, app-root dfn, app-root em, app-root img, app-root ins, app-root kbd, app-root q, app-root s, app-root samp, app-root small, app-root strike, app-root strong, app-root sub, app-root sup, app-root tt, app-root var, app-root b, app-root u, app-root i, app-root center, app-root dl, app-root dt, app-root dd, app-root ol, app-root ul, app-root li, app-root fieldset, app-root form, app-root label, app-root legend, app-root table, app-root caption, app-root tbody, app-root tfoot, app-root thead, app-root tr, app-root th, app-root td, app-root article, app-root aside, app-root canvas, app-root details, app-root embed, app-root figure, app-root figcaption, app-root footer, app-root header, app-root hgroup, app-root menu, app-root nav, app-root output, app-root ruby, app-root section, app-root summary, app-root time, app-root mark, app-root audio, app-root video {\n      margin: 0;\n      padding: 0;\n      border: 0;\n      font-size: 100%;\n      font: inherit;\n      vertical-align: baseline; }\n    app-root article, app-root aside, app-root details, app-root figcaption, app-root figure, app-root footer, app-root header, app-root hgroup, app-root menu, app-root nav, app-root section {\n      display: block; }\n    app-root body {\n      line-height: 1; }\n    app-root ol, app-root ul {\n      list-style: none; }\n    app-root blockquote, app-root q {\n      quotes: none; }\n    app-root blockquote:before, app-root blockquote:after {\n      content: '';\n      content: none; }\n    app-root q:before, app-root q:after {\n      content: '';\n      content: none; }\n    app-root table {\n      border-collapse: collapse;\n      border-spacing: 0; }\n  app-root .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n  app-root .mat-option {\n    color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-option:hover:not(.mat-option-disabled), app-root .mat-option:focus:not(.mat-option-disabled) {\n      background: rgba(0, 0, 0, 0.04); }\n    app-root .mat-option.mat-selected.mat-primary, .mat-primary app-root .mat-option.mat-selected {\n      color: #0099bb; }\n    app-root .mat-option.mat-selected.mat-accent, .mat-accent app-root .mat-option.mat-selected {\n      color: #ff9900; }\n    app-root .mat-option.mat-selected.mat-warn, .mat-warn app-root .mat-option.mat-selected {\n      color: #f44336; }\n    app-root .mat-option.mat-selected:not(.mat-option-multiple) {\n      background: rgba(0, 0, 0, 0.04); }\n    app-root .mat-option.mat-active {\n      background: rgba(0, 0, 0, 0.04);\n      color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-option.mat-option-disabled {\n      color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-optgroup-label {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-optgroup-disabled .mat-optgroup-label {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-pseudo-checkbox {\n    color: rgba(0, 0, 0, 0.54); }\n    app-root .mat-pseudo-checkbox::after {\n      color: #fafafa; }\n  app-root .mat-pseudo-checkbox-checked.mat-primary,\n  app-root .mat-pseudo-checkbox-indeterminate.mat-primary,\n  app-root .mat-primary .mat-pseudo-checkbox-checked,\n  app-root .mat-primary .mat-pseudo-checkbox-indeterminate {\n    background: #0099bb; }\n  app-root .mat-pseudo-checkbox-checked.mat-accent,\n  app-root .mat-pseudo-checkbox-indeterminate.mat-accent,\n  app-root .mat-accent .mat-pseudo-checkbox-checked,\n  app-root .mat-accent .mat-pseudo-checkbox-indeterminate {\n    background: #ff9900; }\n  app-root .mat-pseudo-checkbox-checked.mat-warn,\n  app-root .mat-pseudo-checkbox-indeterminate.mat-warn,\n  app-root .mat-warn .mat-pseudo-checkbox-checked,\n  app-root .mat-warn .mat-pseudo-checkbox-indeterminate {\n    background: #f44336; }\n  app-root .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, app-root .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n    background: #b0b0b0; }\n  app-root .mat-app-background {\n    background-color: #fafafa; }\n  app-root .mat-theme-loaded-marker {\n    display: none; }\n  app-root .mat-autocomplete-panel {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n      background: white;\n      color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-button, app-root .mat-icon-button {\n    background: transparent; }\n    app-root .mat-button.mat-primary .mat-button-focus-overlay, app-root .mat-icon-button.mat-primary .mat-button-focus-overlay {\n      background-color: rgba(0, 153, 187, 0.12); }\n    app-root .mat-button.mat-accent .mat-button-focus-overlay, app-root .mat-icon-button.mat-accent .mat-button-focus-overlay {\n      background-color: rgba(255, 153, 0, 0.12); }\n    app-root .mat-button.mat-warn .mat-button-focus-overlay, app-root .mat-icon-button.mat-warn .mat-button-focus-overlay {\n      background-color: rgba(244, 67, 54, 0.12); }\n    app-root .mat-button[disabled] .mat-button-focus-overlay, app-root .mat-icon-button[disabled] .mat-button-focus-overlay {\n      background-color: transparent; }\n    app-root .mat-button.mat-primary, app-root .mat-icon-button.mat-primary {\n      color: #0099bb; }\n    app-root .mat-button.mat-accent, app-root .mat-icon-button.mat-accent {\n      color: #ff9900; }\n    app-root .mat-button.mat-warn, app-root .mat-icon-button.mat-warn {\n      color: #f44336; }\n    app-root .mat-button.mat-primary[disabled], app-root .mat-button.mat-accent[disabled], app-root .mat-button.mat-warn[disabled], app-root .mat-button[disabled][disabled], app-root .mat-icon-button.mat-primary[disabled], app-root .mat-icon-button.mat-accent[disabled], app-root .mat-icon-button.mat-warn[disabled], app-root .mat-icon-button[disabled][disabled] {\n      color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-raised-button, app-root .mat-fab, app-root .mat-mini-fab {\n    color: rgba(0, 0, 0, 0.87);\n    background-color: white; }\n    app-root .mat-raised-button.mat-primary, app-root .mat-fab.mat-primary, app-root .mat-mini-fab.mat-primary {\n      color: white; }\n    app-root .mat-raised-button.mat-accent, app-root .mat-fab.mat-accent, app-root .mat-mini-fab.mat-accent {\n      color: white; }\n    app-root .mat-raised-button.mat-warn, app-root .mat-fab.mat-warn, app-root .mat-mini-fab.mat-warn {\n      color: white; }\n    app-root .mat-raised-button.mat-primary[disabled], app-root .mat-raised-button.mat-accent[disabled], app-root .mat-raised-button.mat-warn[disabled], app-root .mat-raised-button[disabled][disabled], app-root .mat-fab.mat-primary[disabled], app-root .mat-fab.mat-accent[disabled], app-root .mat-fab.mat-warn[disabled], app-root .mat-fab[disabled][disabled], app-root .mat-mini-fab.mat-primary[disabled], app-root .mat-mini-fab.mat-accent[disabled], app-root .mat-mini-fab.mat-warn[disabled], app-root .mat-mini-fab[disabled][disabled] {\n      color: rgba(0, 0, 0, 0.38); }\n    app-root .mat-raised-button.mat-primary, app-root .mat-fab.mat-primary, app-root .mat-mini-fab.mat-primary {\n      background-color: #0099bb; }\n    app-root .mat-raised-button.mat-accent, app-root .mat-fab.mat-accent, app-root .mat-mini-fab.mat-accent {\n      background-color: #ff9900; }\n    app-root .mat-raised-button.mat-warn, app-root .mat-fab.mat-warn, app-root .mat-mini-fab.mat-warn {\n      background-color: #f44336; }\n    app-root .mat-raised-button.mat-primary[disabled], app-root .mat-raised-button.mat-accent[disabled], app-root .mat-raised-button.mat-warn[disabled], app-root .mat-raised-button[disabled][disabled], app-root .mat-fab.mat-primary[disabled], app-root .mat-fab.mat-accent[disabled], app-root .mat-fab.mat-warn[disabled], app-root .mat-fab[disabled][disabled], app-root .mat-mini-fab.mat-primary[disabled], app-root .mat-mini-fab.mat-accent[disabled], app-root .mat-mini-fab.mat-warn[disabled], app-root .mat-mini-fab[disabled][disabled] {\n      background-color: rgba(0, 0, 0, 0.12); }\n    app-root .mat-raised-button.mat-primary .mat-ripple-element, app-root .mat-fab.mat-primary .mat-ripple-element, app-root .mat-mini-fab.mat-primary .mat-ripple-element {\n      background-color: rgba(255, 255, 255, 0.2); }\n    app-root .mat-raised-button.mat-accent .mat-ripple-element, app-root .mat-fab.mat-accent .mat-ripple-element, app-root .mat-mini-fab.mat-accent .mat-ripple-element {\n      background-color: rgba(255, 255, 255, 0.2); }\n    app-root .mat-raised-button.mat-warn .mat-ripple-element, app-root .mat-fab.mat-warn .mat-ripple-element, app-root .mat-mini-fab.mat-warn .mat-ripple-element {\n      background-color: rgba(255, 255, 255, 0.2); }\n  app-root .mat-button.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.1); }\n  app-root .mat-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.1); }\n  app-root .mat-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n  app-root .mat-icon-button.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.2); }\n  app-root .mat-icon-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.2); }\n  app-root .mat-icon-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.2); }\n  app-root .mat-button-toggle {\n    color: rgba(0, 0, 0, 0.38); }\n    app-root .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n      background-color: rgba(0, 0, 0, 0.06); }\n  app-root .mat-button-toggle-checked {\n    background-color: #e0e0e0;\n    color: black; }\n  app-root .mat-button-toggle-disabled {\n    background-color: #eeeeee;\n    color: rgba(0, 0, 0, 0.38); }\n    app-root .mat-button-toggle-disabled.mat-button-toggle-checked {\n      background-color: #bdbdbd; }\n  app-root .mat-card {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-card-subtitle {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-checkbox-frame {\n    border-color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-checkbox-checkmark {\n    fill: #fafafa; }\n  app-root .mat-checkbox-checkmark-path {\n    stroke: #fafafa !important; }\n  app-root .mat-checkbox-mixedmark {\n    background-color: #fafafa; }\n  app-root .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, app-root .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n    background-color: #0099bb; }\n  app-root .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, app-root .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n    background-color: #ff9900; }\n  app-root .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, app-root .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n    background-color: #f44336; }\n  app-root .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, app-root .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n    background-color: #b0b0b0; }\n  app-root .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n    border-color: #b0b0b0; }\n  app-root .mat-checkbox-disabled .mat-checkbox-label {\n    color: #b0b0b0; }\n  app-root .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.26); }\n  app-root .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.26); }\n  app-root .mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.26); }\n  app-root .mat-chip:not(.mat-basic-chip) {\n    background-color: #e0e0e0;\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-chip.mat-chip-selected:not(.mat-basic-chip) {\n    background-color: #808080;\n    color: rgba(255, 255, 255, 0.87); }\n    app-root .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-primary {\n      background-color: #0099bb;\n      color: white; }\n    app-root .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-accent {\n      background-color: #ff9900;\n      color: white; }\n    app-root .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-warn {\n      background-color: #f44336;\n      color: white; }\n  app-root .mat-table {\n    background: white; }\n  app-root .mat-row, app-root .mat-header-row {\n    border-bottom-color: rgba(0, 0, 0, 0.12); }\n  app-root .mat-header-cell {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-cell {\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-datepicker-content {\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-calendar-arrow {\n    border-top-color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-calendar-next-button,\n  app-root .mat-calendar-previous-button {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-calendar-table-header {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-calendar-table-header-divider::after {\n    background: rgba(0, 0, 0, 0.12); }\n  app-root .mat-calendar-body-label {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-calendar-body-cell-content {\n    color: rgba(0, 0, 0, 0.87);\n    border-color: transparent; }\n    .mat-calendar-body-disabled > app-root .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n      color: rgba(0, 0, 0, 0.38); }\n  app-root :not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n  app-root .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    background-color: rgba(0, 0, 0, 0.04); }\n  app-root .mat-calendar-body-selected {\n    background-color: #0099bb;\n    color: white; }\n  app-root .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(0, 153, 187, 0.4); }\n  app-root .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n    border-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n  app-root .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n    border-color: rgba(0, 0, 0, 0.18); }\n  app-root .mat-dialog-container {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-expansion-panel {\n    background: white;\n    color: black; }\n  app-root .mat-action-row {\n    border-top-color: rgba(0, 0, 0, 0.12); }\n  app-root .mat-expansion-panel-header:focus,\n  app-root .mat-expansion-panel-header:hover {\n    background: rgba(0, 0, 0, 0.04); }\n  app-root .mat-expansion-panel-header-title {\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-expansion-panel-header-description {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-expansion-indicator::after {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-icon.mat-primary {\n    color: #0099bb; }\n  app-root .mat-icon.mat-accent {\n    color: #ff9900; }\n  app-root .mat-icon.mat-warn {\n    color: #f44336; }\n  app-root .mat-input-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-focused .mat-input-placeholder {\n    color: #0099bb; }\n    app-root .mat-focused .mat-input-placeholder.mat-accent {\n      color: #ff9900; }\n    app-root .mat-focused .mat-input-placeholder.mat-warn {\n      color: #f44336; }\n  app-root .mat-input-element:disabled {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root input.mat-input-element:-webkit-autofill + .mat-input-placeholder .mat-placeholder-required,\n  app-root .mat-focused .mat-input-placeholder.mat-float .mat-placeholder-required {\n    color: #ff9900; }\n  app-root .mat-input-underline {\n    background-color: rgba(0, 0, 0, 0.12); }\n  app-root .mat-input-ripple {\n    background-color: #0099bb; }\n    app-root .mat-input-ripple.mat-accent {\n      background-color: #ff9900; }\n    app-root .mat-input-ripple.mat-warn {\n      background-color: #f44336; }\n  app-root .mat-input-invalid .mat-input-placeholder {\n    color: #f44336; }\n    app-root .mat-input-invalid .mat-input-placeholder.mat-accent,\n    app-root .mat-input-invalid .mat-input-placeholder.mat-float .mat-placeholder-required {\n      color: #f44336; }\n  app-root .mat-input-invalid .mat-input-ripple {\n    background-color: #f44336; }\n  app-root .mat-input-error {\n    color: #f44336; }\n  app-root .mat-list .mat-list-item, app-root .mat-nav-list .mat-list-item {\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-list .mat-subheader, app-root .mat-nav-list .mat-subheader {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-divider {\n    border-top-color: rgba(0, 0, 0, 0.12); }\n  app-root .mat-nav-list .mat-list-item {\n    outline: none; }\n    app-root .mat-nav-list .mat-list-item:hover, app-root .mat-nav-list .mat-list-item.mat-list-item-focus {\n      background: rgba(0, 0, 0, 0.04); }\n  app-root .mat-menu-content {\n    background: white; }\n  app-root .mat-menu-item {\n    background: transparent;\n    color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-menu-item[disabled] {\n      color: rgba(0, 0, 0, 0.38); }\n    app-root .mat-menu-item .mat-icon {\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: middle; }\n    app-root .mat-menu-item:hover:not([disabled]), app-root .mat-menu-item:focus:not([disabled]) {\n      background: rgba(0, 0, 0, 0.04); }\n  app-root .mat-paginator {\n    background: white; }\n  app-root .mat-paginator,\n  app-root .mat-paginator-page-size .mat-select-trigger {\n    color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-paginator-increment,\n  app-root .mat-paginator-decrement {\n    border-top: 2px solid rgba(0, 0, 0, 0.54);\n    border-right: 2px solid rgba(0, 0, 0, 0.54); }\n  app-root .mat-icon-button[disabled] .mat-paginator-increment,\n  app-root .mat-icon-button[disabled] .mat-paginator-decrement {\n    border-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-progress-bar-background {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%230099bb%27%2F%3E%3C%2Fsvg%3E\"); }\n  app-root .mat-progress-bar-buffer {\n    background-color: #0099bb; }\n  app-root .mat-progress-bar-fill::after {\n    background-color: #0099bb; }\n  app-root .mat-progress-bar.mat-accent .mat-progress-bar-background {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ff9900%27%2F%3E%3C%2Fsvg%3E\"); }\n  app-root .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n    background-color: #ff9900; }\n  app-root .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n    background-color: #ff9900; }\n  app-root .mat-progress-bar.mat-warn .mat-progress-bar-background {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n  app-root .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n    background-color: #ffcdd2; }\n  app-root .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n    background-color: #f44336; }\n  app-root .mat-progress-spinner path, app-root .mat-spinner path {\n    stroke: #0099bb; }\n  app-root .mat-progress-spinner.mat-accent path, app-root .mat-spinner.mat-accent path {\n    stroke: #ff9900; }\n  app-root .mat-progress-spinner.mat-warn path, app-root .mat-spinner.mat-warn path {\n    stroke: #f44336; }\n  app-root .mat-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.54); }\n  app-root .mat-radio-disabled .mat-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-radio-disabled .mat-radio-ripple .mat-ripple-element, app-root .mat-radio-disabled .mat-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-radio-disabled .mat-radio-label-content {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #0099bb; }\n  app-root .mat-radio-button.mat-primary .mat-radio-inner-circle {\n    background-color: #0099bb; }\n  app-root .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.26); }\n  app-root .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #ff9900; }\n  app-root .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #ff9900; }\n  app-root .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.26); }\n  app-root .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #f44336; }\n  app-root .mat-radio-button.mat-warn .mat-radio-inner-circle {\n    background-color: #f44336; }\n  app-root .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.26); }\n  app-root .mat-select-trigger,\n  app-root .mat-select-arrow {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-select-underline {\n    background-color: rgba(0, 0, 0, 0.12); }\n  app-root .mat-select-disabled .mat-select-value,\n  app-root .mat-select-arrow,\n  app-root .mat-select-trigger {\n    color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-select-content, app-root .mat-select-panel-done-animating {\n    background: white; }\n  app-root .mat-select-value {\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-trigger, app-root .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\n    color: #0099bb; }\n  app-root .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-underline {\n    background-color: #0099bb; }\n  app-root .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-trigger, app-root .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-arrow {\n    color: #ff9900; }\n  app-root .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-underline {\n    background-color: #ff9900; }\n  app-root .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-trigger, app-root .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-arrow,\n  app-root .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-trigger,\n  app-root .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-arrow {\n    color: #f44336; }\n  app-root .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-underline,\n  app-root .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-underline {\n    background-color: #f44336; }\n  app-root .mat-sidenav-container {\n    background-color: #fafafa;\n    color: rgba(0, 0, 0, 0.87); }\n  app-root .mat-sidenav {\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-sidenav.mat-sidenav-push {\n      background-color: white; }\n  app-root .mat-sidenav-backdrop.mat-sidenav-shown {\n    background-color: rgba(0, 0, 0, 0.6); }\n  app-root .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: #ff9900; }\n  app-root .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(255, 153, 0, 0.5); }\n  app-root .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.06); }\n  app-root .mat-slide-toggle .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.12); }\n  app-root .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: #0099bb; }\n  app-root .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(0, 153, 187, 0.5); }\n  app-root .mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.06); }\n  app-root .mat-slide-toggle.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.12); }\n  app-root .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: #f44336; }\n  app-root .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(244, 67, 54, 0.5); }\n  app-root .mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.06); }\n  app-root .mat-slide-toggle.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.12); }\n  app-root .mat-disabled .mat-slide-toggle-thumb {\n    background-color: #bdbdbd; }\n  app-root .mat-disabled .mat-slide-toggle-bar {\n    background-color: rgba(0, 0, 0, 0.1); }\n  app-root .mat-slide-toggle-thumb {\n    background-color: #fafafa; }\n  app-root .mat-slide-toggle-bar {\n    background-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-slider-track-background {\n    background-color: rgba(0, 0, 0, 0.26); }\n  app-root .mat-primary .mat-slider-track-fill,\n  app-root .mat-primary .mat-slider-thumb,\n  app-root .mat-primary .mat-slider-thumb-label {\n    background-color: #0099bb; }\n  app-root .mat-primary .mat-slider-thumb-label-text {\n    color: white; }\n  app-root .mat-accent .mat-slider-track-fill,\n  app-root .mat-accent .mat-slider-thumb,\n  app-root .mat-accent .mat-slider-thumb-label {\n    background-color: #ff9900; }\n  app-root .mat-accent .mat-slider-thumb-label-text {\n    color: white; }\n  app-root .mat-warn .mat-slider-track-fill,\n  app-root .mat-warn .mat-slider-thumb,\n  app-root .mat-warn .mat-slider-thumb-label {\n    background-color: #f44336; }\n  app-root .mat-warn .mat-slider-thumb-label-text {\n    color: white; }\n  app-root .mat-slider-focus-ring {\n    background-color: rgba(255, 153, 0, 0.2); }\n  app-root .mat-slider:hover .mat-slider-track-background,\n  app-root .cdk-focused .mat-slider-track-background {\n    background-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-slider-disabled .mat-slider-track-background,\n  app-root .mat-slider-disabled .mat-slider-track-fill,\n  app-root .mat-slider-disabled .mat-slider-thumb {\n    background-color: rgba(0, 0, 0, 0.26); }\n  app-root .mat-slider-disabled:hover .mat-slider-track-background {\n    background-color: rgba(0, 0, 0, 0.26); }\n  app-root .mat-slider-min-value .mat-slider-focus-ring {\n    background-color: rgba(0, 0, 0, 0.12); }\n  app-root .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n  app-root .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n    background-color: black; }\n  app-root .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n  app-root .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n    background-color: rgba(0, 0, 0, 0.26); }\n  app-root .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n    border-color: rgba(0, 0, 0, 0.26);\n    background-color: transparent; }\n  app-root .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, app-root .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n    border-color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, app-root .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n    border-color: rgba(0, 0, 0, 0.26); }\n  app-root .mat-slider-has-ticks .mat-slider-wrapper::after {\n    border-color: rgba(0, 0, 0, 0.7); }\n  app-root .mat-slider-horizontal .mat-slider-ticks {\n    background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n    background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n  app-root .mat-slider-vertical .mat-slider-ticks {\n    background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n  app-root .mat-tab-nav-bar,\n  app-root .mat-tab-header {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  app-root .mat-tab-group-inverted-header .mat-tab-nav-bar,\n  app-root .mat-tab-group-inverted-header .mat-tab-header {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: none; }\n  app-root .mat-tab-label:focus {\n    background-color: rgba(0, 153, 187, 0.3); }\n  app-root .mat-ink-bar {\n    background-color: #0099bb; }\n  app-root .mat-tab-label, app-root .mat-tab-link {\n    color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-tab-label.mat-tab-disabled, app-root .mat-tab-link.mat-tab-disabled {\n      color: rgba(0, 0, 0, 0.38); }\n  app-root .mat-toolbar {\n    background: whitesmoke;\n    color: rgba(0, 0, 0, 0.87); }\n    app-root .mat-toolbar.mat-primary {\n      background: #0099bb;\n      color: white; }\n    app-root .mat-toolbar.mat-accent {\n      background: #ff9900;\n      color: white; }\n    app-root .mat-toolbar.mat-warn {\n      background: #f44336;\n      color: white; }\n  app-root .mat-tooltip {\n    background: rgba(97, 97, 97, 0.9); }\n  app-root .mat-h1, app-root .mat-headline, app-root .mat-typography h1 {\n    font: 400 24px/48px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  app-root .mat-h2, app-root .mat-title, app-root .mat-typography h2 {\n    font: 500 20px/32px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  app-root .mat-h3, app-root .mat-subheading-2, app-root .mat-typography h3 {\n    font: 400 16px/28px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  app-root .mat-h4, app-root .mat-subheading-1, app-root .mat-typography h4 {\n    font: 400 15px/24px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  app-root .mat-h5, app-root .mat-typography h5 {\n    font-size: 13.28px;\n    font-weight: 400;\n    font-family: \"Poppins\", Arial, sans-serif;\n    line-height: 24px;\n    margin: 0 0 12px; }\n  app-root .mat-h6, app-root .mat-typography h6 {\n    font-size: 10.72px;\n    font-weight: 400;\n    font-family: \"Poppins\", Arial, sans-serif;\n    line-height: 24px;\n    margin: 0 0 12px; }\n  app-root .mat-body-strong, app-root .mat-body-2 {\n    font: 500 14px/24px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-body, app-root .mat-body-1, app-root .mat-typography {\n    font: 400 16px/24px \"Poppins\", Arial, sans-serif; }\n    app-root .mat-body p, app-root .mat-body-1 p, app-root .mat-typography p {\n      margin: 0 0 12px; }\n  app-root .mat-small, app-root .mat-caption {\n    font: 400 12px/20px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-display-4, app-root .mat-typography .mat-display-4 {\n    font: 300 112px/112px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 56px;\n    letter-spacing: -0.05em; }\n  app-root .mat-display-3, app-root .mat-typography .mat-display-3 {\n    font: 400 56px/56px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 64px;\n    letter-spacing: -0.02em; }\n  app-root .mat-display-2, app-root .mat-typography .mat-display-2 {\n    font: 400 45px/48px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 64px;\n    letter-spacing: -0.005em; }\n  app-root .mat-display-1, app-root .mat-typography .mat-display-1 {\n    font: 400 34px/40px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 64px; }\n  app-root .mat-button, app-root .mat-raised-button, app-root .mat-icon-button {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 400; }\n  app-root .mat-button-toggle {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-card {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-card-title {\n    font-size: 24px;\n    font-weight: 400; }\n  app-root .mat-card-subtitle,\n  app-root .mat-card-content,\n  app-root .mat-card-header .mat-card-title {\n    font-size: 16px; }\n  app-root .mat-checkbox {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-checkbox-layout .mat-checkbox-label {\n    line-height: 24px; }\n  app-root .mat-chip:not(.mat-basic-chip) {\n    font-size: 13px;\n    line-height: 16px; }\n  app-root .mat-header-cell {\n    font-size: 12px;\n    font-weight: 500; }\n  app-root .mat-cell {\n    font-size: 16px; }\n  app-root .mat-calendar {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-calendar-body {\n    font-size: 13px; }\n  app-root .mat-calendar-body-label,\n  app-root .mat-calendar-period-button {\n    font-size: 16px;\n    font-weight: 400; }\n  app-root .mat-calendar-table-header th {\n    font-size: 11px;\n    font-weight: 400; }\n  app-root .mat-dialog-title {\n    font: 500 20px/32px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-grid-tile-header,\n  app-root .mat-grid-tile-footer {\n    font-size: 16px; }\n    app-root .mat-grid-tile-header .mat-line,\n    app-root .mat-grid-tile-footer .mat-line {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      box-sizing: border-box; }\n      app-root .mat-grid-tile-header .mat-line:nth-child(n+2),\n      app-root .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n        font-size: 12px; }\n  app-root .mat-input-container {\n    font: 400 inherit/1.125 \"Poppins\", Arial, sans-serif; }\n  app-root .mat-input-wrapper {\n    padding-bottom: 1.29688em; }\n  app-root .mat-input-prefix .mat-icon,\n  app-root .mat-input-prefix .mat-datepicker-toggle,\n  app-root .mat-input-suffix .mat-icon,\n  app-root .mat-input-suffix .mat-datepicker-toggle {\n    font-size: 150%; }\n  app-root .mat-input-prefix .mat-icon-button,\n  app-root .mat-input-suffix .mat-icon-button {\n    height: 1.5em;\n    width: 1.5em; }\n    app-root .mat-input-prefix .mat-icon-button .mat-icon,\n    app-root .mat-input-suffix .mat-icon-button .mat-icon {\n      line-height: 1.5; }\n  app-root .mat-input-infix {\n    padding: 0.4375em 0;\n    border-top: 0.84375em solid transparent; }\n  app-root .mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333%; }\n  app-root .mat-input-placeholder-wrapper {\n    top: -0.84375em;\n    padding-top: 0.84375em; }\n  app-root .mat-input-placeholder {\n    top: 1.28125em; }\n    app-root .mat-input-placeholder.mat-float:not(.mat-empty), .mat-focused app-root .mat-input-placeholder.mat-float {\n      transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n      -ms-transform: translateY(-1.28125em) scale(0.75);\n      width: 133.33333%; }\n  app-root .mat-input-underline {\n    bottom: 1.29688em; }\n  app-root .mat-input-subscript-wrapper {\n    font-size: 75%;\n    margin-top: 0.60417em;\n    top: calc(100% - 1.72917em); }\n  app-root .mat-menu-item {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px; }\n  app-root .mat-paginator {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 12px; }\n  app-root .mat-paginator-page-size .mat-select-trigger {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 12px; }\n  app-root .mat-radio-button {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-select {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-select-trigger {\n    font-size: 16px; }\n  app-root .mat-slide-toggle-content {\n    font: 400 16px/24px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-slider-thumb-label-text {\n    font-size: 12px;\n    font-weight: 500; }\n  app-root .mat-tab-group {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-tab-label, app-root .mat-tab-link {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 400; }\n  app-root .mat-toolbar,\n  app-root .mat-toolbar h1,\n  app-root .mat-toolbar h2,\n  app-root .mat-toolbar h3,\n  app-root .mat-toolbar h4,\n  app-root .mat-toolbar h5,\n  app-root .mat-toolbar h6 {\n    font: 500 20px/32px \"Poppins\", Arial, sans-serif;\n    margin: 0; }\n  app-root .mat-tooltip {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 10px;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  app-root .mat-list-item {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  app-root .mat-list .mat-list-item, app-root .mat-nav-list .mat-list-item {\n    font-size: 16px; }\n    app-root .mat-list .mat-list-item .mat-line, app-root .mat-nav-list .mat-list-item .mat-line {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      box-sizing: border-box; }\n      app-root .mat-list .mat-list-item .mat-line:nth-child(n+2), app-root .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n        font-size: 16px; }\n  app-root .mat-list .mat-subheader, app-root .mat-nav-list .mat-subheader {\n    font: 500 14px/24px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-list[dense] .mat-list-item, app-root .mat-nav-list[dense] .mat-list-item {\n    font-size: 12px; }\n    app-root .mat-list[dense] .mat-list-item .mat-line, app-root .mat-nav-list[dense] .mat-list-item .mat-line {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      box-sizing: border-box; }\n      app-root .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), app-root .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n        font-size: 12px; }\n  app-root .mat-list[dense] .mat-subheader, app-root .mat-nav-list[dense] .mat-subheader {\n    font: 500 12px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-option {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px; }\n  app-root .mat-optgroup-label {\n    font: 500 14px/24px \"Poppins\", Arial, sans-serif; }\n  app-root .mat-simple-snackbar {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px; }\n  app-root .mat-simple-snackbar-action {\n    line-height: 1;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: 400; }\n  app-root .collapsed .collapse-arrow {\n    transform: rotate(-90deg); }\n  app-root .collapse-arrow {\n    width: 0;\n    height: 0;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-top: 20px solid #0099BB;\n    display: inline-block;\n    margin-left: 10px;\n    position: absolute;\n    left: 2px;\n    top: 50%;\n    margin-top: -10px;\n    transform: rotate(0);\n    transition: transform ease-in-out .5s; }\n  app-root .alert.alert-danger {\n    display: block;\n    padding: 15px 0;\n    color: #DD0044; }\n  app-root .alert.alert-danger:before {\n    content: \"\\A0\"; }\n  app-root, app-root md-card, app-root .mat-card, app-root md-card.mat-card {\n    color: inherit;\n    font-family: inherit;\n    box-shadow: none !important; }\n  app-root .mat-sidenav-container {\n    background: #fff;\n    color: inherit; }\n  app-root .mat-card-subtitle {\n    color: inherit;\n    font-size: 18px; }\n  app-root * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  app-root a, app-root .mat-raised-button {\n    color: #444444; }\n  app-root a, app-root .mat-raised-button, app-root .mat-button, app-root .mat-raised-button.mat-primary,\n  app-root a.mat-raised-button {\n    text-decoration: none;\n    outline: none;\n    border-color: #0099BB;\n    min-width: 0; }\n  app-root .mat-raised-button .mat-ripple {\n    border-radius: 25px;\n    font-weight: 700;\n    font-size: inherit; }\n  app-root .mat-raised-button {\n    border-radius: 25px;\n    border: 2px solid #CCCCCC;\n    padding: 2px 35px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    box-shadow: none !important; }\n  app-root .mat-button, app-root .mat-card {\n    border-radius: 0;\n    box-shadow: none !important; }\n  app-root .mat-toolbar {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  app-root .contain {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    max-width: 1000px; }\n  app-root fieldset {\n    border: none; }\n  app-root .mat-input-infix {\n    width: 100%; }\n  app-root md-select, app-root .mat-input-wrapper {\n    width: 100%; }\n  app-root md-select, app-root .mat-input-container {\n    padding: 1px;\n    text-align: left; }\n  app-root .tricky-select .mat-input-underline {\n    display: none; }\n", ""]);

// exports


/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n    <a md-button routerLink=\"search\" (click)=\"expanded=!expanded\">👿</a>\n    <router-outlet></router-outlet>\n</div>\n";

/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(273);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\nh1 {\n  color: #14b004; }\n\n:host.jupytangular {\n  position: fixed;\n  right: 10px;\n  top: 0;\n  left: auto;\n  bottom: auto;\n  z-index: 99999999;\n  max-height: 100%;\n  max-width: 100%;\n  /*\n        & a:after,\n        & a:before {\n            content: \" \";\n            display: block;\n            position: absolute;\n            right: 5px;\n            margin-top: -2px;\n            top: 50%;\n            width: 25px;\n            border-top: 2px solid $light-gray;\n            border-left: 0 solid transparent;\n            border-right: 0 solid transparent;\n            border-bottom: 4px solid $light-gray;\n            height: 12px;\n            transition: .15s ease-in-out;\n        }\n\n        & a:after {\n            margin-top: -14px;\n            border-top: 4px solid $light-gray;\n            border-bottom: 2px solid $light-gray;\n        }\n\n        & a:hover:before {\n            height: 0;\n            border: 0 solid transparent;\n        }\n\n        & a:hover:after {\n            height: 0;\n            border-right: 0;\n            margin-top: -20px;\n            border-top: 20px solid transparent;\n            border-bottom: 20px solid transparent;\n            border-left: 25px solid $secondary;\n        }\n        */ }\n  :host.jupytangular *, :host.jupytangular *:before, :host.jupytangular *:after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  :host.jupytangular html, :host.jupytangular body {\n    color: #444444;\n    font-size: 18px;\n    text-rendering: geometricPrecision;\n    font-family: 'Poppins', Arial, sans-serif; }\n  :host.jupytangular img, :host.jupytangular video, :host.jupytangular canvas, :host.jupytangular svg {\n    max-width: 100%; }\n  :host.jupytangular small {\n    font-weight: 400; }\n  :host.jupytangular h2 {\n    font-size: 24px;\n    font-weight: 400; }\n  :host.jupytangular input, :host.jupytangular button {\n    color: #444444; }\n  :host.jupytangular .app-wrapper {\n    background: white;\n    padding: 20px;\n    box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n    display: block;\n    transition: ease-in-out .15s;\n    overflow: hidden; }\n  :host.jupytangular {\n    opacity: .2;\n    transition: ease-in-out .15s;\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    max-height: 30px;\n    max-width: 40px; }\n  :host.jupytangular.expanded {\n    max-height: 100%;\n    max-width: 100%; }\n  :host.jupytangular:hover, :host.jupytangular:focus, :host.jupytangular:active {\n    opacity: 1; }\n  :host.jupytangular a {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n    font-size: 30px; }\n", ""]);

// exports


/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(734);

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockPlatformLocation; });
var MockPlatformLocation = (function () {
    function MockPlatformLocation() {
        this.pathname = '';
        this.search = '';
        this.hash = '';
        this.pathname = window.INITIAL_PATH || window.location.pathname || '/';
        this.location = Object.assign({}, window.location);
        this.location.pathname = this.pathname;
    }
    MockPlatformLocation.prototype.getBaseHrefFromDOM = function () {
        return '/';
    };
    MockPlatformLocation.prototype.onPopState = function () {
        return this;
    };
    ;
    MockPlatformLocation.prototype.onHashChange = function () {
    };
    ;
    MockPlatformLocation.prototype.replaceState = function (state, title, url) {
        this.location.pathname = url;
        this.pathname = url;
    };
    ;
    MockPlatformLocation.prototype.pushState = function (state, title, url) {
        this.location.pathname = url;
        this.pathname = url;
    };
    ;
    MockPlatformLocation.prototype.forward = function () {
    };
    ;
    MockPlatformLocation.prototype.back = function () {
    };
    ;
    return MockPlatformLocation;
}());



/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable = __webpack_require__(22).Observable;
var automock = __webpack_require__(50);
var client = __webpack_require__(330);

var subscriptions = {};
var sockifyClient = function (req, dep, host) {
    var socket = client.connect(host || window.location.origin, {secure: host.match(/https/ig)});
    socket.on('connect', function () {
        // TODO: socket.emit('handler') service provider
    });
    return automock.mockValue(req, {
        stubCreator: function (name) {
            console.log(name);
            if (name.split('.').length === 1) {
                return req;
            }
            return function () {
                var args = ['call', name];
                for (var i = 0; i < arguments.length; i++) {
                    args[args.length] = arguments[i];
                }
                if (typeof subscriptions[dep] === 'undefined') {
                    subscriptions[dep] = [];
                }

                return new Observable(function (observer) {
                    socket.on('result', function (n) {
                        if (n === name) {
                            var args2 = [];
                            for (var i = 1; i < arguments.length; i++) {
                                args2[args2.length] = arguments[i];
                            }
                            console.log('Received ' + n + ' ( ' + JSON.stringify(args2[0]) + ' ) ');
                            observer.next.apply(observer, args2);
                        }
                    });
                    socket.emit.apply(socket, args);
                });
            };
        },
        name: dep
    });
};
sockifyClient;

module.exports = {
    sockifyClient: sockifyClient
};

// TODO: output interactive angular component for controlling this server

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(54);

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export callbackUrl */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);



var callbackUrl = 'localhost';
var SearchService = (function () {
    function SearchService(http) {
        this.http = http;
    }
    SearchService.prototype.search = function (query) {
        return this.http.post(callbackUrl, { query: query })
            .map(function (r) { return r.json(); });
    };
    SearchService.prototype.results = function (query) {
        return this.http.post(callbackUrl, { query: query })
            .map(function (r) { return r.json(); });
    };
    return SearchService;
}());
SearchService = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SearchService);

var _a;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export materialModules */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return sharedModules; });
/* unused harmony export SHARED_COMPONENTS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SharedModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMMON_MODULES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_service__ = __webpack_require__(31);










var materialModules = [
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* PlatformModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["o" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MdOptionModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MdSelectionModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["l" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["m" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MdTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MdProgressSpinnerModule */]
];
var sharedModules = [
    __WEBPACK_IMPORTED_MODULE_5__angular_common__["CommonModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
    __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["TranslateModule"],
    __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"],
    __WEBPACK_IMPORTED_MODULE_7__angular_http__["HttpModule"]
].concat(materialModules);
var SHARED_COMPONENTS = [];
var SharedModule = SharedModule_1 = (function () {
    function SharedModule() {
    }
    SharedModule.forRoot = function (searchFactory) {
        return {
            ngModule: SharedModule_1,
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_8__search_service__["a" /* SearchService */],
                    useFactory: searchFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_7__angular_http__["Http"]]
                }
            ]
        };
    };
    return SharedModule;
}());
SharedModule = SharedModule_1 = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: sharedModules.slice(),
        declarations: SHARED_COMPONENTS,
        exports: SHARED_COMPONENTS
    })
], SharedModule);

var COMMON_MODULES = sharedModules.concat([
    SharedModule
]);
var SharedModule_1;


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(781);

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(159);

/***/ }),

/***/ 348:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HiddenLocationStrategy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(5);



var HiddenLocationStrategy = (function (_super) {
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__extends"](HiddenLocationStrategy, _super);
    function HiddenLocationStrategy(platformLocation, baseHref) {
        var _this = _super.call(this) || this;
        _this.platformLocation = platformLocation;
        _this.baseHref = '';
        _this.pathHistory = [];
        _this.poppedPathHistory = [];
        if (typeof baseHref !== 'undefined') {
            _this.baseHref = baseHref;
        }
        return _this;
    }
    HiddenLocationStrategy.prototype.onPopState = function (fn) {
        var _this = this;
        this.platformLocation.onPopState(function (ev) {
            var backward = _this.pathHistory.find(function (item) { return item.state.uid === ev.state.uid; });
            var forward = _this.poppedPathHistory.find(function (item) { return item.state.uid === ev.state.uid; });
            if (backward) {
                _this.navigateBack();
            }
            else if (forward) {
                _this.navigateForward();
            }
            fn(ev);
        });
    };
    HiddenLocationStrategy.prototype.getBaseHref = function () {
        return this.baseHref;
    };
    HiddenLocationStrategy.prototype.path = function () {
        return this.pathHistory.length > 0
            ? this.pathHistory[this.pathHistory.length - 1].path
            : '';
    };
    HiddenLocationStrategy.prototype.prepareExternalUrl = function (internal) {
        return __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"].joinWithSlash(this.baseHref, internal);
    };
    HiddenLocationStrategy.prototype.pushState = function (state, title, path, queryParams) {
        state = Object.assign({}, state, {
            uid: (new Date()).valueOf()
        });
        this.pathHistory.push({
            state: state,
            title: title,
            path: path
        });
        this.platformLocation.pushState(state, title, this.prepareExternalUrl(''));
    };
    HiddenLocationStrategy.prototype.replaceState = function (state, title, path, queryParams) {
        this.platformLocation.replaceState(state, title, path);
    };
    HiddenLocationStrategy.prototype.forward = function () {
        this.platformLocation.forward();
    };
    HiddenLocationStrategy.prototype.back = function () {
        this.platformLocation.back();
    };
    HiddenLocationStrategy.prototype.navigateForward = function () {
        this.pathHistory.push(this.poppedPathHistory.pop());
    };
    HiddenLocationStrategy.prototype.navigateBack = function () {
        this.poppedPathHistory.push(this.pathHistory.pop());
    };
    return HiddenLocationStrategy;
}(__WEBPACK_IMPORTED_MODULE_1__angular_common__["LocationStrategy"]));
HiddenLocationStrategy = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Optional"])()), __WEBPACK_IMPORTED_MODULE_0_tslib__["__param"](1, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_common__["APP_BASE_HREF"])),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["PlatformLocation"]) === "function" && _a || Object, String])
], HiddenLocationStrategy);

var _a;


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(31);

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(111);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(764);

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(116);

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(765);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeLanguageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);





var ChangeLanguageComponent = (function () {
    function ChangeLanguageComponent(route, translate, meta, router) {
        this.route = route;
        this.translate = translate;
        this.meta = meta;
        this.router = router;
    }
    ChangeLanguageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var languageCode = params['languageCode'];
            if (!!languageCode)
                _this.setLanguage(languageCode);
            _this.router.navigate(['/']);
        });
    };
    ChangeLanguageComponent.prototype.setLanguage = function (languageCode) {
        var _this = this;
        this.translate.use(languageCode).subscribe(function () {
            _this.meta.setTag('og:locale', languageCode);
        });
    };
    return ChangeLanguageComponent;
}());
ChangeLanguageComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'i18n-change-language',
        template: ''
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__["MetaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__["MetaService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]) === "function" && _d || Object])
], ChangeLanguageComponent);

var _a, _b, _c, _d;


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(796);

/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(32);

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(407);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_tslib__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss__);






var AppComponent = (function () {
    function AppComponent(config, translate, meta) {
        this.config = config;
        this.translate = translate;
        this.meta = meta;
        this.expanded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.title = 'ng-seed (universal) works!';
    };
    AppComponent.prototype.setLanguage = function (language) {
        var _this = this;
        this.translate.use(language.code).subscribe(function () {
            _this.meta.setTag('og:locale', language.culture);
        });
    };
    return AppComponent;
}());
__WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["HostBinding"])('class.expanded'),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:type", Object)
], AppComponent.prototype, "expanded", void 0);
AppComponent = __WEBPACK_IMPORTED_MODULE_0_tslib__["__decorate"]([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(271),
        styles: [__webpack_require__(272)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["ConfigService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["ConfigService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__["MetaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__["MetaService"]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _ = __webpack_require__(277);
_.mixin(__webpack_require__(278).exports());

var path = __webpack_require__(328);
var util = __webpack_require__(329);

function simpleStubCreator(name) {
    return function stub() {
        // TODO: report arguments in a sane/safe way?
        console.log(_.sprintf('<stub for "%s()">', name));
    };
}


function AutoMock(parent) {
    this._parent = parent;
    this.setStubCreator();
}

AutoMock.prototype.setStubCreator = function (stubCreator) {
    this.defaultStubCreator = stubCreator || simpleStubCreator;
};

AutoMock.prototype._createMockingContext = function (params) {
    params = params || {};

    return {
        stubCreator: params.stubCreator || this.defaultStubCreator,

        passThru: params.passThru || [],

        // track originals and mocks in order to avoid circular references
        originals: [],
        mocks: []
    }
};

AutoMock.prototype.mockValue = function (orig, params) {
    params = params || {};
    var context = this._createMockingContext(params);
    return this._mockValue(params.name || '(none)', orig, context);
};

AutoMock.prototype._mockValue = function (name, orig, context) {
    var mock;
    var ignoredProperties;

    if (_.isObject(orig)) {
        // check for circular reference...
        var index = _.indexOf(context.originals, orig);
        if (index >= 0) {
            return context.mocks[index];
        }
        if (_.isFunction(orig)) {
            mock = context.stubCreator(name);
            ignoredProperties = functionIgnored;
        } else if (_.isArray(orig)) {
            mock = [];
            ignoredProperties = arrayIgnored;
        } else {
            mock = {};
        }

        context.originals.push(orig);
        context.mocks.push(mock);

        this._mockProperties(name, orig, mock, ignoredProperties, context);

        // The `prototype` property is excluded from property mocking because we
        // don't want to create a *new* prototype object.  Instead, we just want
        // to extend the mock's prototype with mocks of any prototype values of
        // the original.  (This is how we mock classes.)
        if (_.isFunction(orig) && !_.isUndefined(orig.prototype)) {
            this._mockProperties(name + '.prototype', orig.prototype, mock.prototype, prototypeIgnored, context);
        }
    } else {
        mock = orig;
    }

    return mock;
};

var functionIgnored = [
    'length',
    'name',
    'arguments',
    'caller',
    'prototype'
];

var prototypeIgnored = [
    'constructor'
];

var arrayIgnored = [
    'length'
];

AutoMock.prototype._mockProperties = function (name, orig, mock, ignoredProperties, context) {
    var keys = Object.getOwnPropertyNames(orig);

    var self = this;
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];

        if (ignoredProperties && _.contains(ignoredProperties, key)) {
            continue;
        }

        // REVIEW: classes have a 'super_' property that points to the
        // superclass... we currently mock that, but don't create the
        // full class chain... if we run into problems with that, we'll
        // need better class/prototype support.

        var desc = Object.getOwnPropertyDescriptor(orig, key);
        var mockDesc;
        var fullName = _.sprintf('%s.%s', name, key);

        if (_.contains(context.passThru, fullName)) {
            mockDesc = desc;
        } else {
            mockDesc = {
                writeable: desc.writeable,
                enumerable: desc.enumerable,
                configurable: desc.configurable
            };

            if (desc.value) {
                mockDesc.value = self._mockValue(fullName, desc.value, context);
            }

            if (desc.get) {
                mockDesc.get = self._mockValue(_.sprintf('%s.%s', fullName, '__get__'), desc.get, context);
            }

            if (desc.set) {
                mockDesc.set = self._mockValue(_.sprintf('%s.%s', fullName, '__set__'), desc.set, context);
            }
        }

        Object.defineProperty(mock, key, mockDesc);
    }
};

// In order to "magically" normalize path references in terms of our "requirer",
// we have to be sure to re-require this module every time.  To do so, we remove
// the reference to this module from Node's require cache...
delete __webpack_require__.c[/*require.resolve*/(50)];

module.exports = new AutoMock(module.parent);


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(448);

/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(751);

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(456);

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(62);

/***/ })

},[237]);
//# sourceMappingURL=app.map