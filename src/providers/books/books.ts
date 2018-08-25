import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';

@Injectable()
export class BooksProvider {

  books;

  constructor(public http: HttpClient, private db: AngularFirestore) {

  }

  public getAll() {
    this.db.collection('books').valueChanges().subscribe(books => {
      console.log(JSON.stringify(books));
    })
  }

}
