import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QueryService } from 'src/app/services/query/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-query-view',
  templateUrl: './admin-query-view.component.html',
  styleUrls: ['./admin-query-view.component.css']
})
export class AdminQueryViewComponent implements OnInit {

  queryId:any;
  // queryData={
  //   queryId:'',
  //   title:'',
  //   description:'',
  //   roleId:'',
  //   userId:'',
  //   response:''
  // }
  queryData:any=[]
  response:any;

  constructor(private route: ActivatedRoute, private queryService: QueryService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.queryId = params['queryId'];

      this.queryService.getQuery(this.queryId).subscribe(
        (data:any)=>{
          this.queryData = data;
          console.log(this.queryData);
          this.response = this.queryData.response;
        }, 
        (error)=>{
          console.log(error);
        }
      )
    })

  }

  public formSubmit(){
    this.queryService.addResponse(this.queryData).subscribe(
      (data:any)=>{
        console.log(data);
        Swal.fire('Success','Response Sent','success').then(
          function(){
            location.reload();
          }
        );
        
      },
      (error)=>{
        console.log(error);
        Swal.fire('Error','Server Error','error');
      }
    )
    
  }

}
