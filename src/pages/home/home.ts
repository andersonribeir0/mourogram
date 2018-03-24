import { PhotosPage } from './../photos/photos';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  photosTab: any;
  profileTab: any;

  constructor(public navCtrl: NavController) {
    this.photosTab = PhotosPage;
    this.profileTab = PhotosPage;
  }

}
