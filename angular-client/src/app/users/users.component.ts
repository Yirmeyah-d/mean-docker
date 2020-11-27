import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @Input() name!: string;
  @Input() age!: string;
  @Input() indexUser!: number;
  @Input() id!: number;

  constructor() { }



  ngOnInit() {

  }

}
