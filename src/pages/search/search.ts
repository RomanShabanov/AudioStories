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

    getItems(value) {

        const loader = this.loadingCtrl.create({
            content: "Please wait..."
        });

        if (value) {
            loader.present();

            this.BooksProvider.search(value).subscribe(books => {
                console.log(books);

                this.books = books;

                loader.dismiss();
            });

        } else {
            this.books = [];
        }

    }
}