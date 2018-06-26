import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {AuthService} from "../auth.service";

export class User {
  constructor(public email: string, public password: string) {
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>(); 
  @Input() enabled = true; 

  ngOnInit() {}

  login(email, password) { 
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      console.log(`Emitting`);
      this.loggedIn.emit(new User(email, password));
    }
  }
  

}
