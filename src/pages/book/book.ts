import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';
import { Book } from '../../models/books.interface';

@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {
  bookId: string;
  book = {};
  bookFiles: Book[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private _books: BooksProvider) {
    this.bookId = navParams.get('bookId');
  }

  ngOnInit() {
    this._books.getBook(this.bookId).subscribe(book => {
      this.book = book;
      console.log(book);
    });
  }

}
