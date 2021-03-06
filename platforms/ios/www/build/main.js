webpackJsonp([1],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(28);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var BooksProvider = /** @class */ (function () {
    function BooksProvider(http, db) {
        this.http = http;
        this.db = db;
        this.booksCollection = this.db.collection('books');
        this.books = this.booksCollection.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    }
    BooksProvider.prototype.getAll = function () {
        return this.books;
    };
    BooksProvider.prototype.getBook = function (bookId) {
        return this.booksCollection.doc(bookId).valueChanges();
    };
    BooksProvider.prototype.getBookFiles = function (bookId) {
        return this.booksCollection.doc(bookId).collection('files').snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    BooksProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], BooksProvider);
    return BooksProvider;
}());

//# sourceMappingURL=books.js.map

/***/ }),

/***/ 184:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 226:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/user/user.module": [
		484,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 226;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__library_library__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__library_library__["a" /* LibraryPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Library" tabIcon="folder"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Search" tabIcon="search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibraryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_books_books__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LibraryPage = /** @class */ (function () {
    function LibraryPage(navCtrl, BooksProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.BooksProvider = BooksProvider;
        this.BooksProvider.getAll().subscribe(function (books) {
            _this.books = books;
        });
    }
    LibraryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-library',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/library/library.html"*/'<ion-header>\n\n    <ion-navbar>\n        <ion-title>Library</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <h1>Библиотека</h1>\n\n    <book-preview *ngFor="let book of books" [book]="book"></book-preview>\n\n</ion-content>'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/library/library.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_books_books__["a" /* BooksProvider */]])
    ], LibraryPage);
    return LibraryPage;
}());

//# sourceMappingURL=library.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    SearchPage.prototype.getItems = function (value) {
        this.presentLoading();
        console.log(value);
    };
    SearchPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 3000
        });
        loader.present();
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/search/search.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>\n            Search\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-searchbar (ionInput)="getItems($event.target.value)"></ion-searchbar>\n\n\n</ion-content>'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/search/search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/settings/settings.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Settings</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list no-border>\n\n    <ion-list-header>\n      General\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'planet\' item-start></ion-icon>\n      Language\n      <ion-note item-end>\n        English\n      </ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="false"></ion-toggle>\n      <ion-label>\n        Background sounds\n      </ion-label>\n      <ion-icon name=\'body\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'leaf\' item-start></ion-icon>\n      Herbology\n      <ion-icon name=\'rose\' item-end color="secondary"></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'flask\' item-start></ion-icon>\n      Potions\n      <ion-note item-end>\n        Poisonous\n      </ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Activities\n    </ion-list-header>\n\n    <ion-item>\n      Incantation\n      <ion-icon name=\'color-wand\' item-start></ion-icon>\n      <ion-note item-end>Crucio!</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle checked="true"></ion-toggle>\n      <ion-label>\n        Quidditch Practice\n      </ion-label>\n      <ion-icon name=\'brush\' item-start></ion-icon>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'wine\' item-start></ion-icon>\n      Mead Drinking\n      <ion-note item-end>Yes please</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Friends\n    </ion-list-header>\n\n    <ion-item>\n      <ion-icon name=\'flash\' item-start></ion-icon>\n      Harry\n      <ion-note item-end>The boy who lived</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'book\' item-start></ion-icon>\n      Hermoine\n      <ion-note item-end>Muggle-born</ion-note>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name=\'beer\' item-start></ion-icon>\n      Ron\n      <ion-note item-end>Brilliant!</ion-note>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/settings/settings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/signup/signup.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign up</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Full Name</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Email</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Repeat Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full>Signup</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_music_controls__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayerPage = /** @class */ (function () {
    function PlayerPage(navCtrl, navParams, musicControls) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.musicControls = musicControls;
    }
    PlayerPage.prototype.ionViewDidLoad = function () {
        this.musicControls.create({
            track: 'Time is Running Out',
            artist: 'Muse',
            cover: 'albums/absolution.jpg',
            // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
            //           or a remote url ('http://...', 'https://...', 'ftp://...')
            isPlaying: true,
            dismissable: true,
            // hide previous/next/close buttons:
            hasPrev: false,
            hasNext: false,
            hasClose: true,
            // iOS only, optional
            album: 'Absolution',
            duration: 60,
            elapsed: 10,
            hasSkipForward: true,
            hasSkipBackward: true,
            skipForwardInterval: 15,
            skipBackwardInterval: 15,
            hasScrubbing: false,
            // Android only, optional
            // text displayed in the status bar when the notification (and the ticker) are updated, optional
            ticker: 'Now playing "Time is Running Out"',
            // All icons default to their built-in android equivalents
            // The supplied drawable name, e.g. 'media_play', is the name of a drawable found under android/res/drawable* folders
            playIcon: 'media_play',
            pauseIcon: 'media_pause',
            prevIcon: 'media_prev',
            nextIcon: 'media_next',
            closeIcon: 'media_close',
            notificationIcon: 'notification'
        });
    };
    PlayerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-player',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/player/player.html"*/'<!--\n  Generated template for the PlayerPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>player</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/player/player.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_music_controls__["a" /* MusicControls */]])
    ], PlayerPage);
    return PlayerPage;
}());

