import { Component, OnInit } from '@angular/core';
import { Courses } from '../Courses';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-viewtech',
  templateUrl: './viewtech.component.html',
  styleUrls: ['./viewtech.component.css']
})
export class ViewtechComponent implements OnInit {
  courses:Courses[];
  constructor(private adminservice:AdminserviceService) { }

  ngOnInit() {
 
    this.adminservice.getCourselist().subscribe(
      response => this.courses = response
    );

  }

}
