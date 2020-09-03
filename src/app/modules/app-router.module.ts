import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LeagueComponent } from '../pages/league/league.component';
import { CreateLeagueComponent } from '../pages/create-league/create-league.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginLeagueComponent } from '../pages/login-league/login-league.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'league/:id', component: LeagueComponent },
  { path: 'create', component: CreateLeagueComponent },
  { path: 'login', component: LoginLeagueComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
