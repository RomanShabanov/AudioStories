import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookPage } from '../book/book';
import { BooksProvider } from '../../providers/books/books';
import { Book } from '../../models/books.interface';

@Component({
    selector: 'page-library',
    templateUrl: 'library.html'
})
export class LibraryPage {

    books: Book[];

    constructor(public navCtrl: NavController, private Books: BooksProvider) {

    }

    ngOnInit() {
        this.Books.getAll();
    }

    viewBook(bookId) {
        this.navCtrl.push(BookPage, {
            bookId
        });
    }


}
