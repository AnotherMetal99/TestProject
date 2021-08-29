import { SplashScreenPage } from './splash-screen/splash-screen.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    private platfrom: Platform,
    private oneSignal: OneSignal,
    private alert: AlertController,
    private iab: InAppBrowser, public router: Router
  ) {
    this.iab.create('https://site.com/', '_blank', {location: "no"});
    

    this.initializeApp();
  }

  initializeApp() {
    this.platfrom.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

}


