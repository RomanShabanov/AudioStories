import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';

import { Book } from '../../models/books.interface';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  bookId: number;
  book: Book;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Books: BooksProvider) {
    this.bookId = navParams.get('bookId');
  }

  ngOnInit() {

  }

}
