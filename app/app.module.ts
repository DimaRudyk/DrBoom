import { NgModule, Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { Routing } from "./app.routin";

import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found-404/not-found.component";
import { GameOver } from "./gameOver/gameOver.component";
import { Game } from "app/game/game.component";



@NgModule({
    imports: [ Routing , BrowserModule ],
                
    declarations: [AppComponent, Game, GameOver, NotFoundComponent  ],

    providers: [],
    bootstrap: [AppComponent]

})
export class AppModule { }
