import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = "";
  password:string = "";

  constructor() { }

  ngOnInit() {
  }
  login() {
    if (this.username === 'admin' && this.password === 'admin123') {
      alert("Logged in Successfully");
      sessionStorage.setItem("loginstatus","success")//Used to set the data or permanent data storage & we can retrieve this data anywhere in the application
    }else{
      alert("Login Failed");
      sessionStorage.removeItem("loginstatus");
    }
  }
}
