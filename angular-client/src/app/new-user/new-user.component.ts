import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  users: any[] = [];

  constructor(private http: HttpClient, private userService: UserService, private router: Router) { }


  ngOnInit() {
    this.userService.getAllUsers().subscribe((users: any) => {
      console.log(users);
      this.users = users;
    });
  }


  onSubmit(form: NgForm) {
    console.log(this.users);
    const name = form.value.name;
    const age = form.value.age;
    this.userService.addUser(this.users.length + 1, name, age);
    this.router.navigate(['/users']);
  }
}
