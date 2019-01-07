import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit  {

  userForm: FormGroup;
  users: User[];
  emailId: string;

  constructor(private router: Router, private userService: UserService, private emailIdInput : string) {
    this.emailId = emailIdInput;
    console.log("In search-user comp");
    console.log(emailIdInput);
  }

  ngOnInit() {
    // this.userService.getSpecificUsers(this.emailId)
    // .subscribe( data => {
    //   this.users = data;
    // });
  }

}
