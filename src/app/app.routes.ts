import { RouterModule , Routes} from '@angular/router';


import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphComponent } from './pages/graph/graph.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    { path: '', component: PagesComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: LoginComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'graph', component: GraphComponent },
    // {
    //     path: '',
    //     redirectTo: '',
    //     pathMatch: 'full'
    // },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
