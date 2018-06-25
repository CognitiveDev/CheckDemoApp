import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignupPage } from '../pages/signup/signup';
import { TalkPage } from '../pages/talk/talk';
import { CheckPage } from '../pages/check/check';
import { SearchingPage } from '../pages/searching/searching';
import { CheckListPage } from '../pages/check-list/check-list';
import { Media } from '@ionic-native/media';
import { File } from '@ionic-native/file';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignupPage,
    TalkPage,
    CheckPage,
    SearchingPage,
    CheckListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignupPage,
    TalkPage,
    CheckPage,
    SearchingPage,
    CheckListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
	Media,
	File
  ]
})
export class AppModule {}