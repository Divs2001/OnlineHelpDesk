import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { AdminDasboardComponent } from './pages/admin/admin-dasboard/admin-dasboard.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { UserDasboardComponent as UserDasboardComponent } from './pages/user/user-dasboard/user-dasboard.component';
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
      {
        path:'categories',
        component:ViewCategoriesComponent
      },
      {
        path:'add-category',
        component: AddCategoryComponent
      },
      {
        path:'quizzes',
        component:ViewQuizzesComponent
      },
      {
        path:'add-quiz',
        component:AddQuizComponent
      },
      {
        path:'update-quiz/:quizId',
        component:UpdateQuizComponent
      },
      {
        path:"view-questions/:quizId/:title",
        component:ViewQuizQuestionsComponent
      },
      {
        path:"add-question/:quizId/:title",
        component:AddQuestionComponent
      }
    ]
  },
  {
    path:"user-dashboard",
    component: UserDasboardComponent,
    canActivate:[NormalGuard],
    children:[
      {
        path:'getQuizzes/:catId',
        component:LoadQuizComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
