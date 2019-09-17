import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  submitted = false;
  constructor(private userservice:UserserviceService) { }
  
  ngOnInit() {
  }
 
  newUser(): void {
    this.submitted = false;
    this.user= new User();
  }
  save() {
    this.userservice.registerUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }
  onRegister() {
    this.submitted = true;
    this.save();
  }
}
