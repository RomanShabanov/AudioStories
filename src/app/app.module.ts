import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { TabsPage } from '../pages/tabs/tabs';
import { LibraryPage } from '../pages/library/library';
import { SearchPage } from '../pages/search/search';
import { SettingsPage } from '../pages/settings/settings';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LoginPage} from '../pages/login/login';
import {PlayerPage} from '../pages/player/player';
import {SignupPage} from '../pages/signup/signup';
import {UserPage} from '../pages/user/user';



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

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
