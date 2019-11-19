import { Component, OnInit } from '@angular/core';
//Import the service
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  //Inject the service into the constructor
  constructor(private userService: UserService) {

    //Call the test method from the service
    console.log(this.userService.test());
  }

  ngOnInit() {}

}