import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor(private http:HttpClient) { }

  public addQuery(queryData:any){
    console.log(queryData);
    return this.http.post(`${baseUrl}/query/addQuery`, queryData);
  }

  public getAllQueries(userId:any){
    return this.http.get(`${baseUrl}/query/getAllQueries?userId=`+userId);
  }

  public getUnresolvedQueries(userId:any){
    return this.http.get(`${baseUrl}/query/getUnresolvedQueries?userId=`+userId);
  }

  public getResolvedQueries(userId:any){
    return this.http.get(`${baseUrl}/query/getResolvedQueries?userId=`+userId);
  }
}
