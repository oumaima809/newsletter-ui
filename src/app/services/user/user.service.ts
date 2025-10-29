import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

const AUTH_API = `${environment.apiUrl}/api/subscriber`;
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUserEmail(email: string): Observable<any> {
    console.log(AUTH_API);
    return this.http.post(
      AUTH_API,
      {
        email
      },
      httpOptions
    );

  }
  getAllUserEmails(): Observable<any> {
    return this.http.get(
      AUTH_API+"/emails",
      httpOptions
    );

  }



}

