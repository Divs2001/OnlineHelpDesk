import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomainsService } from 'src/app/services/domains/domains.service';
import { LoginService } from 'src/app/services/login.service';
import { QueryService } from 'src/app/services/query/query.service';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-query',
  templateUrl: './user-query.component.html',
  styleUrls: ['./user-query.component.css']
})
export class UserQueryComponent implements OnInit {

  roleId: any;
  role: any = {};
  queryData = {
    title: '',
    description: '',
    roleId:'',
    userId:''
  };
  userData:any={};
  adminData: any = {

  };
  
  constructor(private route: ActivatedRoute, private user: UserService, 
    private domain: DomainsService,
    private query:QueryService,
    private login:LoginService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.roleId = params['roleId'];

      this.user.getUser(this.roleId).subscribe(
        (data) => {
          this.adminData = data
          console.log(this.adminData);
        }, (error) => {
          console.log(error);
        }
      );

      this.domain.getRole(this.roleId).subscribe(
        (data) => {
          this.role = data;
          console.log(data);
        },
        (error) => {
          console.log(error);

        }

      )
    }
    )
  }

  formSubmit(){
    this.queryData.roleId = this.roleId;
    this.userData = this.login.getUser();
    this.queryData.userId = this.userData.id;
    console.log(this.queryData);
    
    this.query.addQuery(this.queryData).subscribe(
      (data)=>{
        console.log(data);
        Swal.fire('Success',"Query is sent.",'success');
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error","Server error",'error');
        
      }
    )
    
  }


}
