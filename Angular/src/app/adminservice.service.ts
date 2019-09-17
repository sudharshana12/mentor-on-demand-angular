import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {


  private baseUrl = 'http://localhost:9090';

  constructor(private http: HttpClient) { }

   block(userid:number)
   {
    console.log(userid)
    return this.http.get<any>(`${this.baseUrl}/blockAction/${userid}`)
   }
   unblock(userid:number)
   {
    return this.http.get<any>(`${this.baseUrl}/unblockAction/${userid}`)
   }
   
   getCourselist()
   {
    return this.http.get<any>(`${this.baseUrl}/viewtech`)
   }

}
