import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { LibraryPage } from '../pages/library/library';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';
import { IntroPage } from '../pages/intro/intro';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { PlayerPage } from '../pages/player/player';
import { SignupPage } from '../pages/signup/signup';
import { UserPage } from '../pages/user/user';
import { BookPage } from '../pages/book/book';
import { BooksProvider } from '../providers/books/books';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from '../components/components.module';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { firebaseConfig} from './db_credentials';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LibraryPage,
    SearchPage,
    SettingsPage,
    LoginPage,
    PlayerPage,
    SignupPage,
    UserPage,
    BookPage,
    IntroPage,
  ],
  imports: [
    BrowserModule,
    ComponentsModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LibraryPage,
    SearchPage,
    SettingsPage,
    LoginPage,
    PlayerPage,
    SignupPage,
    UserPage,
    BookPage,
    IntroPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    BooksProvider
  ]
})
export class AppModule { }
