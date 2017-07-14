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
var mineFieldSector_component_1 = require("app/mineFieldSector/mineFieldSector.component");
var MineField = (function () {
    function MineField(mineFieldSector) {
        this.mineFieldSector = mineFieldSector;
        this.row = 9;
        this.col = 9;
        this.mine = 3;
        //fieldSize:number = this.row * this.col
        this.mineFieldRow = [];
        this.mineField = [];
    } //Для юза функций сектора
    MineField.prototype.createMineField = function () {
        for (var i = 0; i < this.col; i++) {
            for (var j = 0; j < this.row; j++) {
                var sector = new mineFieldSector_component_1.MineFieldSector();
                sector.id = i;
                sector.jd = j;
                sector.ifViewed = false;
                sector.ifMined = false;
                this.mineFieldRow.push(sector);
                if (this.mineFieldRow.length == this.row) {
                    this.mineField.push(this.mineFieldRow);
                    this.mineFieldRow = [];
                }
            }
        }
    };
    MineField = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'mineField.component.html',
            providers: [mineFieldSector_component_1.MineFieldSector],
            styleUrls: ['mineField.component.css']
        }),
        __metadata("design:paramtypes", [mineFieldSector_component_1.MineFieldSector])
    ], MineField);
    return MineField;
}());
exports.MineField = MineField;
//# sourceMappingURL=mineField.component.js.map