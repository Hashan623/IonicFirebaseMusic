import { Component } from '@angular/core';
import { NavController, AlertController, ActionSheetController, ToastController } from 'ionic-angular';
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AlbumsPage } from '../albums/albums'
import { ArtistsPage } from '../artists/artists'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  songs: FirebaseListObservable<any[]>;
  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController,
    db: AngularFireDatabase,
    afAuth: AngularFireAuth) {
  this.songs = db.list('/songs');
}

addSong(){
  let prompt = this.alertCtrl.create({
    title: 'Enter Song',
    message: "Enter the title and artist",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      },
      {
        name: 'artist',
        placeholder: 'Artist'
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
          this.songs.push({
            title: data.title,
            artist: data.artist,            
          });
          let toast = this.toastCtrl.create({
          message: 'Song added successfully',
          duration: 3000,
          position: 'top'
          });
          toast.present();
        }
      }
    ]
  });
  prompt.present();
}

showOptions(songId, songTitle, songArtist) {
  let actionSheet = this.actionSheetCtrl.create({
    title: 'What do you want to do?',
    buttons: [
      {
        text: 'Delete song',
        role: 'destructive',
        handler: () => {
          this.removeSong(songId);
        }
      },{
        text: 'Update title',
        handler: () => {
          this.updateSong(songId, songTitle, songArtist);
        }
      },{
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
        }
      }
    ]
  });
  actionSheet.present();
}

removeSong(songId: string) {
  let alert = this.alertCtrl.create({
    title: 'Confirm deletion',
    message: 'Are you sure you want to delete this song?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Delete',
        role : 'destructive',
        handler: () => {
          this.songs.remove(songId);
          let toast = this.toastCtrl.create({
          message: 'Song deleted',
          duration: 3000,
          position: 'top'
          });
          toast.present();
        }
      }
    ]
  });
  alert.present();
}

updateSong(songId, songTitle, songArtist){
  let prompt = this.alertCtrl.create({
    title: 'Edit Info',
    message: "Edit title and artist info",
    inputs: [
      {
        name: 'title',
        placeholder: 'Title',
        value: songTitle
      },
      {
        name: 'artist',
        placeholder: 'Artist',
        value: songArtist
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
          this.songs.update(songId, {
            title: data.title,
            artist: data.artist
          });
          let toast = this.toastCtrl.create({
          message: 'Song info updated',
          duration: 3000,
          position: 'top'
          });
          toast.present();
        }
      }
    ]
  });
  prompt.present();
}

viewAlbum(item){
  this.navCtrl.push(AlbumsPage, {
      item: item
    });
}

viewArtists(item){
  this.navCtrl.push(ArtistsPage, {
      item: item
    });
}

}
