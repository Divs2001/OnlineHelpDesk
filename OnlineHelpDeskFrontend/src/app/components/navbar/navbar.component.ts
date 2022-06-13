import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { windowWhen } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: any = false;
  user: any = null;
  userRole: any;
  type: any;

  constructor(public loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.user = this.loginService.getUser();
    // // this.userRole = this.loginService.getUserRole();
    // console.log(this.userRole);
    // if (this.userRole == "ADMIN") {
    //   this.type = true;
    // } else {
    //   this.type = false;
    // }
    this.loginService.loginStatusSubject.asObservable().subscribe(data => {
      this.isLoggedIn = this.loginService.isLoggedIn();
      this.user = this.loginService.getUser();
      this.userRole = this.loginService.getUserRole();
      console.log(this.userRole);
      if (this.userRole == "ADMIN") {
        this.type = true;
      } else {
        this.type = false;
      }
    })
  }

  public logout() {
    this.loginService.logout();
    window.location.reload();
  }


}
