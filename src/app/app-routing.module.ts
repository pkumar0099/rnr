import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RewardsPointsComponent } from './rewards-points/rewards-points.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  // {path:"demo",component:RewardComponent},
  {path:"login",component:LoginFormComponent},
  {path:"nav",component:NavBarComponent},
  {path:"search",component:SearchBarComponent},
  {path:"rewards",component:RewardsPointsComponent},
  {path:"dash",component:DashboardComponent},
  {path: 'user', component:UserInfoComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
