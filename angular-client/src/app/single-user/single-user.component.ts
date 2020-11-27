import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-single-user',
  templateUrl: './single-user.component.html',
  styleUrls: ['./single-user.component.css']
})
export class SingleUserComponent implements OnInit {

  constructor(    private userService: UserService,
                  private route: ActivatedRoute, private router: Router) { }

  name!: string;
  age!: string;

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.userService.getUserById(id).subscribe((user: any) => {
      this.name = user[0].name;
      this.age = user[0].age;
    });
  }

}
