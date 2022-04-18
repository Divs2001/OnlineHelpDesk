import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../helper';

@Injectable({
  providedIn: 'root'
})
export class DomainsService {

  constructor(private http:HttpClient) { }

  public getRoles(){
    return this.http.get(`${baseUrl}/roles/getRoles`);
  }
}
