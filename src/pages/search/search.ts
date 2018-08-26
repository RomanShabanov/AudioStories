import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})
export class SearchPage {

    constructor(public navCtrl: NavController, public loadingCtrl: LoadingController) {

    }

    getItems(value){
        this.presentLoading();
        console.log(value);
    }

    presentLoading() {
        const loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    }

}