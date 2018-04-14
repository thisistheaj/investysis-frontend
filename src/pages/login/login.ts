import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TabsPage} from "../tabs/tabs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MainPage} from "../main/main";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public form: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fb: FormBuilder) {
    this.form = fb.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8), Validators.required])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }

  public signUp() {
    this.navCtrl.push(MainPage);
    // this.authPvdr.logInWithEmail(this.form.get('email').value, this.form.get('password').value).then(successData => {
    //   if (!successData.code) {
    //     this.navCtrl.push(TabsPage);
    //   } else {
    //     alert(successData.message);
    //   }
    // }).catch(errorData => {
    //   alert('Could not log in because ' + errorData.message);
    // });
  }

  // public goToForgotPassword() {
  //   this.navCtrl.push(ForgotPasswordPage);
  // }

}
