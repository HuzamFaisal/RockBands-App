"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var rockband_service_1 = require("./rockband.service");
var RockbandDetailComponent = (function () {
    function RockbandDetailComponent(rockbandService, route, location) {
        this.rockbandService = rockbandService;
        this.route = route;
        this.location = location;
    }
    RockbandDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.rockbandService.getRockband(+params.get('id')); })
            .subscribe(function (rockband) { return _this.rockband = rockband; });
    };
    RockbandDetailComponent.prototype.save = function () {
        var _this = this;
        this.rockbandService.update(this.rockband)
            .then(function () { return _this.goBack(); });
    };
    RockbandDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return RockbandDetailComponent;
}());
RockbandDetailComponent = __decorate([
    core_1.Component({
        selector: 'rockband-detail',
        templateUrl: './rockband-detail.component.html',
        styleUrls: ['./rockband-detail.component.css']
    }),
    __metadata("design:paramtypes", [rockband_service_1.RockbandService,
        router_1.ActivatedRoute,
        common_1.Location])
], RockbandDetailComponent);
exports.RockbandDetailComponent = RockbandDetailComponent;
//# sourceMappingURL=rockband-detail.component.js.map