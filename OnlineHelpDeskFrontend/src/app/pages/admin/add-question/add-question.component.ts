import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import Swal from 'sweetalert2';
// import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})


export class AddQuestionComponent implements OnInit {
  

  // public Editor= ClassicEditor;
  quizId:any;
  title:any;
  question={
    content:"",
    image:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    quiz:{
      quizId:"",
      title:""
    }
  }

  constructor(private route:ActivatedRoute, private ques:QuestionsService,
              private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params["quizId"];
    this.title = this.route.snapshot.params["title"];
    this.question.quiz.quizId=this.quizId;
    console.log(this.quizId);
    
  }

  formSubmit(){

    if(this.question.content.trim()=="" || this.question.content==null){
      this.snack.open("Question content is required!!","",{
        duration:3000
      })
      return; 
    }
    if(this.question.content.trim()=="" || this.question.content==null){
      this.snack.open("Question content is required!!","",{
        duration:3000
      })
      return; 
    }
    if(this.question.option1.trim()=="" || this.question.option1==null){
      this.snack.open("Option1 is required!!","",{
        duration:3000
      })
      return; 
    }
    if(this.question.option2.trim()=="" || this.question.option2==null){
      this.snack.open("Option2 is required!!","",{
        duration:3000
      })
      return; 
    }
    if(this.question.option3.trim()=="" || this.question.option3==null){
      this.snack.open("Option3 is required!!","",{
        duration:3000
      })
      return; 
    }
    if(this.question.option4.trim()=="" || this.question.option4==null){
      this.snack.open("Option4 is required!!","",{
        duration:3000
      })
      return; 
    }
    if(this.question.answer.trim()=="" || this.question.answer==null){
      this.snack.open("Answer is required!!","",{
        duration:3000
      })
      return; 
    }
    this.ques.addQuestion(this.question).subscribe(
      (data)=>{
        Swal.fire("Success","Question added Succesfully","success").then((e)=>{
          this.question={content:"",
          image:"",
          option1:"",
          option2:"",
          option3:"",
          option4:"",
          answer:"",
          quiz:{
            quizId:"",
            title:""
          }}
        })
      },
      (error)=>{
        Swal.fire("Error","Server error","error");
      }
    )
  }

}
