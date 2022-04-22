import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { QueryService } from 'src/app/services/query/query.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  userId:any;
  queries:any=[];
  toggle1 = true;
  toggle2 = true;
  toggle3 = true;
  constructor(private login:LoginService, private query:QueryService) { }

  ngOnInit(): void {
    this.userId = this.login.getUser().id;
    this.allQueries(this.userId);
  }

  allQueries(userId:any){
    if(this.toggle1){
      this.toggle2 = this.toggle1;
      this.toggle3 = this.toggle1;
      this.toggle1 = !this.toggle1;
    }
    
    
    this.query.getAllQueries(userId).subscribe(
      (data)=>{
        console.log(data);
        this.queries = data;
      },(error)=>{
        console.log(error);
      }
    )
  }

  allUnresolvedQueries(userId:any){
    if(this.toggle2){
      this.toggle1 = this.toggle2;
      this.toggle3 = this.toggle2;
      this.toggle2 = !this.toggle2;
    }
    
    
    this.query.getUnresolvedQueries(userId).subscribe(
      (data)=>{
        console.log(data);
        this.queries = data;
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  allResolvedQueries(userId:any){
    if(this.toggle3){
      this.toggle1 = this.toggle3;
      this.toggle2 = this.toggle3;
      this.toggle3 = !this.toggle3;
    } 
    
    
    this.query.getResolvedQueries(userId).subscribe(
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
