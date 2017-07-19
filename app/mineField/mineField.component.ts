import { Component, Input } from '@angular/core';
import { MineFieldSector } from "app/mineFieldSector/mineFieldSector.component";



@Component({

    moduleId: module.id,
    templateUrl: 'mineField.component.html',
    providers: [MineFieldSector],
    styleUrls: ['mineField.component.css']
})
export class MineField {

    myStyle: boolean = true;

    row: number = 3;
    col: number = 3;
    mine: number = 1;
    mineCount: number = 0;

    countSectors: number = this.row * this.col
    mineFieldRow: Array<Object> = [];
    mineField: Array<Object> = [];

    constructor(public mineFieldSector: MineFieldSector) { } //Для юза функций сектора


    createMineField() {

        for (let i = 0; i < this.col; i++) {

            for (let j = 0; j < this.row; j++) {

                let sector = new MineFieldSector();

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

    }
    open(e: any, mss: MineFieldSector) {

        mss.ifViewed = false;

        console.log(mss);
        
        while (this.mineCount < this.mine) {

            let posI: number = Math.floor(Math.random() * (this.row - 1));
            let posJ: number = Math.floor(Math.random() * (this.col - 1));

            if (this.mineField[posI][posJ].ifMined == false && this.mineField[posI][posJ].minesAround == false) {
                this.mineField[posI][posJ].ifMined = true;
                this.mineCount++;
                this.countingMinesAround(posI, posJ);

            }

        }

    }







    countingMinesAround(posI: number, posJ: number) {


        if (posJ == 0 && posI == 0) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++;    //111111111111

            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++;   //666666666

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++;  //77777777


        }
        else if (posJ == 8 && posI == 0) {
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++;    //2222222222

            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++;   //666666666

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++;  //88888888

        }
        else if (posJ == 8 && posI == 8) {
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++;    //2222222222

            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++;    //3333333333

            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++;  //55555555555
        }
        else if (posJ == 0 && posI == 8) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++;    //111111111111

            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++;    //3333333333

            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++;    //4444444

        }




        else if (posJ == 0) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++;    //111111111111

            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++;    //3333333333

            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++;    //4444444

            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++;   //666666666

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++;  //77777777

        }
        else if (posI == 0) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++;    //111111111111

            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++;    //2222222222

            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++;   //666666666

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++;  //77777777

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++;  //88888888

        }
        else if (posJ == 8) {
            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++;    //2222222222

            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++;    //3333333333

            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++;  //55555555555

            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++;   //666666666

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++;  //88888888

        }
        else if (posI == 8) {
            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++;    //111111111111

            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++;    //2222222222

            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++;    //3333333333

            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++;    //4444444

            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++;  //55555555555

        }


        else {

            if (this.mineField[posI][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[posI][Math.min(posJ + 1, this.row - 1)].minesAround++;    //111111111111

            if (this.mineField[posI][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[posI][Math.max(posJ - 1, 0)].minesAround++;    //2222222222

            if (this.mineField[Math.max(posI - 1, 0)][posJ].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][posJ].minesAround++;    //3333333333

            if (this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.min(posJ + 1, this.row - 1)].minesAround++;    //4444444

            if (this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.max(posI - 1, 0)][Math.max(posJ - 1, 0)].minesAround++;  //55555555555

            if (this.mineField[Math.min(posI + 1, this.row - 1)][posJ].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][posJ].minesAround++;   //666666666

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.min(posJ + 1, this.row - 1)].minesAround++;  //77777777

            if (this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].ifMined == false)
                this.mineField[Math.min(posI + 1, this.row - 1)][Math.max(posJ - 1, 0)].minesAround++;  //88888888
        }
    }

}