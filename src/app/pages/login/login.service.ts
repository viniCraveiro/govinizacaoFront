import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import ILogin from './login.component';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: ILogin): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/v0/login', login);
  }
}
