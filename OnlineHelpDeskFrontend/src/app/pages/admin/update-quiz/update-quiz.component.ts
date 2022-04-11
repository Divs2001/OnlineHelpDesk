import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category/category.service';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  categories = [
    {
      catId: 0,
      title:""
    }
  ]

  quizData = {
    title: "",
    description: "",
    maxMarks: "",
    numberOfQuestions: "",
    active: "true",
    category: {
      catId: "",
      title:""
    }
  }

  quizId = 0;



  constructor(private route: ActivatedRoute, private quiz: QuizService,
     private category:CategoryService, private router:Router) { }

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

    this.quizId = this.route.snapshot.params['quizId'];
    this.quiz.getQuiz(this.quizId).subscribe(
      (data: any) => {
        console.log(data);
        // this.quizData = {
        //   title: data.title,
        //   description: data.description,
        //   maxMarks: data.maxMarks,
        //   numberOfQuestions: data.numberOfQuestions,
        //   active: data.active,
        //   category: data.category

        // }
        this.quizData=data;
      },
      (error)=>{
        console.log(error);
        Swal.fire("Error!!","Server Error","error")
      }
    )
  }

  public updateQuiz() {
    this.quiz.updateQuiz(this.quizData).subscribe(
      (data)=>{
        Swal.fire("Success","Successfully Updated","success").then((e)=>{
          this.router.navigate(["admin-dashboard/quizzes"]);
        })
        
      },
      (error)=>{
        Swal.fire("Error!!","Server Error","error");
      }
    )

  }
}

