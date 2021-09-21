import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./pages/movies/movies.component";
import {PeopleComponent} from "./pages/people/people.component";
import {SeriesComponent} from "./pages/series/series.component";
import {MembersComponent} from "./pages/members/members.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {HomeComponent} from "./home/home.component";
import {ErrorPageComponent} from "./pages/error-page/error-page.component";


const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'movies', component: MoviesComponent },
    { path: 'people', component: PeopleComponent },
    { path: 'series', component: SeriesComponent },
    { path: 'members', component: MembersComponent, canActivate: [AuthGuardService] },
    { path: '404', component: ErrorPageComponent, data: {message: 'Page not found!'} },
    { path: '**', redirectTo: '/404' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
