"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
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
require('reflect-metadata');
require('zone.js/dist/zone');
var angular2_meteor_1 = require('angular2-meteor');
var core_1 = require('@angular/core');
var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var router_deprecated_2 = require('@angular/router-deprecated');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var home_ts_1 = require('./components/core/home/home.ts');
var login_ts_1 = require('./components/core/auth/login.ts');
var signup_ts_1 = require('./components/core/auth/signup.ts');
var dashboard_ts_1 = require('./components/core/dashboard/dashboard.ts');
var LIOSK = (function (_super) {
    __extends(LIOSK, _super);
    function LIOSK() {
        _super.call(this);
    }
    LIOSK = __decorate([
        core_1.Component({
            selector: 'app',
            templateUrl: '/client/app.html',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, router_deprecated_2.RouterLink]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', as: 'Home', component: home_ts_1.Home },
            { path: '/login', as: 'Login', component: login_ts_1.Login },
            { path: '/signUp', as: 'SignUp', component: signup_ts_1.SignUp },
            { path: '/dashboard', as: 'Dashboard', component: dashboard_ts_1.Dashboard }
        ]),
        angular2_meteor_accounts_ui_1.InjectUser(''), 
        __metadata('design:paramtypes', [])
    ], LIOSK);
    return LIOSK;
}(angular2_meteor_1.MeteorComponent));
angular2_meteor_auto_bootstrap_1.bootstrap(LIOSK, [router_deprecated_1.ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=app.js.map