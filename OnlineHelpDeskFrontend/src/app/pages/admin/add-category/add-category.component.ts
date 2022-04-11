import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  categoryData:any={
    title:'',
    description:''
  }
  constructor(private category:CategoryService, private snack:MatSnackBar) { }

  ngOnInit(): void {
  }

  public formSubmit(){
    if(this.categoryData.title.trim()=='' || this.categoryData.title==null){
      this.snack.open("Title Required !!","",{
        duration:3000
      });
      return;
    }
    this.category.addCategory(this.categoryData).subscribe(
      (data:any)=>{
        this.categoryData.title='';
        this.categoryData.description='';
        Swal.fire('Success!!','Category successfully added','success');
      },
      (error)=>{
        Swal.fire('Error!','Server Error',error);
      }
    )
  }

}
