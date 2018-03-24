import { TakePicturePage } from './../take-picture/take-picture';
import { PhotosPage } from './../photos/photos';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  photosTab: any;
  profileTab: any;

  constructor(private navCtrl: NavController, private modalController: ModalController) {
    this.photosTab = PhotosPage;
    this.profileTab = PhotosPage;
  }

  showSendPhoto(){
    let modal = this.modalController.create(TakePicturePage);
    modal.present();
  }
}
