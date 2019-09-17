import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService{

  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getUser(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/getUsers`);
  }

}