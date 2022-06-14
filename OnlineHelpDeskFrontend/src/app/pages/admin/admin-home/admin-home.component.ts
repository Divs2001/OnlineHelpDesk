import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { QueryService } from 'src/app/services/query/query.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  userId:any;
  roleId:any;
  queries:any=[];
  toggle1 = true;
  toggle2 = true;
  toggle3 = true;
  constructor(private login:LoginService, private query:QueryService, 
    private userService: UserService) { }

  ngOnInit(): void {
    this.userId = this.login.getUser().id;
    this.userService.getRoleId(this.userId).subscribe(
      (data:any)=>{
        this.roleId = data;
        console.log(" this is roleId")
        console.log(this.roleId);
        this.allQueriesByRole(this.roleId);
      },
      (error)=>{
        console.log(error);
      }
    )
    
  }

  allQueriesByRole(roleId:any){
    if(this.toggle1){
      this.toggle2 = this.toggle1;
      this.toggle3 = this.toggle1;
      this.toggle1 = !this.toggle1;
    }
    
    
    this.query.getAllQueriesByRole(roleId).subscribe(
      (data)=>{
        console.log(data);
        this.queries = data;
      },(error)=>{
        console.log("hi");
        console.log(error);
      }
    )
  }

  allUnresolvedQueriesByRole(roleId:any){
    if(this.toggle2){
      this.toggle1 = this.toggle2;
      this.toggle3 = this.toggle2;
      this.toggle2 = !this.toggle2;
    }
    
    
    this.query.getUnresolvedQueriesByRole(roleId).subscribe(
      (data)=>{
        console.log(data);
        this.queries = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  allResolvedQueriesByRole(roleId:any){
    if(this.toggle3){
      this.toggle1 = this.toggle3;
      this.toggle2 = this.toggle3;
      this.toggle3 = !this.toggle3;
    } 
    
    
    this.query.getResolvedQueriesByRole(roleId).subscribe(
      (data)=>{
        console.log(data);
        this.queries = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  openQuery(){

  }

}
