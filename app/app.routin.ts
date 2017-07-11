import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from "./not-found-404/not-found.component";




const appRoutes: Routes = [
    
    { path: '', component: HomeComponent  },
    { path: 'GameOver', component:  MainPage},
    { path: '**', component: NotFoundComponent }


];

export const Routing = RouterModule.forRoot(appRoutes)