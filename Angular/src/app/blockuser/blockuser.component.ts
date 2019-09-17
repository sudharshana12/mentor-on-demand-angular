import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../User';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-blockuser',
  templateUrl: './blockuser.component.html',
  styleUrls: ['./blockuser.component.css']
})
export class BlockuserComponent implements OnInit {
 users:User[];
  constructor(private loginservice:LoginserviceService,private adminservice:AdminserviceService) { }

  ngOnInit() {
    this.loginservice.getUser().subscribe(
      response => this.users = response
    );

     }

     block(userid : number)
     {
       console.log(userid)
       this.adminservice.block(userid).subscribe(
       data => console.log(data)
     );
     }

    unblock(userid : number)
     {
       this.adminservice.unblock(userid).subscribe(
       data => console.log(data)
     );
     }
}
