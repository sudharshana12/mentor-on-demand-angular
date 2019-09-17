import { Component, OnInit } from '@angular/core';
import { requestTable } from '../requestTable';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-user-notificattion',
  templateUrl: './user-notificattion.component.html',
  styleUrls: ['./user-notificattion.component.css']
})
export class UserNotificattionComponent implements OnInit {
  rt:requestTable[];
  userID: number;
  constructor(private userservice:UserserviceService) { }

  ngOnInit() {
    this.userID = parseInt(localStorage.getItem('token'));
    this.userservice.getRequestNotif(this.userID).subscribe(
      response => this.rt = response
    )

  }

}
