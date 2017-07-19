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
        this.myStyle = true;
        this.row = 3;
        this.col = 3;
        this.mine = 1;
        this.mineCount = 0;
        this.countSectors = this.row * this.col;
        this.mineFieldRow = [];
        this.mineField = [];
    } //Для юза функций сектора
    MineField.prototype.createMineField = function () {
        for (var i = 0; i < this.col; i++) {
            for (var j = 0; j < this.row; j++) {
                var sector = new mineFieldSector_component_1.MineFieldSector();
                sector.id = i;
                sector.jd = j;
                sector.ifViewed = true;
                sector.ifMined = false;
                this.mineFieldRow.push(sector);
                if (this.mineFieldRow.length == this.row) {
                    this.mineField.push(this.mineFieldRow);
                    this.mineFieldRow = [];
                }
            }
        }
    };
    MineField.prototype.open = function (e, mss) {
        mss.ifViewed = false;
        console.log(mss);
        if (mss.ifViewed == false) {
            this.myStyle = !this.myStyle;
        }
        while (this.mineCount < this.mine) {
            var posI = Math.floor(Math.random() * (this.row - 1));
            var posJ = Math.floor(Math.random() * (this.col - 1));
            if (this.mineField[posI][posJ].ifMined == false && this.mineField[posI][posJ].minesAround == false) {
                this.mineField[posI][posJ].ifMined = true;
                this.mineCount++;
                this.countingMinesAround(posI, posJ);
            }
        }
    };
    MineField.prototype.countingMinesAround = function (posI, posJ) {
        if (posJ == 0 && posI == 0) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++; //111111111111
            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++; //666666666
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++; //77777777
        }
        else if (posJ == 8 && posI == 0) {
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++; //2222222222
            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++; //666666666
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++; //88888888
        }
        else if (posJ == 8 && posI == 8) {
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++; //2222222222
            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++; //3333333333
            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++; //55555555555
        }
        else if (posJ == 0 && posI == 8) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++; //111111111111
            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++; //3333333333
            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++; //4444444
        }
        else if (posJ == 0) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++; //111111111111
            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++; //3333333333
            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++; //4444444
            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++; //666666666
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++; //77777777
        }
        else if (posI == 0) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++; //111111111111
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++; //2222222222
            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++; //666666666
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++; //77777777
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++; //88888888
        }
        else if (posJ == 8) {
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++; //2222222222
            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++; //3333333333
            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++; //55555555555
            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++; //666666666
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++; //88888888
        }
        else if (posI == 8) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++; //111111111111
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++; //2222222222
            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++; //3333333333
            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++; //4444444
            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++; //55555555555
        }
        else {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++; //111111111111
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++; //2222222222
            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++; //3333333333
            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++; //4444444
            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++; //55555555555
            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++; //666666666
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++; //77777777
            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++; //88888888
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