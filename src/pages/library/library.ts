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
            autor: "Лев Толстой",
            image: "https://godliteratury.ru/wp-content/uploads/2015/12/voyna-i-mir.jpg"
        },
        {
            title: "Вий",
            year: 1833,
            autor: "Николай Гоголь",
            image: "http://etextlib.ru/Content/BookImages/52571_titul_entrycopy.jpg"
        },
        {
            title: "Мартин Иден",
            year: 1908,
            autor: "Джек Лондон",
            imgage: "https://irecommend.img.c3.r-99.com/sites/default/files/product-images/21875/dzhek_london__martin_iden.jpg"
        },
        {
            title: "Портрет Дориана Грэя",
            year: 1890,
            autor: "Оскар Уайлд",
            image: "https://i1.rozetka.ua/goods/2449872/28944049_images_2449872905.jpg"
        },
        {
            title: "Краткая история времени",
            year: 1988,
            autor: "Стивен Хокинг",
            image: "https://simg.marwin.kz/media/catalog/product/cache/c687aa7517cf01e65c009f6943c2b1e9/migrated/article/22319/41_tn3.jpg"
        },
    ]


    constructor(public navCtrl: NavController) {

    }
}
