import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Book } from '../../models/books.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface BookId extends Book { id: string };

@Injectable()
export class BooksProvider {

  private booksCollection: AngularFirestoreCollection<Book>;
  books: Observable<Book[]>;

  constructor(public http: HttpClient, private db: AngularFirestore) {
    this.booksCollection = this.db.collection<BookId>('books');
    this.books = this.booksCollection.snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Book;
      const id = a.payload.doc.id;
      return { id, ...data }
    })))
  }

  getAll() {
    return this.books;
  }

  getBook(bookId) {
    return this.booksCollection.doc(bookId).valueChanges();
  }

  getBookFiles(bookId){
    return this.booksCollection.doc(bookId).collection('files').snapshotChanges().pipe(map(actions => actions.map(a => {
      const data = a.payload.doc.data() as Book;
      const id = a.payload.doc.id;
      return { id, ...data }
    })))
  }

}
