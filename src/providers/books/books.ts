import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/books.interface';

export interface BookId extends Book { id: string };

@Injectable()
export class BooksProvider {

  private serverUrl: string = "http://localhost:3000";
  constructor(public http: HttpClient) {

  }

  getAll() {
    return this.http.get<Book[]>(this.serverUrl + '/books')
  }

  getBook(bookId) {
    return this.http.get<Book[]>(this.serverUrl + '/books/' + bookId)
  }


  search(query) {
    let params = new HttpParams();
    params = params.append('title', query.title);

    return this.http.get<Book[]>(this.serverUrl + '/books', { params });
  }
}
