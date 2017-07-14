import { Component } from '@angular/core';
import { MineFieldSector } from "app/mineFieldSector/mineFieldSector.component";



@Component({

    moduleId: module.id,
    templateUrl: 'mineField.component.html',
    providers: [MineFieldSector],
    styleUrls: ['mineField.component.css']
})
export class MineField {

    row: number = 9;
    col: number = 9;
    mine: number = 3;
    //fieldSize:number = this.row * this.col
    mineFieldRow: Array<Object> = [];
    mineField: Array<Object> = [];

    constructor(public mineFieldSector: MineFieldSector) { } //Для юза функций сектора


    createMineField() {

        for (let i = 0; i < this.col; i++) {

            for (let j = 0; j < this.row; j++) {

                let sector = new MineFieldSector();
                
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

    }




}