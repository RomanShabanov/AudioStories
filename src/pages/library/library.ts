import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-library',
    templateUrl: 'library.html'
})
export class LibraryPage {

    books = [{
            title: "Война и мир",
            year: 1863,
            author: "Лев Толстой",
            image: "https://godliteratury.ru/wp-content/uploads/2015/12/voyna-i-mir.jpg"
        },
        {
            title: "Вий",
            year: 1833,
            author: "Николай Гоголь",
            image: "http://etextlib.ru/Content/BookImages/52571_titul_entrycopy.jpg"
        },
        {
            title: "Мартин Иден",
            year: 1908,
            author: "Джек Лондон",
            image: "https://simg.marwin.kz/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/migrated/article/22319/41_tn3.jpg"
        },
        {
            title: "Портрет Дориана Грэя",
            year: 1890,
            author: "Оскар Уайлд",
            image: "https://i1.rozetka.ua/goods/2449872/28944049_images_2449872905.jpg"
        },
        {
            title: "Краткая история времени",
            year: 1988,
            author: "Стивен Хокинг",
            image: "https://simg.marwin.kz/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/migrated/article/22319/41_tn3.jpg"
        },
    ]


    constructor(public navCtrl: NavController) {

    }
}
