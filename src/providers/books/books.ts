import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from '../../models/books.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
    return {};
  }


  search(value) {
  }
}
