import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { 
    
  }

  public addUser(user:any){
      return this.http.post(`${baseUrl}/users/addUser`, user);
  }

  public getUser(roleId:any){
    return this.http.get(`${baseUrl}/users/getUserByRoleId?roleId=`+roleId);
  }

  public forgotPassword(data:any){
    return this.http.post(`${baseUrl}/users/forgot-password`, data);
  }

  public resetPassword(jsonData:any){
    console.log(`${baseUrl}`);
    return this.http.put(`${baseUrl}/users/reset-password`, jsonData);
  }
}
