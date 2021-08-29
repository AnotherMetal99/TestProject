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
    this.iab.create('https://site.com/', '_self', {location: "no"});

  
    

    this.initializeApp();
  }

  initializeApp() {
    this.platfrom.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.setupOneSignal();
    });
  }

  setupOneSignal(){
    this.oneSignal.startInit("42205905-97f0-4a6d-90af-4fa8d9a8ddd6","849882762069");
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);

    this.oneSignal.handleNotificationReceived().subscribe(data=>{
      let msg = data.payload.body;
      let title = data.payload.title;
      this.showNotification(title,msg);
    })

    this.oneSignal.handleNotificationOpened().subscribe(
      data=>{
        let msg = data.notification.payload.body;
        let title = data.notification.payload.title;
        this.showNotification(title,msg);
      })
      this.oneSignal.endInit();
  }

  showNotification(title,msg){
    this.alert.create({
      header:title,
      message:msg,
      buttons:[{
        text:"OK"
      }]

    }).then((ele)=>{
      ele.present();
    })
  }

}


