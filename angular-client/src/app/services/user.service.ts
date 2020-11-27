import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class UserService {

  userSubject = new Subject<any[]>();

  API = 'http://localhost:3000';
  users: any[] = [];


  constructor(private http: HttpClient) {}

  emitUserSubject() {
    this.userSubject.next(this.users.slice());
  }

  getAllUsers() {
    return this.http.get(`${this.API}/users`);
  }

  addUser(id, name, age) {
    this.http.post(`${this.API}/users`, {id, name, age})
        .subscribe(() => {
          this.getAllUsers();
        });
  }

  getUserById(id) {
    return this.http.get(`${this.API}/users/${id}`);
  }

}
