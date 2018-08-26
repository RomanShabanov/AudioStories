import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';

import { Book } from '../../models/books.interface';

@Component({
    selector: 'page-library',
    templateUrl: 'library.html'
})
export class LibraryPage {

    books: Book[];

    constructor(public navCtrl: NavController, private BooksProvider: BooksProvider) {
        this.BooksProvider.getAll().subscribe(books => {
            this.books = books;
        });
    }

}
