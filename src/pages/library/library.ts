import { Component, ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';

import { Book } from '../../models/books.interface';

@Component({
    selector: 'page-library',
    templateUrl: 'library.html'
})
export class LibraryPage {

    @ViewChild(Slides) slides: Slides;

    books: Book[];

    constructor(public navCtrl: NavController, private BooksProvider: BooksProvider) {
        this.BooksProvider.getAll().subscribe(books => {

            console.log(books);

            this.books = books;
        });

    }

}
