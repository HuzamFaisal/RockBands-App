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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rockband_service_1 = require("./rockband.service");
var RockbandsComponent = (function () {
    function RockbandsComponent(rockbandService, router) {
        this.rockbandService = rockbandService;
        this.router = router;
    }
    RockbandsComponent.prototype.getRockbands = function () {
        var _this = this;
        this.rockbandService
            .getRockbands()
            .then(function (rockbands) { return _this.rockbands = rockbands; });
    };
    RockbandsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.rockbandService.create(name)
            .then(function (rockband) {
            _this.rockbands.push(rockband);
            _this.selectedRockband = null;
        });
    };
    RockbandsComponent.prototype.delete = function (rockband) {
        var _this = this;
        this.rockbandService
            .delete(rockband.id)
            .then(function () {
            _this.rockbands = _this.rockbands.filter(function (h) { return h !== rockband; });
            if (_this.selectedRockband === rockband) {
                _this.selectedRockband = null;
            }
        });
    };
    RockbandsComponent.prototype.ngOnInit = function () {
        this.getRockbands();
    };
    RockbandsComponent.prototype.onSelect = function (rockband) {
        this.selectedRockband = rockband;
    };
    RockbandsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedRockband.id]);
    };
    return RockbandsComponent;
}());
RockbandsComponent = __decorate([
    core_1.Component({
        selector: 'my-rockbands',
        templateUrl: './rockbands.component.html',
        styleUrls: ['./rockbands.component.css']
    }),
    __metadata("design:paramtypes", [rockband_service_1.RockbandService,
        router_1.Router])
], RockbandsComponent);
exports.RockbandsComponent = RockbandsComponent;
//# sourceMappingURL=rockbands.component.js.map