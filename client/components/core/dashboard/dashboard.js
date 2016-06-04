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
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var router_deprecated_1 = require('@angular/router-deprecated');
var meteor_1 = require('meteor/meteor');
var Dashboard = (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard(router) {
        _super.call(this);
        this.router = router;
    }
    Dashboard.prototype.logout = function () {
        var _this = this;
        this.autorun(function () {
            console.log("logout....");
            meteor_1.Meteor.logout(function (err) {
                if (err) {
                    console.log("logout failed..");
                    //do some thing for logout failure...
                    _this.router.navigate(['/Home']);
                }
                else {
                    console.log("logout success");
                    _this.router.navigate(['/Home']);
                }
            });
        });
    };
    Dashboard = __decorate([
        core_1.Component({
            selector: 'dashboard',
            directives: [router_deprecated_1.RouterLink],
            templateUrl: '/client/components/core/dashboard/dashboard.html'
        }),
        angular2_meteor_accounts_ui_1.InjectUser(''), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], Dashboard);
    return Dashboard;
}(angular2_meteor_1.MeteorComponent));
exports.Dashboard = Dashboard;
//# sourceMappingURL=dashboard.js.map