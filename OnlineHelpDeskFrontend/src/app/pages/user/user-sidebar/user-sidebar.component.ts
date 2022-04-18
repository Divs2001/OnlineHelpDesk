import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomainsService } from 'src/app/services/domains/domains.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  roles:any=[];
  constructor(private dom: DomainsService, private snack:MatSnackBar) { }

  ngOnInit(): void {
    console.log("Hello");
    this.dom.getRoles().subscribe(
      (data:any)=>{
        console.log(data);
        this.roles = data;
      },
      (error)=>{
        this.snack.open("Error in loading domains from server", "",{
          duration:3000
        })
      }
    )
  }

}
