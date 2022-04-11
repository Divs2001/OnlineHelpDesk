import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,
    private snack: MatSnackBar, private router:Router) { }

  public user={
    username:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }

  ngOnInit(): void {
  }

  formSubmit(){
    console.log(this.user);
    if(this.user.username==''|| this.user.username==null){
      this.snack.open("Username is required!!",'',{
        duration:3000, horizontalPosition:'right'
      });
      return;
    }else if(this.user.password==''|| this.user.password==null){
      this.snack.open("Password is required!!",'',{
        duration:3000, horizontalPosition:'right'
      });
      return;
    }else if(this.user.firstName==''|| this.user.firstName==null){
      this.snack.open("First name is required!!",'',{
        duration:3000, horizontalPosition:'right'
      });
      return;
    }else if(this.user.lastName==''|| this.user.lastName==null){
      this.snack.open("Last name is required!!",'',{
        duration:3000, horizontalPosition:'right'
      });
      return;
    }else if(this.user.email==''|| this.user.email==null){
      this.snack.open("Email is required!!",'',{
        duration:3000, horizontalPosition:'right'
      });
      return;
    }else if(this.user.phone==''|| this.user.phone==null){
      this.snack.open("Phone number is required!!",'',{
        duration:3000, horizontalPosition:'right'
      });
      return;
    } 

    this.userService.addUser(this.user).subscribe(
      (data)=>{
        //success
        // console.log(data);
        // alert('success');
        Swal.fire("Success","User is registered","success");
        this.router.navigate(['login']);

      },
      (error)=>{
        console.log(error);
        // alert('Something went wrong');
        this.snack.open("Something went wrong", '', {
          duration:3000, horizontalPosition:'right'
        })
        // if(error.status==500){
        //   this.snack.open("User is already registered with this username, try another one.", '', {
        //     duration:3000, horizontalPosition:'right'
        //   })
        // }else{
        // this.snack.open("Something went wrong, please try again !!", '', {
        //   duration:3000, horizontalPosition:'right'
        // })
      }
    );
  }

}
