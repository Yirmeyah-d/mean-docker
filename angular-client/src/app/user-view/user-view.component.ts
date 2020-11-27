import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  users: any[] = [];
  userSubscription!: Subscription;

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {

    this.userSubscription = this.userService.getAllUsers().subscribe((users: any) => {
      // console.log(users);
      this.users = users;
    });
    // this.userService.emitUserSubject();
  }




}
