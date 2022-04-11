import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId:any;
  quizzes:any;
  constructor(private _route:ActivatedRoute, private quiz:QuizService) { }

  ngOnInit(): void {
    this.catId=this._route.snapshot.params["catId"];
    if(this.catId==0){
      console.log("Load all quizzes.");
      this.quiz.getQuizzes().subscribe(
        (data:any)=>{
          this.quizzes = data;
          console.log(this.quizzes);
        },
        (error)=>{
          console.log(error);
          // alert("error in loading all quizzes");
          Swal.fire("Error in loading quizzes");
          })
        }
      else{
      console.log("Load specific quiz");
    }
    
  }

}
