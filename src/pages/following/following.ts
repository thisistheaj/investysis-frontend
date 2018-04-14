import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FollowingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-following',
  templateUrl: 'following.html',
})
export class FollowingPage {

  public tickers: any[] = [
    {
      title: 'AAPL',
      price: 134.67,
      change: -47.23
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FollowingPage');
  }

  public searchCallback(evt) {
    console.log('Searching: ', evt)
  }

}
