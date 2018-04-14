import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {MainPage} from "../pages/main/main";
import {StockPage} from "../pages/stock/stock";
import {FollowingPage} from "../pages/following/following";
import {PortfolioPage} from '../pages/portfolio/portfolio';
import {ManagePortfolioPage} from "../pages/manage-portfolio/manage-portfolio";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    MainPage,
    StockPage,
    FollowingPage,
    PortfolioPage,
    ManagePortfolioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    MainPage,
    StockPage,
    FollowingPage,
    PortfolioPage,
    ManagePortfolioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
