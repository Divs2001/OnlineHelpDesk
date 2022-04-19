import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDasboardComponent } from './pages/admin/admin-dasboard/admin-dasboard.component';

import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserDasboardComponent as UserDasboardComponent } from './pages/user/user-dasboard/user-dasboard.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserQueryComponent } from './pages/user/user-query/user-query.component';
import { AdminGuard } from './services/Admin Guard/admin.guard';
import { NormalGuard } from './services/Normal Guard/normal.guard';


const routes: Routes = [
  {
    path:"signup",
    component:SignupComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"admin-dashboard",
    component:AdminDasboardComponent,
    // pathMatch:"full",
    canActivate:[AdminGuard],
    children:[
      {
        path:'',
        component: WelcomeComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },

    ]
  },
  {
    path:"user-dashboard",
    component: UserDasboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'',
        component:UserHomeComponent
      },
      {
        path:'query/:roleId',
        component:UserQueryComponent
      },
      {
        path:"profile",
        component:ProfileComponent
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
