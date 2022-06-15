import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { authInterceptorProviders } from './services/auth.interceptor';
import { UserDasboardComponent } from './pages/user/user-dasboard/user-dasboard.component';
import { AdminDasboardComponent } from './pages/admin/admin-dasboard/admin-dasboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { UserHomeComponent } from './pages/user/user-home/user-home.component';
import { UserQueryComponent } from './pages/user/user-query/user-query.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { AdminQueryViewComponent } from './pages/admin/admin-query-view/admin-query-view.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    UserDasboardComponent,
    AdminDasboardComponent,
    ProfileComponent,
    SidebarComponent,
    WelcomeComponent,
    UserSidebarComponent,
    UserHomeComponent,
    UserQueryComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AdminHomeComponent,
    AdminQueryViewComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    CKEditorModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
