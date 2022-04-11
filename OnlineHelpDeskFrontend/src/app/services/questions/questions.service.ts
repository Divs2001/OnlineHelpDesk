import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor(private http:HttpClient) { 
  }
  public getQuestionsOfQuiz(quizId:any){
    return this.http.get(`${baseUrl}/question/getAllQuestionOfQuiz?quizId=`+quizId);
  }

  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/addQuestion`,question);
  }

  public deleteQuestion(quesId:any){
    return this.http.delete(`${baseUrl}/question/deleteQuestion?quesId=`+quesId);
  }
}
