import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mentor-notification',
  templateUrl: './mentor-notification.component.html',
  styleUrls: ['./mentor-notification.component.css']
})
export class MentorNotificationComponent implements OnInit {
  students:User[];
  studentname:string;
  constructor(private router: Router,private userservice:UserserviceService) { }
  
 mentorID=parseInt(localStorage.getItem('token'));
  
  ngOnInit() {
  
    
        this.userservice.getStudentList(this.mentorID).subscribe(
          response => this.students = response
        );
       
  }

  accept(mentorID,studentname:string)
  {
   
     this.userservice.reqaccept(mentorID,studentname).subscribe(
       data => console.log(data)
     );
  }
  reject(mentorID,studentname:string)
  {
     this.userservice.reqreject(mentorID,studentname).subscribe(
      data => console.log(data)
     );
  }
 
}
