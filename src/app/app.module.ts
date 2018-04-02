import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AlbumsPage } from '../pages/albums/albums'
import { ArtistsPage } from '../pages/artists/artists'
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { InAppBrowser } from '@ionic-native/in-app-browser';

export const firebaseConfig = {
  apiKey: "AIzaSyA2iGwBKugqSJc3mKLnvlS5eAWnppA5icU",
    authDomain: "mypwa-9abeb.firebaseapp.com",
    databaseURL: "https://mypwa-9abeb.firebaseio.com",
    projectId: "mypwa-9abeb",
    storageBucket: "mypwa-9abeb.appspot.com",
    messagingSenderId: "642628904587"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AlbumsPage,
    ArtistsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AlbumsPage,
    ArtistsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
