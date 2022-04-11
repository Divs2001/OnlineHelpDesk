import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories=[
    {
      catId:0,
      title:"",
    }
  ]

  quizData={
    title:"",
    description:"",
    maxMarks:"",
    numberOfQuestions:"",
    active:"true",
    category:{
      catId:""
    }

  }
  
  constructor(private category:CategoryService, private quiz:QuizService, 
    private snack:MatSnackBar, private router:Router) { }

  ngOnInit(): void {
    this.category.categories().subscribe(
      (data:any)=>{
        this.categories = data;
        console.log(data);
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!","Server Error", error);
      }
    );
    
  }

  // login=newFormGroup({
  //   username:new FormControl(''),
  //   password:new FormControl(''),
  //   })

  

  public addQuiz(){

    if(this.quizData.title.trim()=='' || this.quizData.title==null){
      this.snack.open("Title Required!!","",{
        duration:3000
      })
      return;
    }
    if(this.quizData.description.trim()=='' || this.quizData.description==null){
      this.snack.open("Description Required!!","",{
        duration:3000
      })
      return;
    }
    if(this.quizData.maxMarks=="" || this.quizData.maxMarks==null){
      this.snack.open("Maximum Marks Required!!","",{
        duration:3000
      })
      return;
    }
    if(this.quizData.numberOfQuestions=="" || this.quizData.maxMarks==null){
      this.snack.open("Number of questions are required!!","",{
        duration:3000
      })
      return;
    }
    if(this.quizData.category.catId=='' || this.quizData.category.catId==undefined){
      this.snack.open("Category Required!!","",{
        duration:3000
      })
      return; 
    }
    console.log(this.quizData);
    return this.quiz.addQuiz(this.quizData).subscribe(
      (data:any)=>{
            Swal.fire("Success!!","Quiz added successfully",'success');
            this.quizData={
              title:"",
              description:"",
              maxMarks:"",
              numberOfQuestions:"",
              active:"true",
              category:{
                catId:""
              }
        }},
        (error:any)=>{
          Swal.fire("Error!!","Server Error",'error');
        });
        
        
      }

    }