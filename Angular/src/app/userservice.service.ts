import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {


  
  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

  getMentor(searchvalue : string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/search/${searchvalue}`);
  }

  registerUser(user: User) {
    return this.http.post(`${this.baseUrl}` + `/register`, user);
  }
  sendReq(userid:number,mentorid:number): Observable<any> {
  
    return this.http.get<any>(`${this.baseUrl}/sendRequest/${userid}/${mentorid}`);
  }
  
  getStudentList(mentorid : number): Observable<any> {
   
    return this.http.get<any>(`${this.baseUrl}/listRequest/${mentorid}`);
  }
  
  reqaccept(mentorid : number,studentname:string): Observable<any> {
    console.log("hihi");
    return this.http.get<any>(`${this.baseUrl}/accept/${mentorid}/${studentname}`);
  }

  reqreject(mentorid : number,studentname:string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/reject/${mentorid}/${studentname}`);
  }
  
  getRequestNotif(userid:number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/requestlist/${userid}`);
  }


}
