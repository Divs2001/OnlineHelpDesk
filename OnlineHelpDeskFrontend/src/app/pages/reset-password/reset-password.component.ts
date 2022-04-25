import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  id:any;
  data = {
    new_password: '',
    confirm_password: ''
  }
  jsonData={
    id:'',
    new_password:''
  }
  constructor(private snack: MatSnackBar, private route:ActivatedRoute, private users:UserService) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params["id"];
      console.log(this.id);
  }

    public formSubmit() {
    if (this.data.new_password.trim() == '' || this.data.new_password.trim() == null) {
      this.snack.open("Enter details", '', {
        duration: 3000
      });
      return;
    }
    if (this.data.new_password.trim() == '' || this.data.new_password.trim() == null) {
      this.snack.open("Enter details", '', {
        duration: 3000
      });
      return;
    }
    if(this.data.new_password!=this.data.confirm_password){
      this.snack.open("Passwords should be same.","",{
        duration:3000
      });
      return;
    }
    this.jsonData.id=this.id;
    this.jsonData.new_password = this.data.new_password;
    console.log(this.jsonData);
    this.users.resetPassword(this.jsonData).subscribe(
      (response)=>{
        console.log(response);
        Swal.fire("Success","Password has been successfully updated.",'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error","There is an error",'error');
      }
    );
    
  }
}