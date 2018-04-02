import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the AlbumsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-albums',
  templateUrl: 'albums.html',
})
export class AlbumsPage {
  albums: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public navParams: NavParams, db: AngularFireDatabase,) {
    // this.albums = db.list('/artists/albums'); {
    this.albums = db.list('/artists/albums'); {
  }
}

}
