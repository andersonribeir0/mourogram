import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
@Component({
  selector: 'page-send-photo',
  templateUrl: 'send-photo.html',
})
export class SendPhotoPage {

  public form: FormGroup;

  constructor(private viewCtrl: ViewController, private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),
        Validators.required
      ])],
      message: ['', Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(255),
        Validators.required
      ])]
    });
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

  
}
