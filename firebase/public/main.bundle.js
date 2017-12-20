webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-material/app-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material_grid_list__ = __webpack_require__("../../../material/esm5/grid-list.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__ = __webpack_require__("../../../material/esm5/dialog.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__ = __webpack_require__("../../../material/esm5/expansion.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__ = __webpack_require__("../../../material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__ = __webpack_require__("../../../material/esm5/snack-bar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__ = __webpack_require__("../../../material/esm5/toolbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__ = __webpack_require__("../../../material/esm5/icon.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material_chips__ = __webpack_require__("../../../material/esm5/chips.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_tabs__ = __webpack_require__("../../../material/esm5/tabs.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__ = __webpack_require__("../../../material/esm5/menu.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_material_button_toggle__ = __webpack_require__("../../../material/esm5/button-toggle.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_material_table__ = __webpack_require__("../../../material/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_material_slide_toggle__ = __webpack_require__("../../../material/esm5/slide-toggle.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppMaterialModule = (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material_expansion__["a" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_4__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["g" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_snack_bar__["b" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material_toolbar__["a" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_dialog__["c" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material_grid_list__["a" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material_chips__["a" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material_icon__["a" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_tabs__["a" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material_menu__["a" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_material_button_toggle__["a" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_material_table__["b" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_material_slide_toggle__["a" /* MatSlideToggleModule */],
            ],
            declarations: []
        })
    ], AppMaterialModule);
    return AppMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setting_setting_component__ = __webpack_require__("../../../../../src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__summary_summary_component__ = __webpack_require__("../../../../../src/app/summary/summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'setting/:roomId', component: __WEBPACK_IMPORTED_MODULE_2__setting_setting_component__["a" /* SettingComponent */] },
    { path: 'game/:roomId', component: __WEBPACK_IMPORTED_MODULE_3__game_game_component__["a" /* GameComponent */] },
    { path: 'summary/:roomId', component: __WEBPACK_IMPORTED_MODULE_4__summary_summary_component__["a" /* SummaryComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\r\n  font-family: 'Roboto', sans-serif;\r\n}\r\n\r\n.header {\r\n  -webkit-box-flex: 1;\r\n      -ms-flex: 1 1 auto;\r\n          flex: 1 1 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"us.getUser() | async; let user; else showLogin\">\n  <mat-toolbar>\n    <a href=\"/\"><mat-icon>home</mat-icon>\n    </a>\n    <div class=\"header\">Hello {{ user.displayName }}</div>\n    <div>\n      <button mat-mini-fab (click)=\"us.logout()\"><mat-icon>close</mat-icon></button>\n    </div>\n  </mat-toolbar>\n  <div *ngIf=\"currentGameItem; then showGame else selectGame\">\n  </div>\n</div>\n<ng-template #showLogin>\n  <p>Please login.</p>\n  <button mat-raised-button (click)=\"us.login()\">Login with Google</button>\n  <button mat-raised-button (click)=\"us.loginFB()\">Login with Facebook</button>\n</ng-template>\n\n<ng-template #selectGame>\n  <mat-card>\n\n    <button mat-raised-button *ngFor=\"let item of gs.getRooms() | async\" (click)='pickGame(item)'>{{item.name}}</button>\n    <button mat-mini-fab (click)='createGame()'><mat-icon>add</mat-icon>\n    </button>\n\n  </mat-card>\n</ng-template>\n\n<ng-template #showGame>\n\n  <button mat-raised-button routerLink=\"/setting/{{currentGameItem.id}}\"> Settings </button>\n  <button mat-raised-button  routerLink=\"/game/{{currentGameItem.id}}\"> Game </button>\n  <button mat-raised-button  routerLink=\"/summary/{{currentGameItem.id}}\"> Summary </button>\n  <mat-card>\n    <router-outlet></router-outlet>\n  </mat-card>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_last__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/last.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__get_room_name_get_room_name_component__ = __webpack_require__("../../../../../src/app/get-room-name/get-room-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AppComponent = (function () {
    function AppComponent(gs, us, snackBar, dialog) {
        var _this = this;
        this.gs = gs;
        this.us = us;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.gs.currentItem.subscribe(function (x) { return _this.currentGameItem = x; });
    }
    AppComponent.prototype.openSnackBar = function (message) {
        console.log(message);
        this.snackBar.open(message, 'OK', {
            duration: 2000,
        });
    };
    AppComponent.prototype.pickGame = function (item) {
        this.gs.enterRoom(item);
    };
    AppComponent.prototype.updateGame = function () {
        this.gs.updateGameItem(this.currentGameItem);
    };
    AppComponent.prototype.exitRoom = function () {
        this.gs.exitRoom();
    };
    AppComponent.prototype.createGame = function () {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_6__get_room_name_get_room_name_component__["a" /* GetRoomNameComponent */], {
            data: {
                roomName: ''
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.gs.addRoom(result);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
            providers: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_8__user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatSnackBar */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatDialog */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_material_app_material_module__ = __webpack_require__("../../../../../src/app/app-material/app-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__get_room_name_get_room_name_component__ = __webpack_require__("../../../../../src/app/get-room-name/get-room-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__setting_setting_component__ = __webpack_require__("../../../../../src/app/setting/setting.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__summary_summary_component__ = __webpack_require__("../../../../../src/app/summary/summary.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].firebase, 'my-app-name'),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_material_app_material_module__["a" /* AppMaterialModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_11__get_room_name_get_room_name_component__["a" /* GetRoomNameComponent */], __WEBPACK_IMPORTED_MODULE_12__setting_setting_component__["a" /* SettingComponent */], __WEBPACK_IMPORTED_MODULE_13__game_game_component__["a" /* GameComponent */], __WEBPACK_IMPORTED_MODULE_16__summary_summary_component__["a" /* SummaryComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__get_room_name_get_room_name_component__["a" /* GetRoomNameComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_15__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__game_service__["a" /* GameService */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/game.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/first.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__("../../../../angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GameService = (function () {
    function GameService(db, us) {
        this.db = db;
        this.us = us;
        this.currentGameItem = null;
        this.currentItem = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](0);
        this.itemsCollection = db.collection('games');
        this.items = this.itemsCollection.valueChanges();
    }
    GameService.prototype.getCurrentRoom = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(this.currentGameItem);
    };
    GameService.prototype.exitRoom = function () {
        this.currentGameItem = null;
        this.currentItem.next(null);
    };
    GameService.prototype.getRooms = function () {
        return this.items;
    };
    GameService.prototype.updateGame = function () {
        this.itemsCollection.doc(this.currentGameItem.id).update(this.currentGameItem, { merge: true });
    };
    GameService.prototype.updateGameItem = function (obj) {
        this.currentGameItem = obj;
        this.updateGame();
    };
    GameService.prototype.addRoom = function (roomName) {
        this.itemsCollection.add({
            name: roomName
        });
        this.updateGame();
        this.itemsCollection = null;
    };
    GameService.prototype.removeUser = function (user) {
        this.currentGameItem.players = this.currentGameItem.players.filter(function (u) { return u !== user; });
        this.updateGame();
    };
    GameService.prototype.fillPlayers = function (NoOfPlayer) {
        var l = this.currentGameItem.players.length;
        ;
        for (var i = l; i < NoOfPlayer; i++) {
            var uid = __WEBPACK_IMPORTED_MODULE_6_lodash__["uniqueId"]();
            this.currentGameItem.players.push({
                id: 'dummyUser' + uid,
                name: 'Player ' + uid
            });
        }
        this.updateGame();
    };
    GameService.prototype.enterRoom = function (item) {
        var _this = this;
        var currentGameDoc;
        if (item.id) {
            currentGameDoc = this.db.collection('games', function (ref) { return ref.where('id', '==', item.id); });
        }
        else {
            currentGameDoc = this.db.collection('games', function (ref) { return ref.where('name', '==', item.name); });
        }
        currentGameDoc.snapshotChanges().map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            });
        })
            .first()
            .subscribe(function (x) {
            _this.currentGameItem = x[0];
            if (_this.currentGameItem) {
                if (!_this.currentGameItem.players) {
                    _this.currentGameItem.players = [];
                }
                _this.us.getUser().first().subscribe(function (x) {
                    var existingUser = _this.currentGameItem.players.filter(function (u) { return u.id == x.uid; }).length > 0;
                    if (!existingUser) {
                        if (_this.currentGameItem.players.length > 3) {
                            _this.currentGameItem = null;
                            //this.openSnackBar('room full');
                            return;
                        }
                        _this.currentGameItem.players.push({
                            name: x.displayName,
                            id: x.uid
                        });
                        _this.updateGame();
                    }
                });
            }
            _this.currentItem.next(_this.currentGameItem);
        });
    };
    GameService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["a" /* AngularFirestore */],
            __WEBPACK_IMPORTED_MODULE_7__user_service__["a" /* UserService */]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mat-grid-tile {\r\n  vertical-align: bottom;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "\n<mat-slide-toggle [(ngModel)]=\"game.self\" (click)=\"game.loser=null\">Self</mat-slide-toggle>\n<p>\n\n<mat-button-toggle-group #fan=\"matButtonToggleGroup\" [(ngModel)]=\"game.fan\">\n    <mat-button-toggle value=\"{{i}}\" *ngFor=\"let i of getArray(10)\"\n    [disabled]=\"i < this.currentGameItem.settings.startAt\"\n    >\n      {{i}}\n    </mat-button-toggle>\n</mat-button-toggle-group>\n\n<mat-grid-list cols=\"2\" rowHeight=\"30px\">\n  <mat-grid-tile>Winner</mat-grid-tile>\n  <mat-grid-tile>Loser</mat-grid-tile>\n  <mat-grid-tile rowspan=\"6\">\n    <mat-button-toggle-group #winner=\"matButtonToggleGroup\" [(ngModel)]=\"game.winner\" vertical>\n        <mat-button-toggle value=\"{{i.id}}\" *ngFor=\"let i of getUsers()\">\n          {{i.name}}\n        </mat-button-toggle>\n    </mat-button-toggle-group>\n  </mat-grid-tile>\n  <mat-grid-tile  rowspan=\"6\">\n    <mat-button-toggle-group #loser=\"matButtonToggleGroup\" [(ngModel)]=\"game.loser\" vertical>\n        <mat-button-toggle value=\"{{i.id}}\" *ngFor=\"let i of getUsers()\"\n          [disabled]=\"i.id == game.winner || game.self\">\n          {{i.name}}\n        </mat-button-toggle>\n    </mat-button-toggle-group>\n  </mat-grid-tile>\n</mat-grid-list>\n\n<button mat-raised-button color=\"primary\" (click)=\"addGame()\" [disabled]=\"!canSave()\"><i class=\"material-icons\">add</i></button>\n"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Add this

var GameComponent = (function () {
    function GameComponent(route, gs) {
        this.route = route;
        this.gs = gs;
        this.game = {
            fan: 0,
            winner: '',
            loser: '',
            self: false,
            id: ''
        };
    }
    GameComponent.prototype.getArray = function (num) {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Array(num).map((x,i) => i + 1));
    };
    GameComponent.prototype.addGame = function () {
        var _this = this;
        var base; // : number = this.currentGameItem.settings.marks.split(',')[this.game.fan - 1];
        var result = [];
        var arr = this.currentGameItem.settings.marks.split(',');
        base = arr[this.game.fan - 1];
        if (this.game.self) {
            result.push({
                id: this.game.winner,
                amt: base / 2 * 3
            });
            this.currentGameItem.players.filter(function (x) { return x.id != _this.game.winner; }).map(function (x) {
                result.push({
                    id: x.id,
                    amt: -base / 2
                });
            });
        }
        else {
            result.push({
                id: this.game.winner,
                amt: base * 1
            });
            result.push({
                id: this.game.loser,
                amt: -base
            });
        }
        this.game.id = this.currentGameItem.games.length;
        var gameResult = __assign({}, this.game, { result: result });
        this.currentGameItem.games.push(gameResult);
        this.gs.updateGameItem(this.currentGameItem);
        this.game = {
            fan: 0,
            winner: '',
            loser: '',
            self: false,
            id: ''
        };
        //console.log(gameResult);
    };
    GameComponent.prototype.canSave = function () {
        console.log(this.game);
        return this.game.winner && this.game.fan && (this.game.self == true || this.game.loser);
    };
    GameComponent.prototype.getUsers = function () {
        return this.currentGameItem.players;
    };
    GameComponent.prototype.ngOnInit = function () {
        this.getDetail();
    };
    GameComponent.prototype.getDetail = function () {
        var _this = this;
        this.gs.currentItem.subscribe(function (x) {
            _this.currentGameItem = x;
            if (_this.currentGameItem && !_this.currentGameItem.games) {
                _this.currentGameItem.games = [];
                _this.gs.updateGameItem(_this.currentGameItem);
            }
        });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/get-room-name/get-room-name.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/get-room-name/get-room-name.component.html":
/***/ (function(module, exports) {

module.exports = "<body>\n<mat-form-field>\n  <input matInput [(ngModel)]=\"data.roomName\" placeholder=\"Room Name\">\n</mat-form-field>\n<div mat-dialog-actions flex>\n  <button mat-mini-fab [mat-dialog-close]=\"data.roomName\" tabindex=\"2\">OK</button>\n</div>\n</body>\n"

/***/ }),

/***/ "../../../../../src/app/get-room-name/get-room-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetRoomNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var GetRoomNameComponent = (function () {
    function GetRoomNameComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    GetRoomNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-get-room-name',
            template: __webpack_require__("../../../../../src/app/get-room-name/get-room-name.component.html"),
            styles: [__webpack_require__("../../../../../src/app/get-room-name/get-room-name.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], GetRoomNameComponent);
    return GetRoomNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/setting/setting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-form-field {\r\n  width: 80%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"currentGameItem\">\n<mat-form-field>\n  <mat-chip-list [(ngModel)]=\"selectedUser\"  #chipList1>\n    <mat-chip *ngFor=\"let user of currentGameItem.players\" [removable]=\"true\" (remove)=\"removeUser(user)\">\n      {{user.name}}<mat-icon matChipRemove>cancel</mat-icon>\n    </mat-chip>\n  </mat-chip-list>\n</mat-form-field>\n\n<button mat-mini-fab (click)=\"fillPlayers()\"><mat-icon>person_add</mat-icon></button>\n\n<mat-accordion >\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        General\n      </mat-panel-title>\n      <mat-panel-description>\n\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-form-field>\n      <input matInput placeholder=\"Game Name\" [(ngModel)]=\"currentGameItem.name\">\n    </mat-form-field>\n  </mat-expansion-panel>\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Game Settings\n      </mat-panel-title>\n      <mat-panel-description>\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n    <mat-grid-list cols=\"5\" rowHeight=\"2:1\" *ngIf=\"currentGameItem\">\n        <mat-form-field>\n          <input matInput placeholder=\"Marks\" [(ngModel)]=\"currentGameItem.settings.marks\">\n        </mat-form-field>\n        <mat-form-field>\n          <input matInput placeholder=\"start At\" [(ngModel)]=\"currentGameItem.settings.startAt\">\n        </mat-form-field>\n        <mat-form-field *ngFor=\"let user of currentGameItem.players\">\n          <input matInput placeholder=\"Player Name\" [(ngModel)]=\"user.name\">\n        </mat-form-field>\n    </mat-grid-list>\n  </mat-expansion-panel>\n\n</mat-accordion>\n<br>\n<button mat-raised-button  color=\"primary\" (click)=\"update()\"><mat-icon>save</mat-icon></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/setting/setting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Add this

var SettingComponent = (function () {
    function SettingComponent(gs, route) {
        this.gs = gs;
        this.route = route;
        this.items = [];
        //console.log(gs.itemsCollection)
    }
    SettingComponent.prototype.getKeys = function () {
        return Object.keys(this.currentGameItem.settings.marks);
    };
    SettingComponent.prototype.ngOnInit = function () {
        this.getDetail();
    };
    SettingComponent.prototype.update = function () {
        this.gs.updateGameItem(this.currentGameItem);
    };
    SettingComponent.prototype.fillPlayers = function () {
        this.gs.fillPlayers(4);
    };
    SettingComponent.prototype.changeUser = function (user) {
        console.log(user);
    };
    SettingComponent.prototype.removeUser = function (user) {
        this.gs.removeUser(user);
    };
    SettingComponent.prototype.getDetail = function () {
        var _this = this;
        //const id = this.route.snapshot.paramMap.get('roomId');
        //this.gs.enterRoom({id: id});
        this.gs.currentItem.subscribe(function (x) {
            _this.currentGameItem = x;
            console.log(_this.currentGameItem);
            if (_this.currentGameItem && !_this.currentGameItem.settings) {
                _this.currentGameItem.settings = {
                    'marks': "0,0,4,8,16,32,64,128,192,256",
                    'startAt': 3
                };
                _this.gs.updateGameItem(_this.currentGameItem);
            }
        });
    };
    SettingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-setting',
            template: __webpack_require__("../../../../../src/app/setting/setting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/setting/setting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/summary/summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "mat-grid-tile {\r\n  background: lightblue;\r\n}\r\n\r\n.md-button-toggle-checked .md-button-toggle-label-content{ background-color:#8BC34A !important; }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"3:1\">\n  <mat-grid-tile *ngFor=\"let u of this.currentGameItem.players\">\n    {{u.name}} : {{getUserSummary(u.id)}}\n  </mat-grid-tile>\n</mat-grid-list>\n\n<button mat-raised-button (click)='getResults()'>Show Detail</button>\n<mat-table #table [dataSource]=\"dataSource\">\n\n  <!--- Note that these columns can be defined in any order.\n        The actual rendered columns are set as a property on the row definition\" -->\n\n  <!-- Position Column -->\n  <ng-container matColumnDef=\"{{col}}\" *ngFor=\"let col of displayedColumns\">\n    <mat-header-cell *matHeaderCellDef> {{getUserName(col)}} </mat-header-cell>\n    <mat-cell *matCellDef=\"let element\"> {{element[col]}} </mat-cell>\n  </ng-container>\n\n  <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\n  <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n</mat-table>\n"

/***/ }),

/***/ "../../../../../src/app/summary/summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_service__ = __webpack_require__("../../../../../src/app/game.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

 // Add this


var SummaryComponent = (function () {
    function SummaryComponent(gs, route) {
        this.gs = gs;
        this.route = route;
    }
    SummaryComponent.prototype.ngOnInit = function () {
        this.getDetail();
    };
    SummaryComponent.prototype.getDetail = function () {
        var _this = this;
        this.gs.currentItem.subscribe(function (x) {
            _this.currentGameItem = x;
        });
    };
    SummaryComponent.prototype.getUserSummary = function (uid) {
        var games = this.currentGameItem.games;
        var rs = games.map(function (x) { return x.result.filter(function (r) { return r.id == uid; }); }).reduce(function (total, val) {
            var amt = val[0] ? val[0].amt : 0;
            return (amt * 1 + total);
        }, 0);
        return rs;
    };
    SummaryComponent.prototype.getUserName = function (uid) {
        var players = this.currentGameItem.players;
        return players.filter(function (p) { return p.id == uid; })[0].name;
    };
    SummaryComponent.prototype.getResults = function () {
        var games = this.currentGameItem.games;
        var results = [];
        var players = this.currentGameItem.players;
        games.forEach(function (x) {
            var obj = {};
            players.forEach(function (p) {
                var m = x.result.filter(function (r) { return r.id == p.id; });
                var amt = (m.length == 0) ? 0 : m[0].amt;
                obj[p.id] = amt;
            });
            results.push(obj);
        });
        this.displayedColumns = players.map(function (x) { return x.id; });
        //['position', 'name', 'weight', 'symbol'];
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatTableDataSource */](results);
    };
    SummaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-summary',
            template: __webpack_require__("../../../../../src/app/summary/summary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/summary/summary.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__game_service__["a" /* GameService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SummaryComponent);
    return SummaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(afAuth) {
        this.afAuth = afAuth;
    }
    UserService.prototype.login = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    UserService.prototype.loginFB = function () {
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].FacebookAuthProvider());
    };
    UserService.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    UserService.prototype.getUser = function () {
        return this.afAuth.authState;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyBsri1Gurw_ApmnKy2Ayptm6WISR6FlSP0",
        authDomain: "auth-b9121.firebaseapp.com",
        databaseURL: "https://auth-b9121.firebaseio.com",
        projectId: "auth-b9121",
        storageBucket: "auth-b9121.appspot.com",
        messagingSenderId: "336929065196"
    }
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map