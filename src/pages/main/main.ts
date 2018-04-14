import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {FollowingPage} from "../following/following";
import {Chart} from "chart.js";
import {StockPage} from "../stock/stock";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  public tickerLists: any = [
    {
      title: 'New',
      shown: true,
      tickers: [
        {
          title: 'AAPL',
          suggestion: 'Did a thing',
          shown: false,
          price: 134.67,
          change: -47.23
        }, {
          title: 'GOOG',
          suggestion: 'over selling',
          shown: false,
          price: 134.67,
          change: 8.2
        }, {
          title: 'NASDAQ',
          suggestion: 'changed more',
          shown: false,
          price: 134.67,
          change: -38.0
        }, {
          title: 'IBX',
          suggestion: 'new thing',
          shown: false,
          price: 134.67,
          change: 9.78
        }
      ]
    }, {
      title: 'Trending',
      shown: true,
      tickers: [
        {
          title: 'AAPL',
          suggestion: 'Did a thing',
          shown: false,
          price: 134.67,
          change: -47.23
        }, {
          title: 'GOOG',
          suggestion: 'over selling',
          shown: false,
          price: 134.67,
          change: 8.2
        }, {
          title: 'NASDAQ',
          suggestion: 'changed more',
          shown: false,
          price: 134.67,
          change: -38.0
        }, {
          title: 'IBX',
          suggestion: 'new thing',
          shown: false,
          price: 134.67,
          change: 9.78
        }
      ]
    }
  ];

  @ViewChild('lineCanvas') lineCanvas;
  public lineChart: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: "My First dataset",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40],
            spanGaps: false,
          }
        ]
      }

    });
  }

  public goToFollowing() {
    this.navCtrl.push(FollowingPage);
  }

  public toggleShownTicker(listIndex, tickerIndex) {
    console.log(listIndex, tickerIndex);
    this.tickerLists[listIndex].tickers[tickerIndex].shown = !this.tickerLists[listIndex].tickers[tickerIndex].shown;
  }

  public toggleShownList(listIndex) {
    console.log(listIndex);
    this.tickerLists[listIndex].shown = !this.tickerLists[listIndex].shown;
  }

  public goToStock(ticker) {
    this.navCtrl.push(StockPage, {ticker: ticker});
  }

}

