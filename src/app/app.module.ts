import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { AppComponent } from './app.component';
import { LeagueComponent } from './pages/league/league.component';
import { NavBarComponent } from './pages/nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppAngularMaterialModule } from './modules/app-angular-material.module';
import { AppRouterModule } from './modules/app-router.module';
import { CreateLeagueComponent } from './pages/create-league/create-league.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginLeagueComponent } from './pages/login-league/login-league.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    NavBarComponent,
    CreateLeagueComponent,
    HomeComponent,
    LoginLeagueComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AppAngularMaterialModule,
    AppRouterModule
  ],
  providers: [
    // { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    // { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { floatLabel: 'never' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
