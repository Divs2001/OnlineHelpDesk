import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Route, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    email:'',
    password:''
  }
  constructor(private snack:MatSnackBar, private loginService:LoginService, private route: Router) { }

  ngOnInit(): void {
  }
  formSubmit(){

    if(this.loginData.email.trim()=='' || this.loginData.email==null){

      this.snack.open("Username is required !!", "", {
        duration: 3000
      });
      return;
    }

    if(this.loginData.password.trim()=='' || this.loginData.password==null){

      this.snack.open("Password is required !!", "", {
        duration: 3000
      });
      return;
    }

    //request to server to generate token
    this.loginService.generateToken(this.loginData).subscribe(
      (data:any)=>{
        console.log("success");
        console.log(data);

        this.loginService.loginUser(data.token);

        this.loginService.getCurrentUser().subscribe(
          (user:any)=>{
            this.loginService.setUser(user);
            console.log(user);

            //redirect ... ADMIN: admin dasboard

            //redirect ... NORMAL: normal dashboard 
            if(this.loginService.getUserRole()=="ADMIN"){
              // window.location.href="/admin-dashboard";
              this.loginService.loginStatusSubject.next(true);
              this.route.navigate(['admin-dashboard']);

            }else if(this.loginService.getUserRole()=="STUDENT"){
              // window.location.href="/user-dashboard";
              this.loginService.loginStatusSubject.next(true);
              this.route.navigate(['user-dashboard']);
            }else{
              this.loginService.logout();
            }
          }
        )

      },(error)=>{
        console.log('Error !');
        console.log(error);
        this.snack.open("Invalid Details, Try Again!!","",{
          duration:3000
        })
      }
    )
  }

}
