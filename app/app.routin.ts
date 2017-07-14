import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found-404/not-found.component";
import { GameOver } from "./gameOver/gameOver.component";
import { MineField } from "app/mineField/mineField.component";
import { MineFieldSector } from "app/mineFieldSector/mineFieldSector.component";




const appRoutes: Routes = [
    
    { path: '', component: MineField  },
    { path: 'GameOver', component:  GameOver },
    { path: '**', component: NotFoundComponent }


];

export const Routing = RouterModule.forRoot(appRoutes)