import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  users:User[];
  email:string;
  password:string;
  @Input() userId : number;
  constructor(private router: Router,private loginservice:LoginserviceService) { }

  ngOnInit() {
     this.loginservice.getUser().subscribe(
       response => this.users = response
     )

  }
  
  onSubmit()
  {
    
   // console.log(this.users.length);
   for(let i=0;i<this.users.length;i++)
   {
     
    if(this.email === "Admin@gmail.com" && this.password === "admin123")
    {
      this.router.navigateByUrl("/admin-landing-page");
    }
     
    else if(this.users[i].email == this.email && this.users[i].password == this.password  && this.users[i].userType == "User")
     {
       if(this.users[i].blockStatus == "unblocked")
       {
      console.log(this.users[i].email+this.users[i].password+this.users[i].userType);
      localStorage.setItem('token', this.users[i].id.toString());
      this.router.navigateByUrl("/user-landing-page");
       }
       else{
        this.router.navigateByUrl("/blocked-page");
       }
     }
     else if(this.users[i].email == this.email && this.users[i].password == this.password  && this.users[i].userType == "Mentor")
     {
       if(this.users[i].blockStatus == "unblocked")
       {
      localStorage.setItem('token', this.users[i].id.toString());
      this.router.navigateByUrl("/mentor-landing-page");
       }
       else
       {
        this.router.navigateByUrl("/blocked-page"); 
       }
     }
     
    }
  
  }
}

