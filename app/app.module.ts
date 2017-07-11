import { NgModule, Component } from '@angular/core';
import { Routing } from "./app.routin";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./not-found-404/not-found.component";



@NgModule({
    imports: [ Routing ],
                
    declarations: [AppComponent ],

    providers: [],
    bootstrap: [AppComponent, NotFoundComponent]

})
export class AppModule { }
