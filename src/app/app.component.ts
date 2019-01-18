import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ChatLijstPage } from '../pages/chat-lijst/chat-lijst';
import { LoginPage } from '../pages/login/login';
import { ChatPage } from '../pages/chat/chat';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = 'LoginPage';
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    this.pages = [
      { title: 'HomePage', component: 'HomePage' },
      { title: 'Employees', component: 'EmployeePage' },
      { title: 'ChatLijstPage', component: 'ChatLijstPage' },
      { title: 'LoginPage', component: 'LoginPage' },
      { title: 'ChatPage', component: 'ChatPage' }
    ];

  }
}
