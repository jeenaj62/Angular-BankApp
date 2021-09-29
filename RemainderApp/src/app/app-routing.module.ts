import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewRemainderComponent } from './view-remainder/view-remainder.component';

const routes: Routes = [
  {
    path:'', component:LoginComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'dashboard',component:DashboardComponent
  },
  {
    path:'remainder',component:ViewRemainderComponent
  },
  {
    path:'event',component:EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
