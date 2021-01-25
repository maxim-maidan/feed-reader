import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  auth({username, password}){
    return this.http.get('https://jsonplaceholder.typicode.com/users/1');

  }
}
