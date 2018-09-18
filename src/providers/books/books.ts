import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../../models/books.interface';

@Injectable()
export class BooksProvider {

  private serverUrl: string = "http://localhost:3000";
  constructor(public http: HttpClient) {

  }

  getBooks() {
    return this.http.get(this.serverUrl + '/books');
  }

  getCategories() {
    return this.http.get(this.serverUrl + '/categories');
  }

  getBook(bookId) {
    return this.http.get(this.serverUrl + '/books/' + bookId)
  }

  search(query) {
    let params = new HttpParams();
    params = params.append('title', query.title);

    return this.http.get<Book[]>(this.serverUrl + '/books', { params });
  }

  getAuthors() {
    return this.http.get(this.serverUrl + '/authors')
  }


}
