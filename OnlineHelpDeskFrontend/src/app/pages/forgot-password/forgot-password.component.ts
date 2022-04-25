import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  data={
    email:''
  }

  constructor(private snack:MatSnackBar, private userService:UserService) { }

  ngOnInit(): void {
  }

  public formSubmit(){
    if(this.data.email.trim()=='' || this.data.email.trim()==null){
      this.snack.open("Email is required !!", "", {
        duration: 3000
      });
      return;
    }
    console.log(this.data);
    this.userService.forgotPassword(this.data).subscribe(
      (da)=>{
        console.log(da);
        Swal.fire("Success","Email has been sent...",'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error","This email is not registered",'error');
      }
    )
  }
}
