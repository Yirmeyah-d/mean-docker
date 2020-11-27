import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../services/user.service';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.css']
})
export class BookViewComponent implements OnInit {
  books: [] = [];
  booksSubscription: Subscription;

  constructor(private http: HttpClient, private userService: UserService) { }

  ngOnInit() {
    this.getAllBooks();
  }

  onSubmit(form: NgForm) {
    const title = form.value.title;
    this.addBooks(title);
    form.reset();
  }


  addBooks(title) {
    this.http.post(`${this.userService.API}/books`, {title})
      .subscribe(() => {
        this.getAllBooks();
      });
  }

  // Get all users from the API
  getAllBooks() {
    this.http.get(`${this.userService.API}/books`)
      .subscribe((books: []) => {
        console.log(books);
        this.books = books;
      });
  }

}
