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
}
