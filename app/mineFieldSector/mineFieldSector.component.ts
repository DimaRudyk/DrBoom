import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { MineField } from "app/mineField/mineField.component";

@Component({

    moduleId: module.id,
    templateUrl: 'mineFieldSector.component.html',

})



export class MineFieldSector {

    id: number;

    jd: number;

    ifViewed: boolean = true;

    ifMined: boolean = false;

    minesAround: number = 0;

    ngClass: boolean = false;





    
}
