import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from '../User';
import { requestTable } from '../requestTable';


@Component({
  selector: 'app-user-landing-page',
  templateUrl: './user-landing-page.component.html',
  styleUrls: ['./user-landing-page.component.css']
})
export class UserLandingPageComponent implements OnInit {
  searchvalue : string;
  mentors : User[];
  requestTable : requestTable[];
  constructor(private router: Router,private userservice: UserserviceService) { }
userID : number;
  ngOnInit() {
     this.userID = parseInt(localStorage.getItem('token'));
  }
  
  search()
  {
    this.userservice.getMentor(this.searchvalue).subscribe(
      response => this.mentors = response
    )

  }

  giverequest(mentorid:number)
  {
    //console.log(mentorid);
    this.userservice.sendReq(this.userID,mentorid).subscribe(
      response => this.requestTable = response
    )
  }

}
