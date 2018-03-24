import { SendPhotoPage } from './../send-photo/send-photo';
import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-take-picture',
  templateUrl: 'take-picture.html',
})
export class TakePicturePage {

  constructor(private viewCtrl: ViewController, private modalCtrl: ModalController) {
    let modal = this.modalCtrl.create(SendPhotoPage)
    modal.present()
  }

  takePicture(){

  }

  dismiss() {
    this.viewCtrl.dismiss()
  }
}
