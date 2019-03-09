import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private globalService:GlobalServiceService)  { }
  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    if (this.username == 'admin' && this.password == 'admin') {
   this.router.navigateByUrl('home');
   this.globalService.islogin=true;
    } else {
      
   this.globalService.islogin=false;
      alert("Invalid credentials");

    }
  }

}
