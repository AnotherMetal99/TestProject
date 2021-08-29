import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.page.html',
  styleUrls: ['./splash-screen.page.scss'],
})
export class SplashScreenPage implements OnInit {

  constructor(private iab: InAppBrowser,public router: Router) {
    setTimeout(()=>{
      const browser = this.iab.create('https://site.com/', 'defaults', {location: "no"});
    }, 5000);
   }

  ngOnInit() {
  }

}
