import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentor-landing-page',
  templateUrl: './mentor-landing-page.component.html',
  styleUrls: ['./mentor-landing-page.component.css']
})
export class MentorLandingPageComponent implements OnInit {
  mentorID=parseInt(localStorage.getItem('token'));
  constructor() { }
 
  
  
  ngOnInit() {
  
  }

}
