import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Routing } from "./app.routin";

import { FormsModule } from '@angular/forms';
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found-404/not-found.component";
import { GameOver } from "./gameOver/gameOver.component";
import { MineFieldSector } from "app/mineFieldSector/mineFieldSector.component";
import { MineField } from "app/mineField/mineField.component";



@NgModule({
    imports: [Routing, BrowserModule, FormsModule],

    declarations: [AppComponent, MineField, GameOver, NotFoundComponent, MineFieldSector],

    providers: [MineFieldSector],
    bootstrap: [AppComponent]

})
export class AppModule { }
