import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { BooksProvider } from '../../providers/books/books';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    books = [];

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private BooksProvider: BooksProvider) {

    }

    getItems(title) {

        const loader = this.loadingCtrl.create({
            content: "Please wait..."
        });

        if (title) {
            loader.present();

            this.BooksProvider.search({ title }).subscribe(books => {
                this.books = books;
                loader.dismiss();
            });

        } else {
            this.books = [];
        }

    }
}