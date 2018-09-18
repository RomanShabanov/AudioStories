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

    books;
    categories;
    authors;

    constructor(public navCtrl: NavController, private BooksProvider: BooksProvider) {
        this.BooksProvider.getBooks().subscribe(books => {
            this.books = books;
        });

        this.BooksProvider.getCategories().subscribe(categories => {
            this.categories = categories
        })

        this.BooksProvider.getAuthors().subscribe(authors => {
            this.authors = authors
        })

    }

}