//# sourceMappingURL=player.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_books_books__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player_player__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookPage = /** @class */ (function () {
    function BookPage(navCtrl, navParams, _books) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._books = _books;
        this.book = {};
        this.bookFiles = [];
        this.bookId = navParams.get('bookId');
    }
    BookPage.prototype.ngOnInit = function () {
        var _this = this;
        this._books.getBook(this.bookId).subscribe(function (book) {
            _this.book = book;
            console.log(book);
        });
        this._books.getBookFiles(this.bookId).subscribe(function (bookFiles) {
            _this.bookFiles = bookFiles;
            console.log(bookFiles);
        });
    };
    BookPage.prototype.playFile = function (fileId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__player_player__["a" /* PlayerPage */], {
            files: this.bookFiles,
            fileId: fileId
        });
    };
    BookPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/book/book.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ book.title }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h1>{{ book.title }}</h1>\n\n  <div *ngFor="let file of bookFiles">\n    <span (click)="playFile(file.id)">{{ file.title }}</span>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/book/book.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_books_books__["a" /* BooksProvider */]])
    ], BookPage);
    return BookPage;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>user</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(408);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_library_library__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_search_search__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_player_player__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_user_user__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_book_book__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_books_books__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_components_module__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_screen_orientation__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__db_credentials__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_music_controls__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_18__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_22__db_credentials__["a" /* firebaseConfig */]),
                __WEBPACK_IMPORTED_MODULE_21_angularfire2_firestore__["b" /* AngularFirestoreModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_library_library__["a" /* LibraryPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_player_player__["a" /* PlayerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_book_book__["a" /* BookPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_intro_intro__["a" /* IntroPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__providers_books_books__["a" /* BooksProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_music_controls__["a" /* MusicControls */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__ = __webpack_require__(279);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, screenOrientation) {
        this.screenOrientation = screenOrientation;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        // Set orientation to portrait
        if (platform.is('mobileweb') && platform.is('core')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/intro/intro.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>intro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-slides pager>\n\n    <ion-slide>\n      <h2>Slide 1</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>Slide 2</h2>\n    </ion-slide>\n\n    <ion-slide>\n      <h2>Slide 3</h2>\n    </ion-slide>\n\n  </ion-slides>\n\n</ion-content>'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/intro/intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.openSignUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Sign In</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label floating>Username</ion-label>\n      <ion-input type="text" value=""></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Password</ion-label>\n      <ion-input type="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button full>Sign In</button>\n\n  <button ion-button icon-start full>\n    <ion-icon name="logo-facebook"></ion-icon>\n    Sign in with Facebook\n  </button>\n\n<button ion-button icon-start full>\n<ion-icon name="logo-googleplus"></ion-icon>\n  Sign in with Google\n</button>\n\n  <button ion-button full clear (click)="openSignUp()" v>Sign Up</button>\n\n</ion-content>'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_preview_book_preview__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__book_preview_book_preview__["a" /* BookPreviewComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__book_preview_book_preview__["a" /* BookPreviewComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_book_book__ = __webpack_require__(283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookPreviewComponent = /** @class */ (function () {
    function BookPreviewComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    BookPreviewComponent.prototype.ngOnInit = function () { };
    BookPreviewComponent.prototype.openBook = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_book_book__["a" /* BookPage */], {
            bookId: this.book.id
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], BookPreviewComponent.prototype, "book", void 0);
    BookPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'book-preview',template:/*ion-inline-start:"/Users/roman/Documents/AudioStories/src/components/book-preview/book-preview.html"*/'<div class="book_preview">\n  <div class="book_preview__cover" [ngStyle]="{\'background-image\': \'url(\' + book.cover + \')\'}">\n    <div class="book_preview__cover__glance"></div>\n  </div>\n  <div class="book_preview__info">\n    <h3 class="book_preview__title" (click)="openBook()">{{book.title}}</h3>\n  </div>\n</div>'/*ion-inline-end:"/Users/roman/Documents/AudioStories/src/components/book-preview/book-preview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], BookPreviewComponent);
    return BookPreviewComponent;
}());

//# sourceMappingURL=book-preview.js.map

/***/ }),

/***/ 483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyDK4SB9YW987dUJ8xLGLjSmZ3lFqxuPtA4",
    authDomain: "audiostories-f94d1.firebaseapp.com",
    databaseURL: "https://audiostories-f94d1.firebaseio.com",
    projectId: "audiostories-f94d1",
    storageBucket: "audiostories-f94d1.appspot.com",
    messagingSenderId: "992451771749"
};
//# sourceMappingURL=db_credentials.js.map

/***/ })

},[285]);
//# sourceMappingURL=main.js.map