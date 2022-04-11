import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  quizzes = [
    {
      quizId: "",
      title: "Science",
      description: "This is an easy quiz",
      maxMarks: 100,
      numberOfQuestions: 20,
      active: '',
      category: {
        title: "General  "
      }

    }
  ]
  constructor(private quiz: QuizService, private router: Router) { }

  ngOnInit(): void {
    this.quiz.getQuizzes().subscribe(
      (data: any) => {
        this.quizzes = data;
      },
      (error) => {
        console.log(error);
        Swal.fire("Error!", "Error in getting quizzes", error);
      }
    );
  }

  public deleteQuiz(quizId: any) {
    // alert(quizId);
    Swal.fire({
      icon: 'question',
      title: "Are you sure?",
      confirmButtonText: "Delete",
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.quiz.deleteQuiz(quizId).subscribe(
          (data: any) => {

            Swal.fire("Deleted!!", "Quiz got deleted", "success");
            this.quizzes = this.quizzes.filter((quiz) => quiz.quizId != quizId);

          },
          (error) => {
            Swal.fire("Error!!", "Server Error", "error");
          }
        )
      }
    })
  }

  public updateQuiz(quizId:any){
    this.router.navigate(["admin-dashboard/update-quiz",quizId]);
  }

  
}
