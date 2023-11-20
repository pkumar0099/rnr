import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { RewardsPointsComponent } from './rewards-points/rewards-points.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginFormComponent,
    NavBarComponent,
    SearchBarComponent,
    UserInfoComponent,
    RewardsPointsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
