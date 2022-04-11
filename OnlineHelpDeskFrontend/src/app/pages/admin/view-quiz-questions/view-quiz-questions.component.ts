import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

  quizId:any;
  title:any;
  // questions:any;
  questions=[
    {
    quesId:"",
    content:"",
    image:"",
    option1:"",
    option2:"",
    option3:"",
    option4:"",
    answer:"",
    quiz:{
      quizId:""
    }
  }]
  constructor(private route:ActivatedRoute, private question:QuestionsService,
              private router:Router) { }

  ngOnInit(): void {
    this.quizId = this.route.snapshot.params['quizId'];
    this.title = this.route.snapshot.params['title'];
    console.log(this.quizId);
    console.log(this.title);
    this.question.getQuestionsOfQuiz(this.quizId).subscribe(
      (data:any)=>{
        console.log(data)
        //data will be bringing an object of ResponseEntity but we need to provide an array
        this.questions = data;
      },(error)=>{
        console.log(error);
        Swal.fire("Error","Error Server Error","error")
      }
    )
    
  }

  public deleteQuestion(quesId:any){
    Swal.fire({
      icon: 'question',
      title: "Are you sure?",
      confirmButtonText: "Delete",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.question.deleteQuestion(quesId).subscribe(
          (data: any) => {

            Swal.fire("Deleted!!", "Quiz got deleted", "success");
            this.questions= this.questions.filter((q) => q.quesId != quesId);

          },
          (error) => {
            Swal.fire("Error!!", "Server Error", "error");
          }
        )
      }
    })
    
      
    
  }

}
