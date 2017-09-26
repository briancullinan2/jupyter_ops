var ng_seed_app =
webpackJsonpng_seed__name_([3],{

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(401);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(81);

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(381);

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(791);

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(786);

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_universal_state_transfer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_cache_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_cache_platform_browser__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_module__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__imports_location_service__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__imports_search_service__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__imports_sockify_client_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__imports_core_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__hidden_location_strategy__ = __webpack_require__(354);















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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_cache_core__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_config_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_config_fs_loader__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_universal_config_loader__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_meta_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routes__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__imports_core_module__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__change_language_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__(9);

















function configFactory(platformId, http) {
    var serverLoader = new __WEBPACK_IMPORTED_MODULE_7__ngx_config_fs_loader__["ConfigFsLoader"]('./public/assets/config.json');
    var browserLoader = {
        loadSettings: function () { return Promise.resolve((typeof window !== 'undefined' ? window : {}).CONFIG
            || {}); }
    };
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_universal_config_loader__["UniversalConfigLoader"](platformId, serverLoader, browserLoader);
}
function metaFactory(config, translate) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_meta_core__["MetaStaticLoader"]();
}
function translateFactory(platformId, http) {
    return {
        getTranslation: function (lang) { return __WEBPACK_IMPORTED_MODULE_14_rxjs_Observable__["Observable"].of((typeof window !== 'undefined' ? window : {}).TRANSLATIONS); }
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
            __WEBPACK_IMPORTED_MODULE_4__ngx_universal_state_transfer__["HttpTransferModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_5__ngx_cache_core__["CacheModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_6__ngx_config_core__["ConfigModule"].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_6__ngx_config_core__["ConfigLoader"],
                useFactory: (configFactory),
                deps: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]]
            }),
            __WEBPACK_IMPORTED_MODULE_9__ngx_meta_core__["MetaModule"].forRoot({
                provide: __WEBPACK_IMPORTED_MODULE_9__ngx_meta_core__["MetaLoader"],
                useFactory: (metaFactory),
                deps: [__WEBPACK_IMPORTED_MODULE_6__ngx_config_core__["ConfigService"], __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["TranslateService"]]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["TranslateModule"].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_10__ngx_translate_core__["TranslateLoader"],
                    useFactory: (translateFactory),
                    deps: [__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_11__app_routes__["a" /* routing */]
        ].concat(__WEBPACK_IMPORTED_MODULE_13__imports_core_module__["c" /* sharedModules */]),
        providers: [
            {
                provide: __WEBPACK_IMPORTED_MODULE_16__angular_common__["APP_BASE_HREF"],
                useValue: '/'
            }
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__change_language_component__["a" /* ChangeLanguageComponent */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
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
/* unused harmony export appRoutes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_meta_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_language_component__ = __webpack_require__(44);



var appRoutes = [
    {
        path: '',
        children: [
            {
                path: 'search',
                loadChildren: function() { return new Promise(function (resolve) {  __webpack_require__.e/* require.ensure */(0).then((function (require) {    resolve(__webpack_require__(355)['SearchModule']);  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);})}
            },
            {
                path: 'recording',
                loadChildren: function() { return new Promise(function (resolve) {  __webpack_require__.e/* require.ensure */(1).then((function (require) {    resolve(__webpack_require__(356)['RecordingModule']);  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);})}
            }
        ],
        canActivateChild: [__WEBPACK_IMPORTED_MODULE_1__ngx_meta_core__["MetaGuard"]],
        data: {
            i18n: {
                isRoot: true
            }
        }
    },
    {
        path: 'change-language/:languageCode',
        component: __WEBPACK_IMPORTED_MODULE_2__change_language_component__["a" /* ChangeLanguageComponent */]
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes, { initialNavigation: 'enabled', useHash: false });


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
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n.mat-elevation-z0 {\n  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z1 {\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z2 {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z3 {\n  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2), 0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z4 {\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z5 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z6 {\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z7 {\n  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2), 0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z8 {\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z9 {\n  box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2), 0px 9px 12px 1px rgba(0, 0, 0, 0.14), 0px 3px 16px 2px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z10 {\n  box-shadow: 0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z11 {\n  box-shadow: 0px 6px 7px -4px rgba(0, 0, 0, 0.2), 0px 11px 15px 1px rgba(0, 0, 0, 0.14), 0px 4px 20px 3px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z12 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 12px 17px 2px rgba(0, 0, 0, 0.14), 0px 5px 22px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z13 {\n  box-shadow: 0px 7px 8px -4px rgba(0, 0, 0, 0.2), 0px 13px 19px 2px rgba(0, 0, 0, 0.14), 0px 5px 24px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z14 {\n  box-shadow: 0px 7px 9px -4px rgba(0, 0, 0, 0.2), 0px 14px 21px 2px rgba(0, 0, 0, 0.14), 0px 5px 26px 4px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z15 {\n  box-shadow: 0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z16 {\n  box-shadow: 0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z17 {\n  box-shadow: 0px 8px 11px -5px rgba(0, 0, 0, 0.2), 0px 17px 26px 2px rgba(0, 0, 0, 0.14), 0px 6px 32px 5px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z18 {\n  box-shadow: 0px 9px 11px -5px rgba(0, 0, 0, 0.2), 0px 18px 28px 2px rgba(0, 0, 0, 0.14), 0px 7px 34px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z19 {\n  box-shadow: 0px 9px 12px -6px rgba(0, 0, 0, 0.2), 0px 19px 29px 2px rgba(0, 0, 0, 0.14), 0px 7px 36px 6px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z20 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 20px 31px 3px rgba(0, 0, 0, 0.14), 0px 8px 38px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z21 {\n  box-shadow: 0px 10px 13px -6px rgba(0, 0, 0, 0.2), 0px 21px 33px 3px rgba(0, 0, 0, 0.14), 0px 8px 40px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z22 {\n  box-shadow: 0px 10px 14px -6px rgba(0, 0, 0, 0.2), 0px 22px 35px 3px rgba(0, 0, 0, 0.14), 0px 8px 42px 7px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z23 {\n  box-shadow: 0px 11px 14px -7px rgba(0, 0, 0, 0.2), 0px 23px 36px 3px rgba(0, 0, 0, 0.14), 0px 9px 44px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-elevation-z24 {\n  box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n\n.mat-h1, .mat-headline, .mat-typography h1 {\n  font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h2, .mat-title, .mat-typography h2 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h3, .mat-subheading-2, .mat-typography h3 {\n  font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h4, .mat-subheading-1, .mat-typography h4 {\n  font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 16px; }\n\n.mat-h5, .mat-typography h5 {\n  font-size: 11.62px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-h6, .mat-typography h6 {\n  font-size: 9.38px;\n  font-weight: 400;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  line-height: 20px;\n  margin: 0 0 12px; }\n\n.mat-body-strong, .mat-body-2 {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-body, .mat-body-1, .mat-typography {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .mat-body p, .mat-body-1 p, .mat-typography p {\n    margin: 0 0 12px; }\n\n.mat-small, .mat-caption {\n  font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-display-4, .mat-typography .mat-display-4 {\n  font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 56px;\n  letter-spacing: -0.05em; }\n\n.mat-display-3, .mat-typography .mat-display-3 {\n  font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.02em; }\n\n.mat-display-2, .mat-typography .mat-display-2 {\n  font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px;\n  letter-spacing: -0.005em; }\n\n.mat-display-1, .mat-typography .mat-display-1 {\n  font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0 0 64px; }\n\n.mat-button, .mat-raised-button, .mat-icon-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-button-toggle {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-card-title {\n  font-size: 24px;\n  font-weight: 400; }\n\n.mat-card-subtitle,\n.mat-card-content,\n.mat-card-header .mat-card-title {\n  font-size: 14px; }\n\n.mat-checkbox {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-checkbox-layout .mat-checkbox-label {\n  line-height: 24px; }\n\n.mat-chip:not(.mat-basic-chip) {\n  font-size: 13px;\n  line-height: 16px; }\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-cell {\n  font-size: 14px; }\n\n.mat-calendar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-calendar-body {\n  font-size: 13px; }\n\n.mat-calendar-body-label,\n.mat-calendar-period-button {\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-calendar-table-header th {\n  font-size: 11px;\n  font-weight: 400; }\n\n.mat-dialog-title {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-grid-tile-header,\n.mat-grid-tile-footer {\n  font-size: 14px; }\n  .mat-grid-tile-header .mat-line,\n  .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-grid-tile-header .mat-line:nth-child(n+2),\n    .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-input-container {\n  font: 400 inherit/1.125 Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-input-wrapper {\n  padding-bottom: 1.29688em; }\n\n.mat-input-prefix .mat-icon,\n.mat-input-prefix .mat-datepicker-toggle,\n.mat-input-suffix .mat-icon,\n.mat-input-suffix .mat-datepicker-toggle {\n  font-size: 150%; }\n\n.mat-input-prefix .mat-icon-button,\n.mat-input-suffix .mat-icon-button {\n  height: 1.5em;\n  width: 1.5em; }\n  .mat-input-prefix .mat-icon-button .mat-icon,\n  .mat-input-suffix .mat-icon-button .mat-icon {\n    line-height: 1.5; }\n\n.mat-input-infix {\n  padding: 0.4375em 0;\n  border-top: 0.84375em solid transparent; }\n\n.mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n  transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n  -ms-transform: translateY(-1.28125em) scale(0.75);\n  width: 133.33333%; }\n\n.mat-input-placeholder-wrapper {\n  top: -0.84375em;\n  padding-top: 0.84375em; }\n\n.mat-input-placeholder {\n  top: 1.28125em; }\n  .mat-input-placeholder.mat-float:not(.mat-empty), .mat-focused .mat-input-placeholder.mat-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333%; }\n\n.mat-input-underline {\n  bottom: 1.29688em; }\n\n.mat-input-subscript-wrapper {\n  font-size: 75%;\n  margin-top: 0.60417em;\n  top: calc(100% - 1.72917em); }\n\n.mat-menu-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-paginator {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-paginator-page-size .mat-select-trigger {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 12px; }\n\n.mat-radio-button {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-select-trigger {\n  font-size: 16px; }\n\n.mat-slide-toggle-content {\n  font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-slider-thumb-label-text {\n  font-size: 12px;\n  font-weight: 500; }\n\n.mat-tab-group {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-tab-label, .mat-tab-link {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px;\n  font-weight: 500; }\n\n.mat-toolbar,\n.mat-toolbar h1,\n.mat-toolbar h2,\n.mat-toolbar h3,\n.mat-toolbar h4,\n.mat-toolbar h5,\n.mat-toolbar h6 {\n  font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n  margin: 0; }\n\n.mat-tooltip {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 10px;\n  padding-top: 6px;\n  padding-bottom: 6px; }\n\n.mat-list-item {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list .mat-list-item, .mat-nav-list .mat-list-item {\n  font-size: 16px; }\n  .mat-list .mat-list-item .mat-line, .mat-nav-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 14px; }\n\n.mat-list .mat-subheader, .mat-nav-list .mat-subheader {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-list[dense] .mat-list-item, .mat-nav-list[dense] .mat-list-item {\n  font-size: 12px; }\n  .mat-list[dense] .mat-list-item .mat-line, .mat-nav-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n    .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n      font-size: 12px; }\n\n.mat-list[dense] .mat-subheader, .mat-nav-list[dense] .mat-subheader {\n  font: 500 12px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-option {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 16px; }\n\n.mat-optgroup-label {\n  font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n\n.mat-simple-snackbar {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 14px; }\n\n.mat-simple-snackbar-action {\n  line-height: 1;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 500; }\n\n.mat-ripple {\n  overflow: hidden; }\n\n.mat-ripple.mat-ripple-unbounded {\n  overflow: visible; }\n\n.mat-ripple-element {\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(0); }\n\n.mat-option {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  position: relative;\n  cursor: pointer;\n  outline: none; }\n  .mat-option[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-option {\n    text-align: right; }\n  .mat-option .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-option .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n  .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n    [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n      padding-left: 16px;\n      padding-right: 32px; }\n\n.mat-option-ripple {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .mat-option-ripple {\n      opacity: 0.5; } }\n\n.mat-option-pseudo-checkbox {\n  margin-right: 8px; }\n  [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n\n.mat-optgroup-label {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  line-height: 48px;\n  height: 48px;\n  padding: 0 16px;\n  text-align: left;\n  text-decoration: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: default; }\n  .mat-optgroup-label[disabled] {\n    cursor: default; }\n  [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n    [dir='rtl'] .mat-optgroup-label .mat-icon {\n      margin-left: 16px;\n      margin-right: 0; }\n\n.cdk-visually-hidden {\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  text-transform: none;\n  width: 1px; }\n\n.cdk-overlay-container, .cdk-global-overlay-wrapper {\n  pointer-events: none;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%; }\n\n.cdk-overlay-container {\n  position: fixed;\n  z-index: 1000; }\n\n.cdk-global-overlay-wrapper {\n  display: flex;\n  position: absolute;\n  z-index: 1000; }\n\n.cdk-overlay-pane {\n  position: absolute;\n  pointer-events: auto;\n  box-sizing: border-box;\n  z-index: 1000; }\n\n.cdk-overlay-backdrop {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  pointer-events: auto;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n  opacity: 0; }\n  .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n\n.cdk-overlay-dark-backdrop {\n  background: rgba(0, 0, 0, 0.6); }\n\n.cdk-overlay-transparent-backdrop {\n  background: none; }\n\n.cdk-global-scrollblock {\n  position: fixed;\n  width: 100%;\n  overflow-y: scroll; }\n\n.jupytangular[class] {\n  /*\n& {\n    &, *, *:before, *:after, input, button, a {\n\n        all: unset;\n    }\n\n    body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n        margin: 0;\n        padding: 0;\n        border: 0;\n        font-size: 100%;\n        font: inherit;\n        vertical-align: baseline;\n    }\n\n    article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n        display: block;\n    }\n\n    body {\n        line-height: 1;\n    }\n\n    ol, ul {\n        list-style: none;\n    }\n\n    blockquote, q {\n        quotes: none;\n    }\n\n    blockquote {\n        &:before, &:after {\n            content: '';\n            content: none;\n        }\n    }\n\n    q {\n        &:before, &:after {\n            content: '';\n            content: none;\n        }\n    }\n\n    table {\n        border-collapse: collapse;\n        border-spacing: 0;\n    }\n\n}\n*/ }\n  .jupytangular[class] {\n    all: initial; }\n  .jupytangular[class], .jupytangular[class] *, .jupytangular[class] *:before, .jupytangular[class] *:after, .jupytangular[class] input, .jupytangular[class] button, .jupytangular[class] a {\n    /*\n    animation: none;\n    animation-delay: 0;\n    animation-direction: normal;\n    animation-duration: 0;\n    animation-fill-mode: none;\n    animation-iteration-count: 1;\n    animation-name: none;\n    animation-play-state: running;\n    animation-timing-function: ease;\n    backface-visibility: visible;\n    background: 0;\n    background-attachment: scroll;\n    background-clip: border-box;\n    background-color: transparent;\n    background-image: none;\n    background-origin: padding-box;\n    background-position: 0 0;\n    background-position-x: 0;\n    background-position-y: 0;\n    background-repeat: repeat;\n    background-size: auto auto;\n    border: 0;\n    border-style: none;\n    border-width: medium;\n    border-color: inherit;\n    border-bottom: 0;\n    border-bottom-color: inherit;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border-bottom-style: none;\n    border-bottom-width: medium;\n    border-collapse: separate;\n    border-image: none;\n    border-left: 0;\n    border-left-color: inherit;\n    border-left-style: none;\n    border-left-width: medium;\n    border-radius: 0;\n    border-right: 0;\n    border-right-color: inherit;\n    border-right-style: none;\n    border-right-width: medium;\n    border-spacing: 0;\n    border-top: 0;\n    border-top-color: inherit;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n    border-top-style: none;\n    border-top-width: medium;\n    bottom: auto;\n    box-shadow: none;\n    box-sizing: content-box;\n    caption-side: top;\n    clear: none;\n    clip: auto;\n    color: inherit;\n    columns: auto;\n    column-count: auto;\n    column-fill: balance;\n    column-gap: normal;\n    column-rule: medium none currentColor;\n    column-rule-color: currentColor;\n    column-rule-style: none;\n    column-rule-width: none;\n    column-span: 1;\n    column-width: auto;\n    content: normal;\n    counter-increment: none;\n    counter-reset: none;\n    cursor: auto;\n    direction: ltr;\n    display: inline;\n    empty-cells: show;\n    float: none;\n    font: normal;\n    font-family: inherit;\n    font-size: medium;\n    font-style: normal;\n    font-variant: normal;\n    font-weight: normal;\n    height: auto;\n    hyphens: none;\n    left: auto;\n    letter-spacing: normal;\n    line-height: normal;\n    list-style: none;\n    list-style-image: none;\n    list-style-position: outside;\n    list-style-type: disc;\n    margin: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    margin-right: 0;\n    margin-top: 0;\n    max-height: none;\n    max-width: none;\n    min-height: 0;\n    min-width: 0;\n    opacity: 1;\n    orphans: 0;\n    outline: 0;\n    outline-color: invert;\n    outline-style: none;\n    outline-width: medium;\n    overflow: visible;\n    overflow-x: visible;\n    overflow-y: visible;\n    padding: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    padding-right: 0;\n    padding-top: 0;\n    page-break-after: auto;\n    page-break-before: auto;\n    page-break-inside: auto;\n    perspective: none;\n    perspective-origin: 50% 50%;\n    position: static;\n\n    quotes: '\\201C' '\\201D' '\\2018' '\\2019';\n    right: auto;\n    tab-size: 8;\n    table-layout: auto;\n    text-align: inherit;\n    text-align-last: auto;\n    text-decoration: none;\n    text-decoration-color: inherit;\n    text-decoration-line: none;\n    text-decoration-style: solid;\n    text-indent: 0;\n    text-shadow: none;\n    text-transform: none;\n    top: auto;\n    transform: none;\n    transform-style: flat;\n    transition: none;\n    transition-delay: 0s;\n    transition-duration: 0s;\n    transition-property: none;\n    transition-timing-function: ease;\n    unicode-bidi: normal;\n    vertical-align: baseline;\n    visibility: visible;\n    white-space: normal;\n    widows: 0;\n    width: auto;\n    word-spacing: normal;\n    z-index: auto;\n\n    all: initial;\n    */\n    all: unset; }\n\n.jupytangular[class] {\n  /**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n  /* Theme for the ripple elements.*/\n  /** The mixins below are shared between md-menu and md-select */\n  /**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n  /* stylelint-disable material/no-prefixes */\n  /* stylelint-enable */\n  /**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n  /**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n  /* Theme for the ripple elements.*/\n  /** The mixins below are shared between md-menu and md-select */\n  /**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n  /* stylelint-disable material/no-prefixes */\n  /* stylelint-enable */\n  /**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */ }\n  .jupytangular[class] .mat-h1, .jupytangular[class] .mat-headline, .jupytangular[class] .mat-typography h1 {\n    font: 400 24px/32px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h2, .jupytangular[class] .mat-title, .jupytangular[class] .mat-typography h2 {\n    font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h3, .jupytangular[class] .mat-subheading-2, .jupytangular[class] .mat-typography h3 {\n    font: 400 16px/28px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h4, .jupytangular[class] .mat-subheading-1, .jupytangular[class] .mat-typography h4 {\n    font: 400 15px/24px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h5, .jupytangular[class] .mat-typography h5 {\n    font-size: 11.62px;\n    font-weight: 400;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    line-height: 20px;\n    margin: 0 0 12px; }\n  .jupytangular[class] .mat-h6, .jupytangular[class] .mat-typography h6 {\n    font-size: 9.38px;\n    font-weight: 400;\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    line-height: 20px;\n    margin: 0 0 12px; }\n  .jupytangular[class] .mat-body-strong, .jupytangular[class] .mat-body-2 {\n    font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-body, .jupytangular[class] .mat-body-1, .jupytangular[class] .mat-typography {\n    font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-body p, .jupytangular[class] .mat-body-1 p, .jupytangular[class] .mat-typography p {\n    margin: 0 0 12px; }\n  .jupytangular[class] .mat-small, .jupytangular[class] .mat-caption {\n    font: 400 12px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-display-4, .jupytangular[class] .mat-typography .mat-display-4 {\n    font: 300 112px/112px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 56px;\n    letter-spacing: -0.05em; }\n  .jupytangular[class] .mat-display-3, .jupytangular[class] .mat-typography .mat-display-3 {\n    font: 400 56px/56px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 64px;\n    letter-spacing: -0.02em; }\n  .jupytangular[class] .mat-display-2, .jupytangular[class] .mat-typography .mat-display-2 {\n    font: 400 45px/48px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 64px;\n    letter-spacing: -0.005em; }\n  .jupytangular[class] .mat-display-1, .jupytangular[class] .mat-typography .mat-display-1 {\n    font: 400 34px/40px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0 0 64px; }\n  .jupytangular[class] .mat-button, .jupytangular[class] .mat-raised-button, .jupytangular[class] .mat-icon-button {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 14px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-button-toggle {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-card {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-card-title {\n    font-size: 24px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-card-subtitle,\n  .jupytangular[class] .mat-card-content,\n  .jupytangular[class] .mat-card-header .mat-card-title {\n    font-size: 14px; }\n  .jupytangular[class] .mat-checkbox {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-checkbox-layout .mat-checkbox-label {\n    line-height: 24px; }\n  .jupytangular[class] .mat-chip:not(.mat-basic-chip) {\n    font-size: 13px;\n    line-height: 16px; }\n  .jupytangular[class] .mat-header-cell {\n    font-size: 12px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-cell {\n    font-size: 14px; }\n  .jupytangular[class] .mat-calendar {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-calendar-body {\n    font-size: 13px; }\n  .jupytangular[class] .mat-calendar-body-label,\n  .jupytangular[class] .mat-calendar-period-button {\n    font-size: 14px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-calendar-table-header th {\n    font-size: 11px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-dialog-title {\n    font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-grid-tile-header,\n  .jupytangular[class] .mat-grid-tile-footer {\n    font-size: 14px; }\n  .jupytangular[class] .mat-grid-tile-header .mat-line,\n  .jupytangular[class] .mat-grid-tile-footer .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n  .jupytangular[class] .mat-grid-tile-header .mat-line:nth-child(n+2),\n  .jupytangular[class] .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n    font-size: 12px; }\n  .jupytangular[class] .mat-input-container {\n    font: 400 inherit/1.125 Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-input-wrapper {\n    padding-bottom: 1.29688em; }\n  .jupytangular[class] .mat-input-prefix .mat-icon,\n  .jupytangular[class] .mat-input-prefix .mat-datepicker-toggle,\n  .jupytangular[class] .mat-input-suffix .mat-icon,\n  .jupytangular[class] .mat-input-suffix .mat-datepicker-toggle {\n    font-size: 150%; }\n  .jupytangular[class] .mat-input-prefix .mat-icon-button,\n  .jupytangular[class] .mat-input-suffix .mat-icon-button {\n    height: 1.5em;\n    width: 1.5em; }\n  .jupytangular[class] .mat-input-prefix .mat-icon-button .mat-icon,\n  .jupytangular[class] .mat-input-suffix .mat-icon-button .mat-icon {\n    line-height: 1.5; }\n  .jupytangular[class] .mat-input-infix {\n    padding: 0.4375em 0;\n    border-top: 0.84375em solid transparent; }\n  .jupytangular[class] .mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333%; }\n  .jupytangular[class] .mat-input-placeholder-wrapper {\n    top: -0.84375em;\n    padding-top: 0.84375em; }\n  .jupytangular[class] .mat-input-placeholder {\n    top: 1.28125em; }\n  .jupytangular[class] .mat-input-placeholder.mat-float:not(.mat-empty), .jupytangular[class] .mat-focused .mat-input-placeholder.mat-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333%; }\n  .jupytangular[class] .mat-input-underline {\n    bottom: 1.29688em; }\n  .jupytangular[class] .mat-input-subscript-wrapper {\n    font-size: 75%;\n    margin-top: 0.60417em;\n    top: calc(100% - 1.72917em); }\n  .jupytangular[class] .mat-menu-item {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px; }\n  .jupytangular[class] .mat-paginator {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 12px; }\n  .jupytangular[class] .mat-paginator-page-size .mat-select-trigger {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 12px; }\n  .jupytangular[class] .mat-radio-button {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-select {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-select-trigger {\n    font-size: 16px; }\n  .jupytangular[class] .mat-slide-toggle-content {\n    font: 400 14px/20px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-slider-thumb-label-text {\n    font-size: 12px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-tab-group {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-tab-label, .jupytangular[class] .mat-tab-link {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 14px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-toolbar,\n  .jupytangular[class] .mat-toolbar h1,\n  .jupytangular[class] .mat-toolbar h2,\n  .jupytangular[class] .mat-toolbar h3,\n  .jupytangular[class] .mat-toolbar h4,\n  .jupytangular[class] .mat-toolbar h5,\n  .jupytangular[class] .mat-toolbar h6 {\n    font: 500 20px/32px Roboto, \"Helvetica Neue\", sans-serif;\n    margin: 0; }\n  .jupytangular[class] .mat-tooltip {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 10px;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  .jupytangular[class] .mat-list-item {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-list .mat-list-item, .jupytangular[class] .mat-nav-list .mat-list-item {\n    font-size: 16px; }\n  .jupytangular[class] .mat-list .mat-list-item .mat-line, .jupytangular[class] .mat-nav-list .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n  .jupytangular[class] .mat-list .mat-list-item .mat-line:nth-child(n+2), .jupytangular[class] .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n    font-size: 14px; }\n  .jupytangular[class] .mat-list .mat-subheader, .jupytangular[class] .mat-nav-list .mat-subheader {\n    font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-list[dense] .mat-list-item, .jupytangular[class] .mat-nav-list[dense] .mat-list-item {\n    font-size: 12px; }\n  .jupytangular[class] .mat-list[dense] .mat-list-item .mat-line, .jupytangular[class] .mat-nav-list[dense] .mat-list-item .mat-line {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    box-sizing: border-box; }\n  .jupytangular[class] .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .jupytangular[class] .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n    font-size: 12px; }\n  .jupytangular[class] .mat-list[dense] .mat-subheader, .jupytangular[class] .mat-nav-list[dense] .mat-subheader {\n    font: 500 12px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-option {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 16px; }\n  .jupytangular[class] .mat-optgroup-label {\n    font: 500 14px/24px Roboto, \"Helvetica Neue\", sans-serif; }\n  .jupytangular[class] .mat-simple-snackbar {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n    font-size: 14px; }\n  .jupytangular[class] .mat-simple-snackbar-action {\n    line-height: 1;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: 500; }\n  .jupytangular[class] .mat-ripple {\n    overflow: hidden; }\n  .jupytangular[class] .mat-ripple.mat-ripple-unbounded {\n    overflow: visible; }\n  .jupytangular[class] .mat-ripple-element {\n    position: absolute;\n    border-radius: 50%;\n    pointer-events: none;\n    transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);\n    transform: scale(0); }\n  .jupytangular[class] .mat-option {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    line-height: 48px;\n    height: 48px;\n    padding: 0 16px;\n    text-align: left;\n    text-decoration: none;\n    position: relative;\n    cursor: pointer;\n    outline: none; }\n  .jupytangular[class] .mat-option[disabled] {\n    cursor: default; }\n  .jupytangular[class] [dir='rtl'] .mat-option {\n    text-align: right; }\n  .jupytangular[class] .mat-option .mat-icon {\n    margin-right: 16px; }\n  .jupytangular[class] [dir='rtl'] .mat-option .mat-icon {\n    margin-left: 16px;\n    margin-right: 0; }\n  .jupytangular[class] .mat-option[aria-disabled='true'] {\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .jupytangular[class] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 32px; }\n  .jupytangular[class] [dir='rtl'] .mat-optgroup .mat-option:not(.mat-option-multiple) {\n    padding-left: 16px;\n    padding-right: 32px; }\n  .jupytangular[class] .mat-option-ripple {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none; }\n  @media screen and (-ms-high-contrast: active) {\n    .jupytangular[class] .mat-option-ripple {\n      opacity: 0.5; } }\n  .jupytangular[class] .mat-option-pseudo-checkbox {\n    margin-right: 8px; }\n  .jupytangular[class] [dir='rtl'] .mat-option-pseudo-checkbox {\n    margin-left: 8px;\n    margin-right: 0; }\n  .jupytangular[class] .mat-optgroup-label {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: block;\n    line-height: 48px;\n    height: 48px;\n    padding: 0 16px;\n    text-align: left;\n    text-decoration: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: default; }\n  .jupytangular[class] .mat-optgroup-label[disabled] {\n    cursor: default; }\n  .jupytangular[class] [dir='rtl'] .mat-optgroup-label {\n    text-align: right; }\n  .jupytangular[class] .mat-optgroup-label .mat-icon {\n    margin-right: 16px; }\n  .jupytangular[class] [dir='rtl'] .mat-optgroup-label .mat-icon {\n    margin-left: 16px;\n    margin-right: 0; }\n  .jupytangular[class] .cdk-visually-hidden {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    text-transform: none;\n    width: 1px; }\n  .jupytangular[class] .cdk-overlay-container, .jupytangular[class] .cdk-global-overlay-wrapper {\n    pointer-events: none;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%; }\n  .jupytangular[class] .cdk-overlay-container {\n    position: fixed;\n    z-index: 1000; }\n  .jupytangular[class] .cdk-global-overlay-wrapper {\n    display: flex;\n    position: absolute;\n    z-index: 1000; }\n  .jupytangular[class] .cdk-overlay-pane {\n    position: absolute;\n    pointer-events: auto;\n    box-sizing: border-box;\n    z-index: 1000; }\n  .jupytangular[class] .cdk-overlay-backdrop {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 1000;\n    pointer-events: auto;\n    -webkit-tap-highlight-color: transparent;\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n    opacity: 0; }\n  .jupytangular[class] .cdk-overlay-backdrop.cdk-overlay-backdrop-showing {\n    opacity: 0.48; }\n  .jupytangular[class] .cdk-overlay-dark-backdrop {\n    background: rgba(0, 0, 0, 0.6); }\n  .jupytangular[class] .cdk-overlay-transparent-backdrop {\n    background: none; }\n  .jupytangular[class] .cdk-global-scrollblock {\n    position: fixed;\n    width: 100%;\n    overflow-y: scroll; }\n  .jupytangular[class] .mat-button, .jupytangular[class] .mat-fab, .jupytangular[class] .mat-icon-button, .jupytangular[class] .mat-mini-fab, .jupytangular[class] .mat-raised-button {\n    box-sizing: border-box;\n    position: relative;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    outline: 0;\n    border: none;\n    -webkit-tap-highlight-color: transparent;\n    display: inline-block;\n    white-space: nowrap;\n    text-decoration: none;\n    vertical-align: baseline;\n    text-align: center;\n    margin: 0;\n    min-width: 88px;\n    line-height: 36px;\n    padding: 0 16px;\n    border-radius: 2px; }\n  .jupytangular[class] [disabled].mat-button, .jupytangular[class] [disabled].mat-fab, .jupytangular[class] [disabled].mat-icon-button, .jupytangular[class] [disabled].mat-mini-fab, .jupytangular[class] [disabled].mat-raised-button {\n    cursor: default; }\n  .jupytangular[class] .cdk-keyboard-focused.mat-button .mat-button-focus-overlay, .jupytangular[class] .cdk-keyboard-focused.mat-fab .mat-button-focus-overlay, .jupytangular[class] .cdk-keyboard-focused.mat-icon-button .mat-button-focus-overlay, .jupytangular[class] .cdk-keyboard-focused.mat-mini-fab .mat-button-focus-overlay, .jupytangular[class] .cdk-keyboard-focused.mat-raised-button .mat-button-focus-overlay {\n    opacity: 1; }\n  .jupytangular[class] .mat-button::-moz-focus-inner, .jupytangular[class] .mat-fab::-moz-focus-inner, .jupytangular[class] .mat-icon-button::-moz-focus-inner, .jupytangular[class] .mat-mini-fab::-moz-focus-inner, .jupytangular[class] .mat-raised-button::-moz-focus-inner {\n    border: 0; }\n  .jupytangular[class] .mat-fab, .jupytangular[class] .mat-mini-fab, .jupytangular[class] .mat-raised-button {\n    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n    transform: translate3d(0, 0, 0);\n    transition: background 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }\n  .jupytangular[class] .mat-fab:not([disabled]):active, .jupytangular[class] .mat-mini-fab:not([disabled]):active, .jupytangular[class] .mat-raised-button:not([disabled]):active {\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] [disabled].mat-fab, .jupytangular[class] [disabled].mat-mini-fab, .jupytangular[class] [disabled].mat-raised-button {\n    box-shadow: none; }\n  .jupytangular[class] .mat-button .mat-button-focus-overlay, .jupytangular[class] .mat-icon-button .mat-button-focus-overlay {\n    transition: none;\n    opacity: 0; }\n  .jupytangular[class] .mat-button:hover .mat-button-focus-overlay {\n    opacity: 1; }\n  .jupytangular[class] .mat-fab {\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    min-width: 0;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    padding: 0;\n    flex-shrink: 0; }\n  .jupytangular[class] .mat-fab:not([disabled]):active {\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-fab .mat-icon, .jupytangular[class] .mat-fab i {\n    padding: 16px 0;\n    line-height: 24px; }\n  .jupytangular[class] .mat-mini-fab {\n    box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n    min-width: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    padding: 0;\n    flex-shrink: 0; }\n  .jupytangular[class] .mat-mini-fab:not([disabled]):active {\n    box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-mini-fab .mat-icon, .jupytangular[class] .mat-mini-fab i {\n    padding: 8px 0;\n    line-height: 24px; }\n  .jupytangular[class] .mat-icon-button {\n    padding: 0;\n    min-width: 0;\n    width: 40px;\n    height: 40px;\n    flex-shrink: 0;\n    line-height: 40px;\n    border-radius: 50%; }\n  .jupytangular[class] .mat-icon-button .mat-icon, .jupytangular[class] .mat-icon-button i {\n    line-height: 24px; }\n  .jupytangular[class] .mat-button, .jupytangular[class] .mat-icon-button, .jupytangular[class] .mat-raised-button {\n    color: currentColor; }\n  .jupytangular[class] .mat-button .mat-button-wrapper > *, .jupytangular[class] .mat-icon-button .mat-button-wrapper > *, .jupytangular[class] .mat-raised-button .mat-button-wrapper > * {\n    vertical-align: middle; }\n  .jupytangular[class] .mat-button-focus-overlay, .jupytangular[class] .mat-button-ripple {\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    pointer-events: none; }\n  .jupytangular[class] .mat-button-focus-overlay {\n    background-color: rgba(0, 0, 0, 0.12);\n    border-radius: inherit;\n    opacity: 0;\n    transition: opacity 0.2s cubic-bezier(0.35, 0, 0.25, 1), background-color 0.2s cubic-bezier(0.35, 0, 0.25, 1); }\n  @media screen and (-ms-high-contrast: active) {\n    .jupytangular[class] .mat-button-focus-overlay {\n      background-color: rgba(255, 255, 255, 0.5); } }\n  .jupytangular[class] .mat-button-ripple-round {\n    border-radius: 50%;\n    z-index: 1; }\n  @media screen and (-ms-high-contrast: active) {\n    .jupytangular[class] .mat-button, .jupytangular[class] .mat-fab, .jupytangular[class] .mat-icon-button, .jupytangular[class] .mat-mini-fab, .jupytangular[class] .mat-raised-button {\n      outline: solid 1px; } }\n  .jupytangular[class] .mat-input-container {\n    display: inline-block;\n    position: relative;\n    text-align: left; }\n  .jupytangular[class] [dir=rtl] .mat-input-container {\n    text-align: right; }\n  .jupytangular[class] .mat-input-wrapper {\n    position: relative; }\n  .jupytangular[class] .mat-input-flex {\n    display: inline-flex;\n    align-items: baseline;\n    width: 100%; }\n  .jupytangular[class] .mat-input-prefix, .jupytangular[class] .mat-input-suffix {\n    white-space: nowrap;\n    flex: none; }\n  .jupytangular[class] .mat-input-prefix .mat-datepicker-toggle, .jupytangular[class] .mat-input-prefix .mat-icon, .jupytangular[class] .mat-input-suffix .mat-datepicker-toggle, .jupytangular[class] .mat-input-suffix .mat-icon {\n    width: 1em;\n    height: 1em;\n    vertical-align: text-bottom; }\n  .jupytangular[class] .mat-input-prefix .mat-icon-button, .jupytangular[class] .mat-input-suffix .mat-icon-button {\n    font: inherit;\n    vertical-align: baseline; }\n  .jupytangular[class] .mat-input-prefix .mat-icon-button .mat-icon, .jupytangular[class] .mat-input-suffix .mat-icon-button .mat-icon {\n    font-size: inherit;\n    width: 1em;\n    height: 1em;\n    vertical-align: baseline; }\n  .jupytangular[class] .mat-input-infix {\n    display: block;\n    position: relative;\n    flex: auto; }\n  .jupytangular[class] .mat-input-element {\n    font: inherit;\n    background: 0 0;\n    color: currentColor;\n    border: none;\n    outline: 0;\n    padding: 0;\n    width: 100%;\n    vertical-align: bottom; }\n  .jupytangular[class] .mat-input-element:-moz-ui-invalid {\n    box-shadow: none; }\n  .jupytangular[class] .mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-input-placeholder {\n    display: none; }\n  .jupytangular[class] .mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n    display: block;\n    transition: none; }\n  .jupytangular[class] .mat-input-element::placeholder {\n    color: transparent !important; }\n  .jupytangular[class] .mat-input-element::-moz-placeholder {\n    color: transparent !important; }\n  .jupytangular[class] .mat-input-element::-webkit-input-placeholder {\n    color: transparent !important; }\n  .jupytangular[class] .mat-input-element:-ms-input-placeholder {\n    color: transparent !important; }\n  .jupytangular[class] .mat-input-placeholder-wrapper {\n    position: absolute;\n    left: 0;\n    box-sizing: content-box;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    pointer-events: none; }\n  .jupytangular[class] textarea.mat-input-element {\n    overflow: auto; }\n  .jupytangular[class] .mat-input-placeholder {\n    position: absolute;\n    left: 0;\n    font: inherit;\n    pointer-events: none;\n    width: 100%;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    transform: perspective(100px);\n    -ms-transform: none;\n    transform-origin: 0 0;\n    transition: transform 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), color 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), width 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);\n    display: none; }\n  .jupytangular[class] .mat-focused .mat-input-placeholder.mat-float, .jupytangular[class] .mat-input-placeholder.mat-empty, .jupytangular[class] .mat-input-placeholder.mat-float:not(.mat-empty) {\n    display: block; }\n  .jupytangular[class] [dir=rtl] .mat-input-placeholder {\n    transform-origin: 100% 0;\n    left: auto;\n    right: 0; }\n  .jupytangular[class] .mat-input-placeholder:not(.mat-empty) {\n    transition: none; }\n  .jupytangular[class] .mat-input-underline {\n    position: absolute;\n    height: 1px;\n    width: 100%;\n    left: 0; }\n  .jupytangular[class] .mat-input-underline.mat-disabled {\n    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.26) 0, rgba(0, 0, 0, 0.26) 33%, transparent 0);\n    background-size: 4px 1px;\n    background-repeat: repeat-x;\n    background-position: 0;\n    background-color: transparent; }\n  .jupytangular[class] .mat-input-underline .mat-input-ripple {\n    position: absolute;\n    height: 2px;\n    top: 0;\n    left: 0;\n    width: 100%;\n    transform-origin: 50%;\n    transform: scaleX(0.5);\n    visibility: hidden;\n    transition: background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  .jupytangular[class] .mat-focused .mat-input-underline .mat-input-ripple, .jupytangular[class] .mat-input-invalid .mat-input-underline .mat-input-ripple {\n    visibility: visible;\n    transform: scaleX(1);\n    transition: transform 150ms linear, background-color 0.3s cubic-bezier(0.55, 0, 0.55, 0.2); }\n  .jupytangular[class] .mat-input-subscript-wrapper {\n    position: absolute;\n    width: 100%;\n    overflow: hidden; }\n  .jupytangular[class] .mat-input-placeholder-wrapper .mat-datepicker-toggle, .jupytangular[class] .mat-input-placeholder-wrapper .mat-icon, .jupytangular[class] .mat-input-subscript-wrapper .mat-datepicker-toggle, .jupytangular[class] .mat-input-subscript-wrapper .mat-icon {\n    width: 1em;\n    height: 1em;\n    font-size: inherit;\n    vertical-align: baseline; }\n  .jupytangular[class] .mat-input-hint-wrapper {\n    display: flex; }\n  .jupytangular[class] .mat-input-hint-spacer {\n    flex: 1 0 1em; }\n  .jupytangular[class] .mat-input-error {\n    display: block; }\n  .jupytangular[class] .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .jupytangular[class] .mat-option {\n    color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-option:hover:not(.mat-option-disabled), .jupytangular[class] .mat-option:focus:not(.mat-option-disabled) {\n      background: rgba(0, 0, 0, 0.04); }\n    .jupytangular[class] .mat-option.mat-selected.mat-primary, .mat-primary .jupytangular[class] .mat-option.mat-selected {\n      color: #0099bb; }\n    .jupytangular[class] .mat-option.mat-selected.mat-accent, .mat-accent .jupytangular[class] .mat-option.mat-selected {\n      color: #ff9900; }\n    .jupytangular[class] .mat-option.mat-selected.mat-warn, .mat-warn .jupytangular[class] .mat-option.mat-selected {\n      color: #f44336; }\n    .jupytangular[class] .mat-option.mat-selected:not(.mat-option-multiple) {\n      background: rgba(0, 0, 0, 0.04); }\n    .jupytangular[class] .mat-option.mat-active {\n      background: rgba(0, 0, 0, 0.04);\n      color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-option.mat-option-disabled {\n      color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-optgroup-label {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-optgroup-disabled .mat-optgroup-label {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-pseudo-checkbox {\n    color: rgba(0, 0, 0, 0.54); }\n    .jupytangular[class] .mat-pseudo-checkbox::after {\n      color: #fafafa; }\n  .jupytangular[class] .mat-pseudo-checkbox-checked.mat-primary,\n  .jupytangular[class] .mat-pseudo-checkbox-indeterminate.mat-primary,\n  .jupytangular[class] .mat-primary .mat-pseudo-checkbox-checked,\n  .jupytangular[class] .mat-primary .mat-pseudo-checkbox-indeterminate {\n    background: #0099bb; }\n  .jupytangular[class] .mat-pseudo-checkbox-checked.mat-accent,\n  .jupytangular[class] .mat-pseudo-checkbox-indeterminate.mat-accent,\n  .jupytangular[class] .mat-accent .mat-pseudo-checkbox-checked,\n  .jupytangular[class] .mat-accent .mat-pseudo-checkbox-indeterminate {\n    background: #ff9900; }\n  .jupytangular[class] .mat-pseudo-checkbox-checked.mat-warn,\n  .jupytangular[class] .mat-pseudo-checkbox-indeterminate.mat-warn,\n  .jupytangular[class] .mat-warn .mat-pseudo-checkbox-checked,\n  .jupytangular[class] .mat-warn .mat-pseudo-checkbox-indeterminate {\n    background: #f44336; }\n  .jupytangular[class] .mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .jupytangular[class] .mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {\n    background: #b0b0b0; }\n  .jupytangular[class] .mat-app-background {\n    background-color: #fafafa; }\n  .jupytangular[class] .mat-theme-loaded-marker {\n    display: none; }\n  .jupytangular[class] .mat-autocomplete-panel {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover) {\n      background: white;\n      color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-button, .jupytangular[class] .mat-icon-button {\n    background: transparent; }\n    .jupytangular[class] .mat-button.mat-primary .mat-button-focus-overlay, .jupytangular[class] .mat-icon-button.mat-primary .mat-button-focus-overlay {\n      background-color: rgba(0, 153, 187, 0.12); }\n    .jupytangular[class] .mat-button.mat-accent .mat-button-focus-overlay, .jupytangular[class] .mat-icon-button.mat-accent .mat-button-focus-overlay {\n      background-color: rgba(255, 153, 0, 0.12); }\n    .jupytangular[class] .mat-button.mat-warn .mat-button-focus-overlay, .jupytangular[class] .mat-icon-button.mat-warn .mat-button-focus-overlay {\n      background-color: rgba(244, 67, 54, 0.12); }\n    .jupytangular[class] .mat-button[disabled] .mat-button-focus-overlay, .jupytangular[class] .mat-icon-button[disabled] .mat-button-focus-overlay {\n      background-color: transparent; }\n    .jupytangular[class] .mat-button.mat-primary, .jupytangular[class] .mat-icon-button.mat-primary {\n      color: #0099bb; }\n    .jupytangular[class] .mat-button.mat-accent, .jupytangular[class] .mat-icon-button.mat-accent {\n      color: #ff9900; }\n    .jupytangular[class] .mat-button.mat-warn, .jupytangular[class] .mat-icon-button.mat-warn {\n      color: #f44336; }\n    .jupytangular[class] .mat-button.mat-primary[disabled], .jupytangular[class] .mat-button.mat-accent[disabled], .jupytangular[class] .mat-button.mat-warn[disabled], .jupytangular[class] .mat-button[disabled][disabled], .jupytangular[class] .mat-icon-button.mat-primary[disabled], .jupytangular[class] .mat-icon-button.mat-accent[disabled], .jupytangular[class] .mat-icon-button.mat-warn[disabled], .jupytangular[class] .mat-icon-button[disabled][disabled] {\n      color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-raised-button, .jupytangular[class] .mat-fab, .jupytangular[class] .mat-mini-fab {\n    color: rgba(0, 0, 0, 0.87);\n    background-color: white; }\n    .jupytangular[class] .mat-raised-button.mat-primary, .jupytangular[class] .mat-fab.mat-primary, .jupytangular[class] .mat-mini-fab.mat-primary {\n      color: white; }\n    .jupytangular[class] .mat-raised-button.mat-accent, .jupytangular[class] .mat-fab.mat-accent, .jupytangular[class] .mat-mini-fab.mat-accent {\n      color: white; }\n    .jupytangular[class] .mat-raised-button.mat-warn, .jupytangular[class] .mat-fab.mat-warn, .jupytangular[class] .mat-mini-fab.mat-warn {\n      color: white; }\n    .jupytangular[class] .mat-raised-button.mat-primary[disabled], .jupytangular[class] .mat-raised-button.mat-accent[disabled], .jupytangular[class] .mat-raised-button.mat-warn[disabled], .jupytangular[class] .mat-raised-button[disabled][disabled], .jupytangular[class] .mat-fab.mat-primary[disabled], .jupytangular[class] .mat-fab.mat-accent[disabled], .jupytangular[class] .mat-fab.mat-warn[disabled], .jupytangular[class] .mat-fab[disabled][disabled], .jupytangular[class] .mat-mini-fab.mat-primary[disabled], .jupytangular[class] .mat-mini-fab.mat-accent[disabled], .jupytangular[class] .mat-mini-fab.mat-warn[disabled], .jupytangular[class] .mat-mini-fab[disabled][disabled] {\n      color: rgba(0, 0, 0, 0.38); }\n    .jupytangular[class] .mat-raised-button.mat-primary, .jupytangular[class] .mat-fab.mat-primary, .jupytangular[class] .mat-mini-fab.mat-primary {\n      background-color: #0099bb; }\n    .jupytangular[class] .mat-raised-button.mat-accent, .jupytangular[class] .mat-fab.mat-accent, .jupytangular[class] .mat-mini-fab.mat-accent {\n      background-color: #ff9900; }\n    .jupytangular[class] .mat-raised-button.mat-warn, .jupytangular[class] .mat-fab.mat-warn, .jupytangular[class] .mat-mini-fab.mat-warn {\n      background-color: #f44336; }\n    .jupytangular[class] .mat-raised-button.mat-primary[disabled], .jupytangular[class] .mat-raised-button.mat-accent[disabled], .jupytangular[class] .mat-raised-button.mat-warn[disabled], .jupytangular[class] .mat-raised-button[disabled][disabled], .jupytangular[class] .mat-fab.mat-primary[disabled], .jupytangular[class] .mat-fab.mat-accent[disabled], .jupytangular[class] .mat-fab.mat-warn[disabled], .jupytangular[class] .mat-fab[disabled][disabled], .jupytangular[class] .mat-mini-fab.mat-primary[disabled], .jupytangular[class] .mat-mini-fab.mat-accent[disabled], .jupytangular[class] .mat-mini-fab.mat-warn[disabled], .jupytangular[class] .mat-mini-fab[disabled][disabled] {\n      background-color: rgba(0, 0, 0, 0.12); }\n    .jupytangular[class] .mat-raised-button.mat-primary .mat-ripple-element, .jupytangular[class] .mat-fab.mat-primary .mat-ripple-element, .jupytangular[class] .mat-mini-fab.mat-primary .mat-ripple-element {\n      background-color: rgba(255, 255, 255, 0.2); }\n    .jupytangular[class] .mat-raised-button.mat-accent .mat-ripple-element, .jupytangular[class] .mat-fab.mat-accent .mat-ripple-element, .jupytangular[class] .mat-mini-fab.mat-accent .mat-ripple-element {\n      background-color: rgba(255, 255, 255, 0.2); }\n    .jupytangular[class] .mat-raised-button.mat-warn .mat-ripple-element, .jupytangular[class] .mat-fab.mat-warn .mat-ripple-element, .jupytangular[class] .mat-mini-fab.mat-warn .mat-ripple-element {\n      background-color: rgba(255, 255, 255, 0.2); }\n  .jupytangular[class] .mat-button.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.1); }\n  .jupytangular[class] .mat-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.1); }\n  .jupytangular[class] .mat-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.1); }\n  .jupytangular[class] .mat-icon-button.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.2); }\n  .jupytangular[class] .mat-icon-button.mat-accent .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.2); }\n  .jupytangular[class] .mat-icon-button.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.2); }\n  .jupytangular[class] .mat-button-toggle {\n    color: rgba(0, 0, 0, 0.38); }\n    .jupytangular[class] .mat-button-toggle.cdk-focused .mat-button-toggle-focus-overlay {\n      background-color: rgba(0, 0, 0, 0.06); }\n  .jupytangular[class] .mat-button-toggle-checked {\n    background-color: #e0e0e0;\n    color: black; }\n  .jupytangular[class] .mat-button-toggle-disabled {\n    background-color: #eeeeee;\n    color: rgba(0, 0, 0, 0.38); }\n    .jupytangular[class] .mat-button-toggle-disabled.mat-button-toggle-checked {\n      background-color: #bdbdbd; }\n  .jupytangular[class] .mat-card {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-card-subtitle {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-checkbox-frame {\n    border-color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-checkbox-checkmark {\n    fill: #fafafa; }\n  .jupytangular[class] .mat-checkbox-checkmark-path {\n    stroke: #fafafa !important; }\n  .jupytangular[class] .mat-checkbox-mixedmark {\n    background-color: #fafafa; }\n  .jupytangular[class] .mat-checkbox-indeterminate.mat-primary .mat-checkbox-background, .jupytangular[class] .mat-checkbox-checked.mat-primary .mat-checkbox-background {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .jupytangular[class] .mat-checkbox-checked.mat-accent .mat-checkbox-background {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-checkbox-indeterminate.mat-warn .mat-checkbox-background, .jupytangular[class] .mat-checkbox-checked.mat-warn .mat-checkbox-background {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background, .jupytangular[class] .mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background {\n    background-color: #b0b0b0; }\n  .jupytangular[class] .mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame {\n    border-color: #b0b0b0; }\n  .jupytangular[class] .mat-checkbox-disabled .mat-checkbox-label {\n    color: #b0b0b0; }\n  .jupytangular[class] .mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.26); }\n  .jupytangular[class] .mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.26); }\n  .jupytangular[class] .mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.26); }\n  .jupytangular[class] .mat-chip:not(.mat-basic-chip) {\n    background-color: #e0e0e0;\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-chip.mat-chip-selected:not(.mat-basic-chip) {\n    background-color: #808080;\n    color: rgba(255, 255, 255, 0.87); }\n    .jupytangular[class] .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-primary {\n      background-color: #0099bb;\n      color: white; }\n    .jupytangular[class] .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-accent {\n      background-color: #ff9900;\n      color: white; }\n    .jupytangular[class] .mat-chip.mat-chip-selected:not(.mat-basic-chip).mat-warn {\n      background-color: #f44336;\n      color: white; }\n  .jupytangular[class] .mat-table {\n    background: white; }\n  .jupytangular[class] .mat-row, .jupytangular[class] .mat-header-row {\n    border-bottom-color: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-header-cell {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-cell {\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-datepicker-content {\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-calendar-arrow {\n    border-top-color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-calendar-next-button,\n  .jupytangular[class] .mat-calendar-previous-button {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-calendar-table-header {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-calendar-table-header-divider::after {\n    background: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-calendar-body-label {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-calendar-body-cell-content {\n    color: rgba(0, 0, 0, 0.87);\n    border-color: transparent; }\n    .mat-calendar-body-disabled > .jupytangular[class] .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n      color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] :not(.mat-calendar-body-disabled):hover > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected),\n  .jupytangular[class] .cdk-keyboard-focused .mat-calendar-body-active > .mat-calendar-body-cell-content:not(.mat-calendar-body-selected) {\n    background-color: rgba(0, 0, 0, 0.04); }\n  .jupytangular[class] .mat-calendar-body-selected {\n    background-color: #0099bb;\n    color: white; }\n  .jupytangular[class] .mat-calendar-body-disabled > .mat-calendar-body-selected {\n    background-color: rgba(0, 153, 187, 0.4); }\n  .jupytangular[class] .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n    border-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-calendar-body-today.mat-calendar-body-selected {\n    box-shadow: inset 0 0 0 1px white; }\n  .jupytangular[class] .mat-calendar-body-disabled > .mat-calendar-body-today:not(.mat-calendar-body-selected) {\n    border-color: rgba(0, 0, 0, 0.18); }\n  .jupytangular[class] .mat-dialog-container {\n    background: white;\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-expansion-panel {\n    background: white;\n    color: black; }\n  .jupytangular[class] .mat-action-row {\n    border-top-color: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-expansion-panel-header:focus,\n  .jupytangular[class] .mat-expansion-panel-header:hover {\n    background: rgba(0, 0, 0, 0.04); }\n  .jupytangular[class] .mat-expansion-panel-header-title {\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-expansion-panel-header-description {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-expansion-indicator::after {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-icon.mat-primary {\n    color: #0099bb; }\n  .jupytangular[class] .mat-icon.mat-accent {\n    color: #ff9900; }\n  .jupytangular[class] .mat-icon.mat-warn {\n    color: #f44336; }\n  .jupytangular[class] .mat-input-placeholder {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-focused .mat-input-placeholder {\n    color: #0099bb; }\n    .jupytangular[class] .mat-focused .mat-input-placeholder.mat-accent {\n      color: #ff9900; }\n    .jupytangular[class] .mat-focused .mat-input-placeholder.mat-warn {\n      color: #f44336; }\n  .jupytangular[class] .mat-input-element:disabled {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] input.mat-input-element:-webkit-autofill + .mat-input-placeholder .mat-placeholder-required,\n  .jupytangular[class] .mat-focused .mat-input-placeholder.mat-float .mat-placeholder-required {\n    color: #ff9900; }\n  .jupytangular[class] .mat-input-underline {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-input-ripple {\n    background-color: #0099bb; }\n    .jupytangular[class] .mat-input-ripple.mat-accent {\n      background-color: #ff9900; }\n    .jupytangular[class] .mat-input-ripple.mat-warn {\n      background-color: #f44336; }\n  .jupytangular[class] .mat-input-invalid .mat-input-placeholder {\n    color: #f44336; }\n    .jupytangular[class] .mat-input-invalid .mat-input-placeholder.mat-accent,\n    .jupytangular[class] .mat-input-invalid .mat-input-placeholder.mat-float .mat-placeholder-required {\n      color: #f44336; }\n  .jupytangular[class] .mat-input-invalid .mat-input-ripple {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-input-error {\n    color: #f44336; }\n  .jupytangular[class] .mat-list .mat-list-item, .jupytangular[class] .mat-nav-list .mat-list-item {\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-list .mat-subheader, .jupytangular[class] .mat-nav-list .mat-subheader {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-divider {\n    border-top-color: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-nav-list .mat-list-item {\n    outline: none; }\n    .jupytangular[class] .mat-nav-list .mat-list-item:hover, .jupytangular[class] .mat-nav-list .mat-list-item.mat-list-item-focus {\n      background: rgba(0, 0, 0, 0.04); }\n  .jupytangular[class] .mat-menu-content {\n    background: white; }\n  .jupytangular[class] .mat-menu-item {\n    background: transparent;\n    color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-menu-item[disabled] {\n      color: rgba(0, 0, 0, 0.38); }\n    .jupytangular[class] .mat-menu-item .mat-icon {\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: middle; }\n    .jupytangular[class] .mat-menu-item:hover:not([disabled]), .jupytangular[class] .mat-menu-item:focus:not([disabled]) {\n      background: rgba(0, 0, 0, 0.04); }\n  .jupytangular[class] .mat-paginator {\n    background: white; }\n  .jupytangular[class] .mat-paginator,\n  .jupytangular[class] .mat-paginator-page-size .mat-select-trigger {\n    color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-paginator-increment,\n  .jupytangular[class] .mat-paginator-decrement {\n    border-top: 2px solid rgba(0, 0, 0, 0.54);\n    border-right: 2px solid rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-icon-button[disabled] .mat-paginator-increment,\n  .jupytangular[class] .mat-icon-button[disabled] .mat-paginator-decrement {\n    border-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-progress-bar-background {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%230099bb%27%2F%3E%3C%2Fsvg%3E\"); }\n  .jupytangular[class] .mat-progress-bar-buffer {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-progress-bar-fill::after {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-progress-bar.mat-accent .mat-progress-bar-background {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ff9900%27%2F%3E%3C%2Fsvg%3E\"); }\n  .jupytangular[class] .mat-progress-bar.mat-accent .mat-progress-bar-buffer {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-progress-bar.mat-accent .mat-progress-bar-fill::after {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-progress-bar.mat-warn .mat-progress-bar-background {\n    background-image: url(\"data:image/svg+xml;charset=UTF-8,%3Csvg%20version%3D%271.1%27%20xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%20xmlns%3Axlink%3D%27http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%27%20x%3D%270px%27%20y%3D%270px%27%20enable-background%3D%27new%200%200%205%202%27%20xml%3Aspace%3D%27preserve%27%20viewBox%3D%270%200%205%202%27%20preserveAspectRatio%3D%27none%20slice%27%3E%3Ccircle%20cx%3D%271%27%20cy%3D%271%27%20r%3D%271%27%20fill%3D%27%23ffcdd2%27%2F%3E%3C%2Fsvg%3E\"); }\n  .jupytangular[class] .mat-progress-bar.mat-warn .mat-progress-bar-buffer {\n    background-color: #ffcdd2; }\n  .jupytangular[class] .mat-progress-bar.mat-warn .mat-progress-bar-fill::after {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-progress-spinner path, .jupytangular[class] .mat-spinner path {\n    stroke: #0099bb; }\n  .jupytangular[class] .mat-progress-spinner.mat-accent path, .jupytangular[class] .mat-spinner.mat-accent path {\n    stroke: #ff9900; }\n  .jupytangular[class] .mat-progress-spinner.mat-warn path, .jupytangular[class] .mat-spinner.mat-warn path {\n    stroke: #f44336; }\n  .jupytangular[class] .mat-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.54); }\n  .jupytangular[class] .mat-radio-disabled .mat-radio-outer-circle {\n    border-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-radio-disabled .mat-radio-ripple .mat-ripple-element, .jupytangular[class] .mat-radio-disabled .mat-radio-inner-circle {\n    background-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-radio-disabled .mat-radio-label-content {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #0099bb; }\n  .jupytangular[class] .mat-radio-button.mat-primary .mat-radio-inner-circle {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.26); }\n  .jupytangular[class] .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #ff9900; }\n  .jupytangular[class] .mat-radio-button.mat-accent .mat-radio-inner-circle {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.26); }\n  .jupytangular[class] .mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle {\n    border-color: #f44336; }\n  .jupytangular[class] .mat-radio-button.mat-warn .mat-radio-inner-circle {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.26); }\n  .jupytangular[class] .mat-select-trigger,\n  .jupytangular[class] .mat-select-arrow {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-select-underline {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-select-disabled .mat-select-value,\n  .jupytangular[class] .mat-select-arrow,\n  .jupytangular[class] .mat-select-trigger {\n    color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-select-content, .jupytangular[class] .mat-select-panel-done-animating {\n    background: white; }\n  .jupytangular[class] .mat-select-value {\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-trigger, .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-arrow {\n    color: #0099bb; }\n  .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-primary .mat-select-underline {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-trigger, .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-arrow {\n    color: #ff9900; }\n  .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-accent .mat-select-underline {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-trigger, .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-arrow,\n  .jupytangular[class] .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-trigger,\n  .jupytangular[class] .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-arrow {\n    color: #f44336; }\n  .jupytangular[class] .mat-select:focus:not(.mat-select-disabled).mat-warn .mat-select-underline,\n  .jupytangular[class] .mat-select:not(:focus).ng-invalid.ng-touched:not(.mat-select-disabled) .mat-select-underline {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-sidenav-container {\n    background-color: #fafafa;\n    color: rgba(0, 0, 0, 0.87); }\n  .jupytangular[class] .mat-sidenav {\n    background-color: white;\n    color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-sidenav.mat-sidenav-push {\n      background-color: white; }\n  .jupytangular[class] .mat-sidenav-backdrop.mat-sidenav-shown {\n    background-color: rgba(0, 0, 0, 0.6); }\n  .jupytangular[class] .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(255, 153, 0, 0.5); }\n  .jupytangular[class] .mat-slide-toggle:not(.mat-checked) .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.06); }\n  .jupytangular[class] .mat-slide-toggle .mat-ripple-element {\n    background-color: rgba(255, 153, 0, 0.12); }\n  .jupytangular[class] .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(0, 153, 187, 0.5); }\n  .jupytangular[class] .mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.06); }\n  .jupytangular[class] .mat-slide-toggle.mat-primary .mat-ripple-element {\n    background-color: rgba(0, 153, 187, 0.12); }\n  .jupytangular[class] .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar {\n    background-color: rgba(244, 67, 54, 0.5); }\n  .jupytangular[class] .mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element {\n    background-color: rgba(0, 0, 0, 0.06); }\n  .jupytangular[class] .mat-slide-toggle.mat-warn .mat-ripple-element {\n    background-color: rgba(244, 67, 54, 0.12); }\n  .jupytangular[class] .mat-disabled .mat-slide-toggle-thumb {\n    background-color: #bdbdbd; }\n  .jupytangular[class] .mat-disabled .mat-slide-toggle-bar {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .jupytangular[class] .mat-slide-toggle-thumb {\n    background-color: #fafafa; }\n  .jupytangular[class] .mat-slide-toggle-bar {\n    background-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-slider-track-background {\n    background-color: rgba(0, 0, 0, 0.26); }\n  .jupytangular[class] .mat-primary .mat-slider-track-fill,\n  .jupytangular[class] .mat-primary .mat-slider-thumb,\n  .jupytangular[class] .mat-primary .mat-slider-thumb-label {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-primary .mat-slider-thumb-label-text {\n    color: white; }\n  .jupytangular[class] .mat-accent .mat-slider-track-fill,\n  .jupytangular[class] .mat-accent .mat-slider-thumb,\n  .jupytangular[class] .mat-accent .mat-slider-thumb-label {\n    background-color: #ff9900; }\n  .jupytangular[class] .mat-accent .mat-slider-thumb-label-text {\n    color: white; }\n  .jupytangular[class] .mat-warn .mat-slider-track-fill,\n  .jupytangular[class] .mat-warn .mat-slider-thumb,\n  .jupytangular[class] .mat-warn .mat-slider-thumb-label {\n    background-color: #f44336; }\n  .jupytangular[class] .mat-warn .mat-slider-thumb-label-text {\n    color: white; }\n  .jupytangular[class] .mat-slider-focus-ring {\n    background-color: rgba(255, 153, 0, 0.2); }\n  .jupytangular[class] .mat-slider:hover .mat-slider-track-background,\n  .jupytangular[class] .cdk-focused .mat-slider-track-background {\n    background-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-slider-disabled .mat-slider-track-background,\n  .jupytangular[class] .mat-slider-disabled .mat-slider-track-fill,\n  .jupytangular[class] .mat-slider-disabled .mat-slider-thumb {\n    background-color: rgba(0, 0, 0, 0.26); }\n  .jupytangular[class] .mat-slider-disabled:hover .mat-slider-track-background {\n    background-color: rgba(0, 0, 0, 0.26); }\n  .jupytangular[class] .mat-slider-min-value .mat-slider-focus-ring {\n    background-color: rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,\n  .jupytangular[class] .mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label {\n    background-color: black; }\n  .jupytangular[class] .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,\n  .jupytangular[class] .mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label {\n    background-color: rgba(0, 0, 0, 0.26); }\n  .jupytangular[class] .mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb {\n    border-color: rgba(0, 0, 0, 0.26);\n    background-color: transparent; }\n  .jupytangular[class] .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb, .jupytangular[class] .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb {\n    border-color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb, .jupytangular[class] .mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb {\n    border-color: rgba(0, 0, 0, 0.26); }\n  .jupytangular[class] .mat-slider-has-ticks .mat-slider-wrapper::after {\n    border-color: rgba(0, 0, 0, 0.7); }\n  .jupytangular[class] .mat-slider-horizontal .mat-slider-ticks {\n    background-image: repeating-linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent);\n    background-image: -moz-repeating-linear-gradient(0.0001deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n  .jupytangular[class] .mat-slider-vertical .mat-slider-ticks {\n    background-image: repeating-linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) 2px, transparent 0, transparent); }\n  .jupytangular[class] .mat-tab-nav-bar,\n  .jupytangular[class] .mat-tab-header {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n  .jupytangular[class] .mat-tab-group-inverted-header .mat-tab-nav-bar,\n  .jupytangular[class] .mat-tab-group-inverted-header .mat-tab-header {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    border-bottom: none; }\n  .jupytangular[class] .mat-tab-label:focus {\n    background-color: rgba(0, 153, 187, 0.3); }\n  .jupytangular[class] .mat-ink-bar {\n    background-color: #0099bb; }\n  .jupytangular[class] .mat-tab-label, .jupytangular[class] .mat-tab-link {\n    color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-tab-label.mat-tab-disabled, .jupytangular[class] .mat-tab-link.mat-tab-disabled {\n      color: rgba(0, 0, 0, 0.38); }\n  .jupytangular[class] .mat-toolbar {\n    background: whitesmoke;\n    color: rgba(0, 0, 0, 0.87); }\n    .jupytangular[class] .mat-toolbar.mat-primary {\n      background: #0099bb;\n      color: white; }\n    .jupytangular[class] .mat-toolbar.mat-accent {\n      background: #ff9900;\n      color: white; }\n    .jupytangular[class] .mat-toolbar.mat-warn {\n      background: #f44336;\n      color: white; }\n  .jupytangular[class] .mat-tooltip {\n    background: rgba(97, 97, 97, 0.9); }\n  .jupytangular[class] .mat-h1, .jupytangular[class] .mat-headline, .jupytangular[class] .mat-typography h1 {\n    font: 400 24px/48px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h2, .jupytangular[class] .mat-title, .jupytangular[class] .mat-typography h2 {\n    font: 500 20px/32px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h3, .jupytangular[class] .mat-subheading-2, .jupytangular[class] .mat-typography h3 {\n    font: 400 16px/28px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h4, .jupytangular[class] .mat-subheading-1, .jupytangular[class] .mat-typography h4 {\n    font: 400 15px/24px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 16px; }\n  .jupytangular[class] .mat-h5, .jupytangular[class] .mat-typography h5 {\n    font-size: 13.28px;\n    font-weight: 400;\n    font-family: \"Poppins\", Arial, sans-serif;\n    line-height: 24px;\n    margin: 0 0 12px; }\n  .jupytangular[class] .mat-h6, .jupytangular[class] .mat-typography h6 {\n    font-size: 10.72px;\n    font-weight: 400;\n    font-family: \"Poppins\", Arial, sans-serif;\n    line-height: 24px;\n    margin: 0 0 12px; }\n  .jupytangular[class] .mat-body-strong, .jupytangular[class] .mat-body-2 {\n    font: 500 14px/24px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-body, .jupytangular[class] .mat-body-1, .jupytangular[class] .mat-typography {\n    font: 400 16px/24px \"Poppins\", Arial, sans-serif; }\n    .jupytangular[class] .mat-body p, .jupytangular[class] .mat-body-1 p, .jupytangular[class] .mat-typography p {\n      margin: 0 0 12px; }\n  .jupytangular[class] .mat-small, .jupytangular[class] .mat-caption {\n    font: 400 12px/20px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-display-4, .jupytangular[class] .mat-typography .mat-display-4 {\n    font: 300 112px/112px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 56px;\n    letter-spacing: -0.05em; }\n  .jupytangular[class] .mat-display-3, .jupytangular[class] .mat-typography .mat-display-3 {\n    font: 400 56px/56px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 64px;\n    letter-spacing: -0.02em; }\n  .jupytangular[class] .mat-display-2, .jupytangular[class] .mat-typography .mat-display-2 {\n    font: 400 45px/48px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 64px;\n    letter-spacing: -0.005em; }\n  .jupytangular[class] .mat-display-1, .jupytangular[class] .mat-typography .mat-display-1 {\n    font: 400 34px/40px \"Poppins\", Arial, sans-serif;\n    margin: 0 0 64px; }\n  .jupytangular[class] .mat-button, .jupytangular[class] .mat-raised-button, .jupytangular[class] .mat-icon-button {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-button-toggle {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-card {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-card-title {\n    font-size: 24px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-card-subtitle,\n  .jupytangular[class] .mat-card-content,\n  .jupytangular[class] .mat-card-header .mat-card-title {\n    font-size: 16px; }\n  .jupytangular[class] .mat-checkbox {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-checkbox-layout .mat-checkbox-label {\n    line-height: 24px; }\n  .jupytangular[class] .mat-chip:not(.mat-basic-chip) {\n    font-size: 13px;\n    line-height: 16px; }\n  .jupytangular[class] .mat-header-cell {\n    font-size: 12px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-cell {\n    font-size: 16px; }\n  .jupytangular[class] .mat-calendar {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-calendar-body {\n    font-size: 13px; }\n  .jupytangular[class] .mat-calendar-body-label,\n  .jupytangular[class] .mat-calendar-period-button {\n    font-size: 16px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-calendar-table-header th {\n    font-size: 11px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-dialog-title {\n    font: 500 20px/32px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-grid-tile-header,\n  .jupytangular[class] .mat-grid-tile-footer {\n    font-size: 16px; }\n    .jupytangular[class] .mat-grid-tile-header .mat-line,\n    .jupytangular[class] .mat-grid-tile-footer .mat-line {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      box-sizing: border-box; }\n      .jupytangular[class] .mat-grid-tile-header .mat-line:nth-child(n+2),\n      .jupytangular[class] .mat-grid-tile-footer .mat-line:nth-child(n+2) {\n        font-size: 12px; }\n  .jupytangular[class] .mat-input-container {\n    font: 400 inherit/1.125 \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-input-wrapper {\n    padding-bottom: 1.29688em; }\n  .jupytangular[class] .mat-input-prefix .mat-icon,\n  .jupytangular[class] .mat-input-prefix .mat-datepicker-toggle,\n  .jupytangular[class] .mat-input-suffix .mat-icon,\n  .jupytangular[class] .mat-input-suffix .mat-datepicker-toggle {\n    font-size: 150%; }\n  .jupytangular[class] .mat-input-prefix .mat-icon-button,\n  .jupytangular[class] .mat-input-suffix .mat-icon-button {\n    height: 1.5em;\n    width: 1.5em; }\n    .jupytangular[class] .mat-input-prefix .mat-icon-button .mat-icon,\n    .jupytangular[class] .mat-input-suffix .mat-icon-button .mat-icon {\n      line-height: 1.5; }\n  .jupytangular[class] .mat-input-infix {\n    padding: 0.4375em 0;\n    border-top: 0.84375em solid transparent; }\n  .jupytangular[class] .mat-input-element:-webkit-autofill + .mat-input-placeholder-wrapper .mat-float {\n    transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n    -ms-transform: translateY(-1.28125em) scale(0.75);\n    width: 133.33333%; }\n  .jupytangular[class] .mat-input-placeholder-wrapper {\n    top: -0.84375em;\n    padding-top: 0.84375em; }\n  .jupytangular[class] .mat-input-placeholder {\n    top: 1.28125em; }\n    .jupytangular[class] .mat-input-placeholder.mat-float:not(.mat-empty), .mat-focused .jupytangular[class] .mat-input-placeholder.mat-float {\n      transform: translateY(-1.28125em) scale(0.75) perspective(100px) translateZ(0.001px);\n      -ms-transform: translateY(-1.28125em) scale(0.75);\n      width: 133.33333%; }\n  .jupytangular[class] .mat-input-underline {\n    bottom: 1.29688em; }\n  .jupytangular[class] .mat-input-subscript-wrapper {\n    font-size: 75%;\n    margin-top: 0.60417em;\n    top: calc(100% - 1.72917em); }\n  .jupytangular[class] .mat-menu-item {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px; }\n  .jupytangular[class] .mat-paginator {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 12px; }\n  .jupytangular[class] .mat-paginator-page-size .mat-select-trigger {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 12px; }\n  .jupytangular[class] .mat-radio-button {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-select {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-select-trigger {\n    font-size: 16px; }\n  .jupytangular[class] .mat-slide-toggle-content {\n    font: 400 16px/24px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-slider-thumb-label-text {\n    font-size: 12px;\n    font-weight: 500; }\n  .jupytangular[class] .mat-tab-group {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-tab-label, .jupytangular[class] .mat-tab-link {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px;\n    font-weight: 400; }\n  .jupytangular[class] .mat-toolbar,\n  .jupytangular[class] .mat-toolbar h1,\n  .jupytangular[class] .mat-toolbar h2,\n  .jupytangular[class] .mat-toolbar h3,\n  .jupytangular[class] .mat-toolbar h4,\n  .jupytangular[class] .mat-toolbar h5,\n  .jupytangular[class] .mat-toolbar h6 {\n    font: 500 20px/32px \"Poppins\", Arial, sans-serif;\n    margin: 0; }\n  .jupytangular[class] .mat-tooltip {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 10px;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  .jupytangular[class] .mat-list-item {\n    font-family: \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-list .mat-list-item, .jupytangular[class] .mat-nav-list .mat-list-item {\n    font-size: 16px; }\n    .jupytangular[class] .mat-list .mat-list-item .mat-line, .jupytangular[class] .mat-nav-list .mat-list-item .mat-line {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      box-sizing: border-box; }\n      .jupytangular[class] .mat-list .mat-list-item .mat-line:nth-child(n+2), .jupytangular[class] .mat-nav-list .mat-list-item .mat-line:nth-child(n+2) {\n        font-size: 16px; }\n  .jupytangular[class] .mat-list .mat-subheader, .jupytangular[class] .mat-nav-list .mat-subheader {\n    font: 500 14px/24px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-list[dense] .mat-list-item, .jupytangular[class] .mat-nav-list[dense] .mat-list-item {\n    font-size: 12px; }\n    .jupytangular[class] .mat-list[dense] .mat-list-item .mat-line, .jupytangular[class] .mat-nav-list[dense] .mat-list-item .mat-line {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      display: block;\n      box-sizing: border-box; }\n      .jupytangular[class] .mat-list[dense] .mat-list-item .mat-line:nth-child(n+2), .jupytangular[class] .mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2) {\n        font-size: 12px; }\n  .jupytangular[class] .mat-list[dense] .mat-subheader, .jupytangular[class] .mat-nav-list[dense] .mat-subheader {\n    font: 500 12px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-option {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px; }\n  .jupytangular[class] .mat-optgroup-label {\n    font: 500 14px/24px \"Poppins\", Arial, sans-serif; }\n  .jupytangular[class] .mat-simple-snackbar {\n    font-family: \"Poppins\", Arial, sans-serif;\n    font-size: 16px; }\n  .jupytangular[class] .mat-simple-snackbar-action {\n    line-height: 1;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: 400; }\n  .jupytangular[class] .collapsed .collapse-arrow {\n    transform: rotate(-90deg); }\n  .jupytangular[class] .collapse-arrow {\n    width: 0;\n    height: 0;\n    border-left: 16px solid transparent;\n    border-right: 16px solid transparent;\n    border-top: 20px solid #0099BB;\n    display: inline-block;\n    margin-left: 10px;\n    position: absolute;\n    left: 2px;\n    top: 50%;\n    margin-top: -10px;\n    transform: rotate(0);\n    transition: transform ease-in-out .5s; }\n  .jupytangular[class] .alert.alert-danger {\n    display: block;\n    padding: 15px 0;\n    color: #DD0044; }\n  .jupytangular[class] .alert.alert-danger:before {\n    content: \"\\A0\"; }\n  .jupytangular[class], .jupytangular[class] md-card, .jupytangular[class] .mat-card, .jupytangular[class] md-card.mat-card {\n    color: inherit;\n    font-family: inherit;\n    box-shadow: none !important; }\n  .jupytangular[class] .mat-sidenav-container {\n    background: #fff;\n    color: inherit; }\n  .jupytangular[class] .mat-card-subtitle {\n    color: inherit;\n    font-size: 18px; }\n  .jupytangular[class] * {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .jupytangular[class] a, .jupytangular[class] .mat-raised-button {\n    color: #444444; }\n  .jupytangular[class] a, .jupytangular[class] .mat-raised-button, .jupytangular[class] .mat-button, .jupytangular[class] .mat-raised-button.mat-primary,\n  .jupytangular[class] a.mat-raised-button {\n    text-decoration: none;\n    outline: none;\n    border-color: #0099BB;\n    min-width: 0; }\n  .jupytangular[class] .mat-raised-button .mat-ripple {\n    border-radius: 25px;\n    font-weight: 700;\n    font-size: inherit; }\n  .jupytangular[class] .mat-raised-button {\n    border-radius: 25px;\n    border: 2px solid #CCCCCC;\n    padding: 2px 35px;\n    margin-top: 15px;\n    margin-bottom: 15px;\n    box-shadow: none !important; }\n  .jupytangular[class] .mat-button, .jupytangular[class] .mat-card {\n    border-radius: 0;\n    box-shadow: none !important; }\n  .jupytangular[class] .mat-toolbar {\n    padding-top: 10px;\n    padding-bottom: 10px; }\n  .jupytangular[class] .contain {\n    width: 100%;\n    margin: 0 auto;\n    display: block;\n    max-width: 1000px; }\n  .jupytangular[class] fieldset {\n    border: none; }\n  .jupytangular[class] .mat-input-infix {\n    width: 100%; }\n  .jupytangular[class] md-select, .jupytangular[class] .mat-input-wrapper {\n    width: 100%; }\n  .jupytangular[class] md-select, .jupytangular[class] .mat-input-container {\n    padding: 1px;\n    text-align: left; }\n  .jupytangular[class] .tricky-select .mat-input-underline {\n    display: none; }\n  .jupytangular[class] *, .jupytangular[class] *:before, .jupytangular[class] *:after {\n    box-sizing: border-box;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .jupytangular[class] img, .jupytangular[class] video, .jupytangular[class] canvas, .jupytangular[class] svg {\n    max-width: 100%; }\n  .jupytangular[class] small {\n    font-weight: 400; }\n  .jupytangular[class] h2 {\n    font-size: 24px;\n    font-weight: 400; }\n  .jupytangular[class] input, .jupytangular[class] button {\n    color: #444444; }\n", ""]);

// exports


/***/ }),

/***/ 272:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(590);

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n    <a md-button [routerLink]=\"[getNextRoute()]\">👿</a>\n    <router-outlet></router-outlet>\n</div>\n";

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {


        var result = __webpack_require__(275);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(undefined);
// imports


// module
exports.push([module.i, "/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n/**\n * Applies styles for users in high contrast mode. Note that this only applies\n * to Microsoft browsers. Chrome can be included by checking for the `html[hc]`\n * attribute, however Chrome handles high contrast differently.\n */\n/* Theme for the ripple elements.*/\n/** The mixins below are shared between md-menu and md-select */\n/**\n * This mixin adds the correct panel transform styles based\n * on the direction that the menu panel opens.\n */\n/* stylelint-disable material/no-prefixes */\n/* stylelint-enable */\n/**\n * This mixin contains shared option styles between the select and\n * autocomplete components.\n */\n:host .app-wrapper {\n  color: #444444;\n  font-size: 18px;\n  text-rendering: geometricPrecision;\n  font-family: 'Poppins', Arial, sans-serif;\n  background: white;\n  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.2);\n  display: block;\n  transition: ease-in-out .15s;\n  overflow: hidden;\n  height: 100%; }\n  :host .app-wrapper a {\n    position: absolute;\n    top: 0;\n    right: 0;\n    padding: 5px;\n    font-size: 30px;\n    line-height: 30px;\n    z-index: 100; }\n\n:host.jupytangular {\n  position: fixed;\n  right: 10px;\n  top: 0;\n  left: auto;\n  bottom: auto;\n  z-index: 99999999;\n  opacity: .2;\n  transition: ease-in-out .15s;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  max-height: 40px;\n  max-width: 40px; }\n  :host.jupytangular.expanded {\n    opacity: 1;\n    max-height: 100%;\n    max-width: 100%; }\n  :host.jupytangular:hover, :host.jupytangular:focus, :host.jupytangular:active {\n    opacity: 1; }\n", ""]);

// exports


/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(734);

/***/ }),

/***/ 277:
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

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable = __webpack_require__(22).Observable;
var automock = __webpack_require__(50);
var client = __webpack_require__(332);

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
                            console.log('Received ' + n + ' ( ' + JSON.stringify(args2[0]).substr(0, 200) + ' ) ');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__(15);
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

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(781);

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(159);

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 354:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);





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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_sass_layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_keymaster__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_keymaster___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_keymaster__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__);









var AppComponent = (function () {
    function AppComponent(config, translate, meta, router, ref) {
        this.config = config;
        this.translate = translate;
        this.meta = meta;
        this.router = router;
        this.ref = ref;
        this.expanded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routerSub = this.router.events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_7__angular_router__["NavigationEnd"]; })
            .subscribe(function (e) {
            _this.expanded = true;
            _this.ref.detectChanges();
        });
        this.title = 'ng-seed (universal) works!';
        __WEBPACK_IMPORTED_MODULE_6_keymaster__('⌘+f, alt+f', function () {
            _this.router.navigate(['/search']);
        });
        __WEBPACK_IMPORTED_MODULE_6_keymaster__('⌘+r, alt+r', function () {
            _this.router.navigate(['/recording']);
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (typeof this.routerSub !== 'undefined') {
            this.routerSub.unsubscribe();
        }
    };
    AppComponent.prototype.getNextRoute = function () {
        var paths = this.router.config[0].children.map(function (r) { return r.path; });
        var i = paths.indexOf(this.router.url.split('/')[1]);
        return paths[i === paths.length - 1 ? 0 : (i + 1)];
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
        changeDetection: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectionStrategy"].OnPush,
        template: __webpack_require__(273),
        styles: [__webpack_require__(274)]
    }),
    __WEBPACK_IMPORTED_MODULE_0_tslib__["__metadata"]("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["ConfigService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngx_config_core__["ConfigService"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["TranslateService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__["MetaService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngx_meta_core__["MetaService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_router__["Router"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(0))(10);

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _ = __webpack_require__(279);
_.mixin(__webpack_require__(280).exports());

var path = __webpack_require__(330);
var util = __webpack_require__(331);

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