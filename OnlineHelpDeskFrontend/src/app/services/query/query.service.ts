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

  public getResolvedQueriesByRole(roleId: any) {
    
    return this.http.get(`${baseUrl}/query/resolved-queries-byRole?roleId=`+roleId);
  }

  public getUnresolvedQueriesByRole(roleId: any) {
    return this.http.get(`${baseUrl}/query/unresolved-queries-byRole?roleId=`+roleId);
  }

  public getAllQueriesByRole(roleId: any) {
    console.log(roleId);
    return this.http.get(`${baseUrl}/query/all-queries-byRole?roleId=`+roleId);
  }

  public getQuery(queryId:any){
    console.log(queryId);
    return this.http.get(`${baseUrl}/query/getQuery?queryId=`+queryId);
  }

  public addResponse(queryData:any){
    return this.http.put(`${baseUrl}/query/addResponse`, queryData);
  }
}
