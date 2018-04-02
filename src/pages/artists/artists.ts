import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-artists',
  templateUrl: 'artists.html',
})
export class ArtistsPage {
  artists: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
    public navParams: NavParams, db: AngularFireDatabase,) {
    this.artists = db.list('/artists');
    //this.albums = db.list('/artists/-KrdtkVEvpE_y2SLkjuk/albums/name');
  }
  

addArtist(){
  let prompt = this.alertCtrl.create({
    title: 'Enter artist',
    message: "Enter the artist",
    inputs: [
      {
        name: 'name',
        placeholder: 'Title'
      },
      {
        name: 'country',
        placeholder: 'Country'
      },
      {
        name: 'albums',
        placeholder: 'Albums'
      },
      {
        name: 'followers',
        placeholder: 'Followers'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
        handler: data => {
        }
      },
      {
        text: 'Save',
        handler: data => {
          this.artists.push({
            name: data.name,   
            pic: data.name,
            country: data.country,
            qty: data.albums,
            followers: data.followers
          });
        }
      }
    ]
  });
  prompt.present();
}

}

