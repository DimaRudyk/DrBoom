import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found-404/not-found.component";
import { Game } from "./game/game.component";
import { GameOver } from "./gameOver/gameOver.component";




const appRoutes: Routes = [
    
    { path: '', component: Game  },
    { path: 'GameOver', component:  GameOver },
    { path: '**', component: NotFoundComponent }


];

export const Routing = RouterModule.forRoot(appRoutes)