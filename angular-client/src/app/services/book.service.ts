import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class BookService {


  API = 'http://localhost:3000';
  books: any[] = [];


  constructor(private http: HttpClient) {}

  bookSubject = new Subject<any[]>();

  emitBooks() {
    this.bookSubject.next(this.books);
  }

  getAllBooks() {
    return this.http.get(`${this.API}/books`);
  }

  addBooks(title) {
    this.http.post(`${this.API}/books`, {title})
      .subscribe(() => {
        this.getAllBooks();
      });
    this.emitBooks();
  }

}
